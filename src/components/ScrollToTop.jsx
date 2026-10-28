import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "../lib/gsapSetup.js";
import { scrollToTarget } from "../lib/smoothScroll.js";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const target = hash && document.querySelector(hash);
      scrollToTarget(target || 0, { immediate: true });
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
