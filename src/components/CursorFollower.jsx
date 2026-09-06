import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsapSetup.js";
import { CursorArrow } from "./icons.jsx";
import { useVisitorName } from "../context/VisitorNameContext.jsx";

/**
 * Replaces the native cursor with a trailing arrow + nickname tag once the
 * intro has collected a name. gsap.quickTo lags the tag behind the real
 * pointer for a smoothed, delayed follow instead of a rigid 1:1 tracking.
 */
export default function CursorFollower() {
  const { visitorName } = useVisitorName();
  const wrapRef = useRef(null);
  const [fineCursor, setFineCursor] = useState(() => window.matchMedia("(pointer: fine)").matches);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const onChange = (e) => setFineCursor(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const active = fineCursor && Boolean(visitorName);

  useEffect(() => {
    if (!active) return undefined;

    const el = wrapRef.current;
    const setX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const setY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

    function onMove(e) {
      setX(e.clientX);
      setY(e.clientY);
      setVisible(true);
    }
    function onLeave() {
      setVisible(false);
    }

    document.documentElement.classList.add("cursor-follower-active");
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-follower-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      setVisible(false);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={wrapRef}
      className={`fixed left-0 top-0 z-[9998] flex items-center gap-[10px] pointer-events-none transition-opacity duration-200 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <CursorArrow className="size-[22px] text-[color:var(--pricolor-orange,#ff5c22)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
      <span className="bg-[color:var(--pricolor-orange,#ff5c22)] rounded-[100px] px-[10px] py-[4px] font-['Manrope'] font-normal text-[12px] text-white whitespace-nowrap shadow-[0_6px_16px_rgba(255,92,34,0.35)]">
        {visitorName}
      </span>
    </div>
  );
}
