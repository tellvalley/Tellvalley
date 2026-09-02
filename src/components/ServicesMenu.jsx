import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services.js";
import { ChevronRight } from "./icons.jsx";
import CtaButton from "./CtaButton.jsx";

export default function ServicesMenu() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative group/svc">
      <Link
        to="/services"
        className="group content-stretch cursor-pointer flex flex-col gap-[2px] items-center justify-center px-[12px] py-[6px] relative shrink-0"
      >
        <span className="flex items-center gap-[4px]">
          <p className="[word-break:break-word] font-['Manrope'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap transition-colors duration-300 group-hover:text-white">
            Services
          </p>
          <ChevronRight className="size-[9px] rotate-90 text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-out group-hover:text-white group-hover:-rotate-90" />
        </span>
        <span className="h-[1px] w-0 bg-[color:var(--pricolor-orange,#ff5c22)] transition-all duration-300 ease-out group-hover:w-[16px]" />
      </Link>

      <div className="absolute top-full left-0 pt-[16px] w-[640px] max-w-[85vw] opacity-0 -translate-y-[8px] pointer-events-none transition-all duration-300 ease-out group-hover/svc:opacity-100 group-hover/svc:translate-y-0 group-hover/svc:pointer-events-auto z-30">
        <div className="bg-[#141414] border border-white/10 rounded-[24px] p-[24px] flex gap-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col gap-[16px] w-[240px] shrink-0">
            <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.5)]">Services</span>
            <div className="flex flex-col gap-[10px]">
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  to={`/services#${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-center gap-[8px] font-['Manrope'] text-[15px] transition-colors duration-200 ${
                    active === i ? "text-white font-normal" : "text-[rgba(255,255,255,0.55)] font-extralight hover:text-white"
                  }`}
                >
                  <ChevronRight
                    className={`size-[9px] shrink-0 text-[color:var(--pricolor-orange,#ff5c22)] transition-opacity duration-200 ${
                      active === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {s.title}
                </Link>
              ))}
            </div>
            <CtaButton href="/services" className="mt-[6px] w-fit">
              View all services
            </CtaButton>
          </div>

          <div className="flex-1 relative rounded-[16px] overflow-hidden min-h-[240px] bg-black">
            {SERVICES.map((s, i) => (
              <img
                key={s.slug}
                src={s.preview}
                alt=""
                className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
