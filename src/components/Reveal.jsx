import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsapSetup.js";

/**
 * Fades + slides children into view. If `stagger` is set, animates the
 * direct children of the wrapped element one after another; otherwise
 * animates the wrapped element itself as a single block.
 * `immediate` skips ScrollTrigger and just plays once on mount (for
 * above-the-fold chrome like the nav).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 32,
  duration = 0.9,
  delay = 0,
  stagger = 0,
  start = "top 85%",
  immediate = false,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: stagger || 0,
          ease: "power3.out",
          scrollTrigger: immediate
            ? undefined
            : {
                trigger: el,
                start,
                toggleActions: "play none none none",
              },
        }
      );
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

export { ScrollTrigger };
