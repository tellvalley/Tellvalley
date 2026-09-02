import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsapSetup.js";

export default function Counter({ to, suffix = "", duration = 1.6, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, suffix, duration]);

  return (
    <p ref={ref} className={className}>
      0{suffix}
    </p>
  );
}
