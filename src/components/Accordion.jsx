import { useState } from "react";

export default function Accordion({ items, defaultOpen = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="flex flex-col w-full">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="border-b border-[rgba(255,255,255,0.15)]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex items-center justify-between gap-[20px] w-full py-[24px] text-left cursor-pointer"
            >
              <span className="font-['Manrope'] font-normal text-[18px] md:text-[20px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                {item.q}
              </span>
              <span
                className={`shrink-0 text-[color:var(--pricolor-orange,#ff5c22)] text-[22px] leading-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div className="grid transition-[grid-template-rows] duration-300 ease-out overflow-hidden" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className="overflow-hidden">
                <p className="font-['Manrope'] font-extralight text-[14px] md:text-[16px] text-[rgba(255,255,255,0.7)] pb-[24px] max-w-[720px] text-pretty">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
