import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import ServicesMenu from "./ServicesMenu.jsx";
import CtaButton from "./CtaButton.jsx";

const LINKS = [
  { label: "Products", to: "/product" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
];

const MOBILE_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/product" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Work with Us", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <Reveal
      as="div"
      immediate
      y={-16}
      duration={0.7}
      className="absolute content-stretch flex flex-col items-center justify-center left-0 py-[24px] top-0 w-full z-50"
    >
      <div className="relative z-30 content-stretch flex items-center justify-between px-6 md:px-[82px] shrink-0 w-full">
        <Link
          to="/"
          className="group [word-break:break-word] flex flex-col font-['Manrope'] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap transition-transform duration-300 hover:scale-[1.04]"
        >
          <p>
            <span className="leading-[normal]">Tellvalley</span>
            <span className="[word-break:break-word] font-['Manrope'] font-bold leading-[normal] text-[#ff5c22] inline-block transition-transform duration-300 group-hover:rotate-[360deg]">.</span>
          </p>
        </Link>

        <div className="hidden md:flex content-stretch gap-[20px] items-center justify-center relative shrink-0">
          <ServicesMenu />
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="group content-stretch cursor-pointer flex flex-col gap-[2px] items-center justify-center px-[12px] py-[6px] relative shrink-0"
            >
              <p className="[word-break:break-word] font-['Manrope'] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap transition-colors duration-300 group-hover:text-white">
                {link.label}
              </p>
              <span className="h-[1px] w-0 bg-[color:var(--pricolor-orange,#ff5c22)] transition-all duration-300 ease-out group-hover:w-[16px]" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-[16px]">
          <CtaButton href="/contact">Work with Us</CtaButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative size-[28px] flex items-center justify-center shrink-0 cursor-pointer"
          >
            <span
              className={`absolute h-[1.5px] w-[20px] bg-white rounded-full transition-all duration-300 ease-out ${
                open ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-[20px] bg-white rounded-full transition-opacity duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-[20px] bg-white rounded-full transition-all duration-300 ease-out ${
                open ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </div>
    </Reveal>

    {/* Mobile menu overlay */}
    <div
      className={`md:hidden fixed inset-0 z-40 bg-[#1c1c1c] flex flex-col transition-opacity duration-300 ease-out ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col gap-[4px] px-6 pt-[110px] pb-[40px] overflow-y-auto">
        {MOBILE_LINKS.map((link, i) => (
          <Link
            key={link.label}
            to={link.to}
            className="font-['Manrope'] font-normal text-[28px] text-white py-[14px] border-b border-white/10 transition-all duration-300 ease-out"
            style={{
              transitionDelay: open ? `${i * 40}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(12px)",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
    </>
  );
}
