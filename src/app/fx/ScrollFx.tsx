"use client";
import { useEffect } from "react";

/**
 * Restores two scroll behaviours the capture missed.
 *
 * ditto captures each viewport by jumping straight to a scroll offset, which never feeds
 * Webflow's IX2 engine the incremental scroll events it tweens on. The navbar was therefore
 * frozen in its transparent top-of-page state, and only 4 of the page's reveals were recorded.
 *
 * Both effects are applied from JS, so with JS disabled the page still renders in its final,
 * fully-visible state — nothing here can permanently hide content.
 *
 * Measured on https://ixolyn.webflow.io/ : the navbar tweens from rgba(4,26,21,0) to
 * rgb(4,26,21), reaching full opacity ~110ms after the scroll starts and settling within the
 * first ~100px of travel. Desktop only — below lg the live navbar is the light --surface bar
 * and never changes, which the capture already reproduces correctly.
 */
export default function ScrollFx() {
  useEffect(() => {
    // Honour the validator's measurement mode — it grades the static frame.
    if ((window as unknown as { __dittoMotionStopped?: boolean }).__dittoMotionStopped) return;

    const cleanups: Array<() => void> = [];
    const banner = document.querySelector<HTMLElement>('[role="banner"]');

    if (banner) {
      banner.classList.add("fx-nav");
      const onScroll = () => banner.classList.toggle("fx-nav-solid", window.scrollY > 60);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        banner.classList.remove("fx-nav", "fx-nav-solid");
      });
    }

    // The hero panel used to be re-animated here. It never actually drove (the inline
    // width/margin were never applied at any scroll offset), which left the captured
    // half-grown box floating over the hero. The panel now carries its full-bleed end
    // state in CSS instead, so there is nothing to drive.

    // Marquees. Same story as the video panel: the capture froze each train mid-cycle as a
    // static transform, so the strips sit crooked and still — and it also truncated the
    // duplicate copies a marquee needs to loop (the client ticker kept a 1335px copy of its
    // 1602px train; the treatment gallery kept a single 600px card of its 2400px train; the
    // showcase kept a full-width but near-empty second train). So each strip is normalised:
    // keep the primary train — recognised by the frozen mid-cycle transform baked into its
    // class and by being wide enough to overflow its clipping ancestor — drop the partial
    // copies, append a clone of the primary, and run the shared -100%/20s loop, which is
    // seamless once both copies are identical. All DOM edits are restored on cleanup.
    // Carousel cards carry the same kind of baked transform but are far narrower than their
    // clip, which is what the width floor excludes.
    const marqueeTrains = Array.from(document.querySelectorAll<HTMLElement>("div")).filter((el) => {
      if (!/transform-\[matrix\(1,0,0,1,-/.test(el.className)) return false;
      if (el.offsetWidth < 1000) return false;
      let clip: HTMLElement | null = el.parentElement;
      for (let i = 0; i < 5 && clip; i++, clip = clip.parentElement) {
        if (getComputedStyle(clip).overflow !== "visible" && clip.clientWidth < el.offsetWidth) return true;
      }
      return false;
    });
    const marqueeHosts = new Set<HTMLElement>();
    for (const train of marqueeTrains) {
      // A qualifying sibling (e.g. the ticker's 1335px partial copy) is removed by the
      // iteration that processes its train; skip anything already detached.
      if (!train.isConnected) continue;
      const host = train.parentElement as HTMLElement;
      if (marqueeHosts.has(host)) continue;
      marqueeHosts.add(host);
      const removed = Array.from(host.children).filter(
        (k): k is HTMLElement => k instanceof HTMLElement && k !== train,
      );
      for (const r of removed) r.remove();
      const copy = train.cloneNode(true) as HTMLElement;
      host.appendChild(copy);
      for (const t of [train, copy]) t.classList.add("fx-marquee");
      cleanups.push(() => {
        copy.remove();
        train.classList.remove("fx-marquee");
        for (const r of removed) host.appendChild(r);
      });
    }

    // Service carousel: while its section is pinned, the live site advances the card row by
    // exactly one card width (each card tweens translate3d 0% -> -100% of itself) and
    // crossfades the centre emphasis to the next card, over roughly the 52%..79% stretch of
    // the pin (measured: cards move over scrollY secTop+1080..+1480 against a ~1500px pin).
    // The capture double-triggered that step and froze the cards at -768px (two card widths);
    // treat the frozen offset as capture artefact: rebase to 0 and drive the single live step.
    const frozenCards = Array.from(document.querySelectorAll<HTMLElement>("div")).filter((e) => {
      if (e.offsetWidth < 300 || e.offsetWidth > 470) return false;
      return /transform-\[matrix\(1,0,0,1,-768/.test(e.className);
    });
    const cTrain = frozenCards[0]?.parentElement as HTMLElement | undefined;
    if (cTrain && frozenCards.length >= 6) {
      const cCards = Array.from(cTrain.children) as HTMLElement[];
      let cSticky: HTMLElement | null = cTrain;
      while (cSticky && getComputedStyle(cSticky).position !== "sticky") cSticky = cSticky.parentElement;
      const cTrack = cSticky?.parentElement;
      if (cSticky && cTrack) {
        // Structural paths (child-index chains) to the two per-card layers the live site
        // fades: the "main" layer (0.5 faded / 1 active) and the description (0 / 1 active).
        // Derived from a non-active card so both carry their non-active opacity, then applied
        // uniformly — including to the captured-active card, which neutralises its baked state.
        const pathTo = (root: HTMLElement, pred: (el: HTMLElement) => boolean): number[] | null => {
          const walk = (el: HTMLElement, trail: number[]): number[] | null => {
            for (let i = 0; i < el.children.length; i++) {
              const c = el.children[i] as HTMLElement;
              if (pred(c)) return [...trail, i];
              const deeper = walk(c, [...trail, i]);
              if (deeper) return deeper;
            }
            return null;
          };
          return walk(root, []);
        };
        const byPath = (root: HTMLElement, path: number[]): HTMLElement | null => {
          let el: HTMLElement | null = root;
          for (const i of path) el = (el?.children[i] as HTMLElement) ?? null;
          return el;
        };
        const emphOf = (c: HTMLElement) => {
          const inner = Array.from(c.querySelectorAll<HTMLElement>("div")).find((d) => {
            const o = +getComputedStyle(d).opacity;
            return o > 0.3 && o < 0.95;
          });
          return inner ?? null;
        };
        const donor = cCards.find((c) => emphOf(c));
        const mainPath = donor ? pathTo(donor, (el) => el === emphOf(donor)) : null;
        const descPath = donor
          ? pathTo(donor, (el) => el.tagName === "DIV" && +getComputedStyle(el).opacity < 0.05)
          : null;
        // Active at rest: two cards left of the captured-active card (the capture ran the step
        // twice); the step hands emphasis to its right neighbour, matching the live pass.
        const capturedActive = cCards.findIndex((c) => !emphOf(c));
        const restActive = capturedActive >= 2 ? capturedActive - 2 : 2;
        const cardW = frozenCards[0].offsetWidth;

        let cQueued = false;
        const cPaint = () => {
          cQueued = false;
          const r = cTrack.getBoundingClientRect();
          const stickyTop = parseFloat(getComputedStyle(cSticky).top) || 0;
          const travel = r.height - cSticky.offsetHeight;
          const pp = travel <= 0 ? 0 : Math.min(1, Math.max(0, (stickyTop - r.top) / travel));
          const step = Math.min(1, Math.max(0, (pp - 0.52) / 0.27));
          for (const card of cCards) {
            card.style.transform = `translateX(${-cardW * step}px)`;
            if (!mainPath || !descPath) continue;
            const main = byPath(card, mainPath);
            const desc = byPath(card, descPath);
            const i = cCards.indexOf(card);
            const emphasis = i === restActive ? 1 - 0.5 * step : i === restActive + 1 ? 0.5 + 0.5 * step : 0.5;
            if (main) main.style.opacity = String(emphasis);
            if (desc) desc.style.opacity = i === restActive ? String(1 - step) : i === restActive + 1 ? String(step) : "0";
          }
        };
        const cOnScroll = () => {
          if (cQueued) return;
          cQueued = true;
          requestAnimationFrame(cPaint);
        };
        cPaint();
        window.addEventListener("scroll", cOnScroll, { passive: true });
        window.addEventListener("resize", cOnScroll, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", cOnScroll);
          window.removeEventListener("resize", cOnScroll);
          for (const card of cCards) {
            card.style.transform = "";
            if (mainPath) { const m = byPath(card, mainPath); if (m) m.style.opacity = ""; }
            if (descPath) { const d = byPath(card, descPath); if (d) d.style.opacity = ""; }
          }
        });
      }
    }

    // Home service cards below lg. The section only pins on desktop, so the scroll-driven step
    // above never runs there and the row sat at the capture's frozen offset: the first card off
    // screen, the second cut in half, descriptions faded out. Turn it into a strip that can be
    // swiped, snaps card by card, and advances on its own while nobody is touching it.
    const cardRow = document.querySelector<HTMLElement>('[data-ditto-id="style-div-62"]');
    const cardStrip = cardRow?.parentElement;
    if (cardRow && cardStrip) {
      const narrow = window.matchMedia("(max-width: 1024px)");
      const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
      const unfaded: HTMLElement[] = [];
      let timer: number | undefined;
      let resumeAt = 0;
      const hold = () => { resumeAt = Date.now() + 6000; };

      const advance = () => {
        if (Date.now() < resumeAt || document.hidden) return;
        const r = cardStrip.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const first = cardRow.firstElementChild as HTMLElement | null;
        if (!first) return;
        const step = first.offsetWidth;
        const end = cardStrip.scrollWidth - cardStrip.clientWidth - 2;
        const next = cardStrip.scrollLeft + step > end ? 0 : cardStrip.scrollLeft + step;
        cardStrip.scrollTo({ left: next, behavior: "smooth" });
      };

      const enable = () => {
        cardStrip.classList.add("fx-cards-strip");
        cardRow.style.marginLeft = "0";
        for (const card of Array.from(cardRow.children) as HTMLElement[]) {
          card.style.transform = "none";
          card.style.scrollSnapAlign = "center";
          for (const el of Array.from(card.querySelectorAll<HTMLElement>("*"))) {
            if (+getComputedStyle(el).opacity < 1) {
              el.style.opacity = "1";
              unfaded.push(el);
            }
          }
        }
        cardStrip.scrollLeft = 0;
        if (!calm.matches && timer === undefined) timer = window.setInterval(advance, 3500);
      };
      const disable = () => {
        cardStrip.classList.remove("fx-cards-strip");
        cardRow.style.marginLeft = "";
        for (const card of Array.from(cardRow.children) as HTMLElement[]) {
          card.style.transform = "";
          card.style.scrollSnapAlign = "";
        }
        for (const el of unfaded.splice(0)) el.style.opacity = "";
        if (timer !== undefined) { window.clearInterval(timer); timer = undefined; }
      };
      const sync = () => (narrow.matches ? enable() : disable());

      sync();
      narrow.addEventListener("change", sync);
      for (const ev of ["pointerdown", "touchstart", "wheel"]) {
        cardStrip.addEventListener(ev, hold, { passive: true });
      }
      cleanups.push(() => {
        narrow.removeEventListener("change", sync);
        for (const ev of ["pointerdown", "touchstart", "wheel"]) cardStrip.removeEventListener(ev, hold);
        disable();
      });
    }

    // "Why patients choose" image stack: four images share one frame, each clipped by an
    // absolutely-positioned overflow-hidden wrap. On the live site the wraps collapse
    // 474px -> 0 in sequence as the section scrolls through — each wipe spans ~40% of an
    // 800px window that starts ~9% into the section, staggered by 30% — revealing the next
    // image beneath; the last wrap never collapses. The capture froze all four at full
    // height. z-order is imposed explicitly so DOM order matches the reveal order.
    const missionHeading = Array.from(document.querySelectorAll<HTMLElement>("h1,h2,h3")).find((e) =>
      /Why patients choose/i.test(e.textContent || ""),
    );
    const missionSec = missionHeading?.closest("section") as HTMLElement | undefined;
    if (missionSec) {
      const wraps = Array.from(missionSec.querySelectorAll<HTMLElement>("img"))
        .filter((i) => i.offsetWidth > 300)
        .map((i) => {
          let el: HTMLElement | null = i.parentElement;
          while (el && el !== missionSec) {
            const cs = getComputedStyle(el);
            if (cs.position === "absolute" && cs.overflow === "hidden") return el;
            el = el.parentElement;
          }
          return null;
        })
        .filter((w): w is HTMLElement => !!w);
      if (wraps.length >= 3) {
        const baseH = wraps.map((w) => w.offsetHeight);
        wraps.forEach((w, i) => {
          w.style.zIndex = String(wraps.length - i);
        });
        let mQueued = false;
        const mPaint = () => {
          mQueued = false;
          const r = missionSec.getBoundingClientRect();
          const start = r.height * 0.09;
          const span = r.height * 0.49;
          const P = span <= 0 ? 0 : Math.min(1, Math.max(0, (-r.top - start) / span));
          for (let i = 0; i < wraps.length - 1; i++) {
            const local = Math.min(1, Math.max(0, (P - i * 0.3) / 0.4));
            wraps[i].style.height = baseH[i] * (1 - local) + "px";
          }
        };
        const mOnScroll = () => {
          if (mQueued) return;
          mQueued = true;
          requestAnimationFrame(mPaint);
        };
        mPaint();
        window.addEventListener("scroll", mOnScroll, { passive: true });
        window.addEventListener("resize", mOnScroll, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", mOnScroll);
          window.removeEventListener("resize", mOnScroll);
          wraps.forEach((w) => {
            w.style.height = "";
            w.style.zIndex = "";
          });
        });
      }
    }

    // Entrance reveals. The shared chrome renders the navbar as the first <section> and the
    // footer as the last, with the page body in between — both are excluded.
    //
    // The observer itself decides what to hide, rather than a measurement taken here: on mount
    // the page's images have no intrinsic size yet, so every section still measures near the
    // top and a rect-based filter would select none of them. The first observer callback runs
    // against the settled layout, so an element is hidden only once we know it is off-screen —
    // which also means hiding it can never cause a visible flash.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && "IntersectionObserver" in window) {
      const all = Array.from(document.querySelectorAll<HTMLElement>("section"));
      const targets = all
        .filter((el) => !el.contains(banner as Node) && el !== all[all.length - 1])
        // Skip anchors DittoMotion already drives, so the two never fight over one element.
        .filter((el) => !el.hasAttribute("data-ditto-id"));

      if (targets.length) {
        const io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              const el = e.target as HTMLElement;
              if (e.isIntersecting) {
                // `.fx-in` alone is inert — it only animates an element already carrying
                // `.fx-reveal`, so sections visible on first paint are left untouched.
                el.classList.add("fx-in");
                io.unobserve(el);
              } else if (!el.classList.contains("fx-in")) {
                el.classList.add("fx-reveal");
              }
            }
          },
          { rootMargin: "0px 0px -10% 0px" },
        );
        for (const el of targets) io.observe(el);
        cleanups.push(() => {
          io.disconnect();
          for (const el of targets) el.classList.remove("fx-reveal", "fx-in");
        });
      }
    }

    return () => {
      for (const c of cleanups) c();
    };
  }, []);

  return null;
}
