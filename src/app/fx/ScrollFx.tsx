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

    // Hero video panel: on the live site it widens from an inset box to full-bleed while its
    // sticky section is pinned (measured at 1280px: 830px wide until scrollY 200, reaching its
    // 1240px cap by scrollY 1000). The capture froze one mid-animation frame as static CSS —
    // `w-[54.4rem] mx-[12.8rem]` — so the panel renders permanently half-grown. Re-drive it.
    //
    // The panel is found structurally: walking up from the <video>, it is the first ancestor
    // with a large symmetric inline margin. Progress comes from the pinned section's own
    // scroll track, which is the responsive equivalent of the absolute offsets above.
    const video = document.querySelector("video");
    let panel: HTMLElement | null = null;
    for (let el = video?.parentElement, i = 0; el && i < 8; el = el.parentElement, i++) {
      const cs = getComputedStyle(el);
      const ml = parseFloat(cs.marginLeft);
      if (ml > 20 && Math.abs(ml - parseFloat(cs.marginRight)) < 2) {
        panel = el;
        break;
      }
    }

    let sticky: HTMLElement | null = panel;
    while (sticky && getComputedStyle(sticky).position !== "sticky") sticky = sticky.parentElement;
    const track = sticky?.parentElement ?? null;

    if (panel && track) {
      let baseWidth = 0;
      let baseMargin = 0;
      const measure = () => {
        panel.style.width = "";
        panel.style.marginInline = "";
        const cs = getComputedStyle(panel);
        baseWidth = parseFloat(cs.width);
        baseMargin = parseFloat(cs.marginLeft);
      };
      let queued = false;
      const paint = () => {
        queued = false;
        const r = track.getBoundingClientRect();
        const travel = r.height - window.innerHeight;
        const raw = travel <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / travel));
        // The clone's sticky track is longer than the window the live site grows over, so the
        // raw track progress is remapped onto it: growth starts an eighth of the way down and
        // completes at five eighths (live: scrollY 200 -> 1000 against a 1600px track). Without
        // this the panel reaches full width only at the very end of the pin.
        const P_START = 0.125;
        const P_END = 0.625;
        const p = Math.min(1, Math.max(0, (raw - P_START) / (P_END - P_START)));
        const full = (panel.parentElement as HTMLElement).clientWidth;
        panel.style.width = baseWidth + (full - baseWidth) * p + "px";
        panel.style.marginInline = baseMargin * (1 - p) + "px";
      };
      const onScroll = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(paint);
      };
      const onResize = () => {
        measure();
        paint();
      };
      measure();
      paint();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        panel.style.width = "";
        panel.style.marginInline = "";
      });
    }

    // Marquees. Same story as the video panel: the capture froze each train mid-cycle as a
    // static transform (e.g. matrix(1,0,0,1,-265.66,0)), so the strips sit crooked and still.
    // They are found structurally — a clipping container noticeably narrower than its content,
    // holding two or more equal-width children laid out side by side.
    for (const host of Array.from(document.querySelectorAll<HTMLElement>("div"))) {
      if (getComputedStyle(host).overflow === "visible") continue;
      if (host.scrollWidth < host.clientWidth * 1.4 || host.clientWidth < 300) continue;
      const trains = Array.from(host.children).filter(
        (k): k is HTMLElement => k instanceof HTMLElement && k.tagName === "DIV",
      );
      if (trains.length < 2 || trains.length > 4) continue;
      const rects = trains.map((t) => t.getBoundingClientRect());
      if (rects.some((r) => r.width < 300)) continue;
      if (Math.max(...rects.map((r) => r.width)) - Math.min(...rects.map((r) => r.width)) > 4) continue;
      const sideBySide = rects.every((r, i) => i === 0 || r.left > rects[i - 1].left + rects[i - 1].width - 6);
      if (!sideBySide) continue;

      for (const t of trains) t.classList.add("fx-marquee");
      cleanups.push(() => {
        for (const t of trains) t.classList.remove("fx-marquee");
      });
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
