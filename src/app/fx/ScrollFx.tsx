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
