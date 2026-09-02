import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, InstagramIcon, TikTokIcon, XIcon, LinkedInIcon, YoutubeIcon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";
import { gsap } from "../lib/gsapSetup.js";
import { SERVICES } from "../data/services.js";

const SOCIALS = [
  ["Instagram", "https://www.instagram.com/tellvalleystudios/", InstagramIcon],
  ["Tiktok", "https://www.tiktok.com/@tellvalley_studios", TikTokIcon],
  ["Twitter", "https://twitter.com/ValleyTell", XIcon],
  ["Linkedin", "https://www.linkedin.com/company/tellvalley/", LinkedInIcon],
  ["Youtube", "https://www.youtube.com/@tellvalley", YoutubeIcon],
];

function Watermark() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 60 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <p
      ref={ref}
      className="[word-break:break-word] flex flex-col font-['Manrope'] font-bold justify-center leading-[0] text-[clamp(80px,20vw,285px)] text-[rgba(255,255,255,0.05)] text-center whitespace-nowrap mt-[60px] select-none pointer-events-none leading-[normal]"
    >
      Tellvalley
    </p>
  );
}

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="bg-gradient-to-t from-[18.474%] from-[rgba(255,92,34,0.58)] overflow-clip to-[#141414] to-[73.789%] w-full pt-[94px] pb-[91.5px] relative">
        <Reveal as="div" stagger={0.12} className="mx-auto content-stretch flex flex-col gap-[30px] items-center w-[1348px] max-w-full px-4">
          <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
            <div className="flex flex-col font-['Manrope'] font-semibold justify-center relative shrink-0 text-[color:var(--pricolor-orange,#ff5c22)]">
              <p className="leading-[normal]">/</p>
            </div>
            <div className="flex flex-col font-['Manrope'] font-extralight justify-center relative shrink-0 text-white">
              <p className="leading-[normal]">Want to get us on board?</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Manrope'] font-normal justify-center leading-[0] relative shrink-0 text-[36px] text-[rgba(255,255,255,0.7)] text-center w-[1055px] max-w-full">
            <p className="leading-[44.8px] mb-0">Thoughtful design, built the right way.</p>
            <p className="leading-[44.8px] text-white">{`Let's explore it together.`}</p>
          </div>
          <div className="content-stretch flex flex-col items-center pt-[14px] relative shrink-0 w-full">
            <Link
              to="/contact"
              className="group [word-break:break-word] bg-white content-stretch flex gap-[10px] h-[64px] items-center justify-center leading-[normal] px-[12px] py-[6px] relative rounded-[100px] shrink-0 text-center w-[202px] whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_12px_32px_rgba(255,92,34,0.4)] active:scale-[0.96]"
            >
              <p className="font-['Manrope'] font-normal relative shrink-0 text-[#1c1c1c] text-[14px]">Contact us</p>
              <ChevronRight className="size-[12px] text-[color:var(--pricolor-orange,#ff5c22)] transition-transform duration-300 ease-out group-hover:translate-x-[4px]" />
            </Link>
          </div>
        </Reveal>
        <Watermark />
      </div>
      <div className="bg-[#141414] w-full">
        <div className="mx-auto content-stretch flex flex-col gap-[60px] items-center pb-[40px] pt-[90px] px-4 w-[1368px] max-w-full">
          <Reveal as="div" stagger={0.1} className="content-stretch flex flex-wrap items-start justify-between gap-[40px] relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start leading-[0] relative shrink-0 w-[258px] whitespace-nowrap">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px]">
                <div className="flex flex-col font-['Manrope'] font-semibold justify-center relative shrink-0 text-[color:var(--pricolor-orange,#ff5c22)]">
                  <p className="leading-[normal]">/</p>
                </div>
                <div className="flex flex-col font-['Manrope'] font-light justify-center relative shrink-0 text-white">
                  <p className="leading-[normal]">Get in touch</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Manrope'] font-normal gap-[10px] items-start relative shrink-0 text-[24px] text-white w-full">
                <a
                  className="group flex flex-col justify-center relative shrink-0"
                  href="mailto:hello@tellvalley.agency"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[28.8px] underline transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                    hello@tellvalley.agency
                  </p>
                </a>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[28.8px]">+234-813-323-2542</p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start leading-[0] relative shrink-0 whitespace-nowrap">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px]">
                <div className="flex flex-col font-['Manrope'] font-semibold justify-center relative shrink-0 text-[color:var(--pricolor-orange,#ff5c22)]">
                  <p className="leading-[normal]">/</p>
                </div>
                <div className="flex flex-col font-['Manrope'] font-light justify-center relative shrink-0 text-white">
                  <p className="leading-[normal]">Services</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Manrope'] font-normal gap-[5px] items-start relative shrink-0 text-[14px] text-white">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services#${s.slug}`}
                    className="flex flex-col justify-center relative shrink-0 transition-colors duration-300 hover:text-[color:var(--pricolor-orange,#ff5c22)]"
                  >
                    <p className="leading-[28.8px]">{s.title}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[14px] items-start md:items-end relative shrink-0 w-[258px] max-w-full">
              <div className="[word-break:break-word] content-stretch flex gap-[10px] items-start leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
                <div className="flex flex-col font-['Manrope'] font-semibold justify-center relative shrink-0 text-[color:var(--pricolor-orange,#ff5c22)]">
                  <p className="leading-[normal]">/</p>
                </div>
                <div className="flex flex-col font-['Manrope'] font-light justify-center relative shrink-0 text-white">
                  <p className="leading-[normal]">Follow us on</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start md:items-end relative shrink-0 w-full">
                {SOCIALS.map(([label, href, Icon]) => (
                  <a
                    key={label}
                    className="group content-stretch flex gap-[16px] items-center relative shrink-0 cursor-pointer"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="[word-break:break-word] flex flex-col font-['Manrope'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white w-[66px] transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                      <p className="leading-[28.8px]">{label}</p>
                    </div>
                    <div className="relative shrink-0 size-[32px] rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white transition-all duration-300 ease-out group-hover:border-[color:var(--pricolor-orange,#ff5c22)] group-hover:text-[color:var(--pricolor-orange,#ff5c22)] group-hover:scale-[1.1]">
                      <Icon className="size-[16px]" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="[word-break:break-word] flex flex-col font-['Manrope'] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
            <p className="leading-[28.8px]">© Tellvalley Studio 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
