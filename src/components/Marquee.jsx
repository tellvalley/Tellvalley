import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsapSetup.js";

/**
 * Infinite horizontal auto-scroll for a row of items (e.g. partner logos).
 * Duplicates `children` once to create a seamless loop, pauses on hover.
 */
export default function Marquee({ children, speed = 50, gap = 78, className = "" }) {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const ctx = gsap.context(() => {
      const setWidth = track.children[0].offsetWidth + gap;
      gsap.set(track, { x: 0 });
      tweenRef.current = gsap.to(track, {
        x: -setWidth,
        duration: setWidth / speed,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, gap]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className="flex items-center w-max"
        style={{ gap: `${gap}px` }}
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
