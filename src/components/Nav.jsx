import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import ServicesMenu from "./ServicesMenu.jsx";
import CtaButton from "./CtaButton.jsx";

const LINKS = [
  { label: "Products", to: "/product" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
];

export default function Nav() {
  return (
    <Reveal
      as="div"
      immediate
      y={-16}
      duration={0.7}
      className="absolute content-stretch flex flex-col items-center justify-center left-0 py-[24px] top-0 w-full z-10"
    >
      <div className="content-stretch flex items-center justify-between px-6 md:px-[82px] relative shrink-0 w-full">
        <Link
          to="/"
          className="group [word-break:break-word] flex flex-col font-['Manrope'] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap transition-transform duration-300 hover:scale-[1.04]"
        >
          <p>
            <span className="leading-[normal]">Tellvalley</span>
            <span className="[word-break:break-word] font-['Manrope'] font-bold leading-[normal] text-[#ff5c22] inline-block transition-transform duration-300 group-hover:rotate-[360deg]">.</span>
          </p>
        </Link>
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
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
        <CtaButton href="/contact">Work with Us</CtaButton>
      </div>
    </Reveal>
  );
}
