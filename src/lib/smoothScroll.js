import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsapSetup.js";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * One Lenis instance for the whole site, driven by GSAP's ticker so
 * ScrollTrigger animations stay in sync with the smoothed scroll position.
 * Touch devices keep native scrolling (Lenis' default). Skipped entirely
 * for visitors who prefer reduced motion.
 */
export const lenis = prefersReducedMotion
  ? null
  : new Lenis({
      // Longer glide + gentler wheel steps = slower, silkier scroll.
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.6,
    });

if (lenis) {
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Overlays (intro, mobile menu) can overlap, so count open locks.
let locks = 0;

export function lockScroll() {
  locks += 1;
  document.body.style.overflow = "hidden";
  lenis?.stop();
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks > 0) return;
  document.body.style.overflow = "";
  lenis?.start();
}

/** Jump instantly (route changes) or glide (in-page links) to a target. */
export function scrollToTarget(target, { immediate = false } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { immediate, force: true });
  } else if (target === 0) {
    window.scrollTo(0, 0);
  } else {
    target.scrollIntoView({ block: "start" });
  }
}
