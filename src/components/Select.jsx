import { ChevronRight } from "./icons.jsx";

/**
 * Wraps a native <select> with a custom chevron so the dropdown icon
 * gets consistent, deliberate spacing instead of the browser default
 * caret sitting flush against the edge.
 *
 * `className` sizes/positions the wrapper (e.g. w-full, min-w-[180px]).
 * `selectClassName` carries the select's own visual style (border,
 * padding, colors) — left padding is untouched, right padding is
 * fixed via inline style so it can't be overridden by a px-* utility.
 */
export default function Select({ className = "", selectClassName = "", children, ...props }) {
  return (
    <div className={`relative ${className}`}>
      <select {...props} style={{ paddingRight: "40px" }} className={`appearance-none w-full ${selectClassName}`}>
        {children}
      </select>
      <ChevronRight className="absolute right-[16px] top-1/2 -translate-y-1/2 rotate-90 size-[9px] text-[rgba(255,255,255,0.6)] pointer-events-none" />
    </div>
  );
}
