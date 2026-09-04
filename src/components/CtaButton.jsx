import { Link } from "react-router-dom";
import { ChevronRight } from "./icons.jsx";

export default function CtaButton({ href = "mailto:hello@tellvalley.com", children, className = "", onClick }) {
  const isInternal = href.startsWith("/");
  const Comp = isInternal ? Link : "a";
  const linkProps = isInternal ? { to: href } : { href };

  return (
    <Comp
      {...linkProps}
      onClick={onClick}
      className={
        "group inline-flex items-center gap-[10px] bg-white rounded-[100px] px-[12px] py-[6px] text-[12px] text-center whitespace-nowrap cursor-pointer " +
        "transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_10px_30px_rgba(255,92,34,0.35)] active:scale-[0.97] " +
        className
      }
    >
      <p className="font-['Manrope'] font-normal text-[#1c1c1c]">{children}</p>
      <ChevronRight className="size-[12px] text-[color:var(--pricolor-orange,#ff5c22)] transition-transform duration-300 ease-out group-hover:translate-x-[4px]" />
    </Comp>
  );
}
