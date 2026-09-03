import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import { SERVICES } from "../data/services.js";
import img011 from "../assets/services/services-img011.png";
import imgLine1 from "../assets/services/services-imgLine1.svg";

const WHAT_WE_DO = [
  { title: "Agency", items: ["Product Design", "Website Design & Development", "Consultancy", "Media Production", "Documentary Production"] },
  { title: "Academy", items: ["Mentorship", "Bootcamps", "Trainings", "Workshops", "Hackathons"] },
  { title: "Community", items: ["Hub", "Networking", "Collaboration", "Opportunities", "Events"] },
];

function Eyebrow({ children }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className="font-['Manrope'] font-extralight text-white">{children}</span>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-[#1c1c1c] relative w-full overflow-x-clip">
      <div className="absolute -translate-x-1/2 h-[700px] left-1/2 top-0 w-[1536px] max-w-none pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-2 size-full" src={img011} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,0)]" />
      </div>

      <Nav />

      {/* Hero */}
      <Reveal
        as="section"
        stagger={0.12}
        y={24}
        className="relative max-w-[1055px] mx-auto px-6 pt-[160px] pb-[120px] flex flex-col items-center text-center gap-[16px]"
      >
        <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Services</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[28px] md:text-[36px] leading-[1.25] text-balance">
          <span className="text-[rgba(255,255,255,0.7)]">{`We don't just close the knowledge gap or offer services...`}</span>
          <br />
          <span className="text-white">We drive measurable impact results.</span>
        </h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)] max-w-[700px] text-pretty">
          Whether you want to learn with us or hire us this is here is how our creative pipeline approach and process is clearly defined.
        </p>
      </Reveal>

      {/* Service list */}
      <Reveal as="section" stagger={0.1} className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[46px]">
        {SERVICES.map((service, i) => (
          <div key={service.num} id={service.slug} className="flex flex-col gap-[46px] w-full scroll-mt-[120px]">
            <div className="group flex flex-col md:flex-row gap-[20px] md:gap-[120px] items-start md:items-center w-full transition-transform duration-300 ease-out hover:translate-x-[8px]">
              <div className="content-stretch flex gap-[10px] shrink-0 whitespace-nowrap">
                <span className="font-['Manrope'] font-semibold text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                <span className="font-['Manrope'] font-normal text-[12px] text-white">{service.num}</span>
              </div>
              <div className="flex flex-1 flex-col gap-[20px] items-start w-full min-w-0">
                <p className="font-['Manrope'] font-light text-[24px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{service.title}</p>
                <div className="font-['Manrope'] font-light text-[16px] text-[rgba(255,255,255,0.7)]">
                  {service.body.map((line, li) => (
                    <p key={li}>{line}</p>
                  ))}
                </div>
                <div className="flex gap-[10px] items-center flex-wrap">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Manrope'] font-normal text-[12px] text-white underline decoration-[rgba(255,255,255,0.4)] underline-offset-4 transition-colors duration-200 hover:text-[color:var(--pricolor-orange,#ff5c22)] hover:decoration-[color:var(--pricolor-orange,#ff5c22)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {i < SERVICES.length - 1 && (
              <div className="h-px w-full">
                <img alt="" className="block w-full" src={imgLine1} />
              </div>
            )}
          </div>
        ))}
      </Reveal>

      {/* Our process */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[80px] md:gap-[140px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>Our process</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-[rgba(255,255,255,0.7)] leading-[1.25] max-w-[1055px] text-pretty">
            Our proven approach blends research, strategy, and design, guiding every step to build brands that resonate, engage, and deliver meaningful, measurable results.
          </p>
        </Reveal>

        <Reveal as="div" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-[60px] md:gap-[140px] md:pl-[64px]">
          {WHAT_WE_DO.map((group) => (
            <div key={group.title} className="flex flex-col gap-[20px] items-start">
              <p className="font-['Manrope'] font-normal text-[18px] text-white">{group.title}</p>
              {group.items.map((item, i) => (
                <div key={item} className="flex flex-col gap-[20px] items-start w-full">
                  <div className="group flex gap-[20px] items-center transition-transform duration-300 ease-out hover:translate-x-[6px]">
                    <span className="font-['Manrope'] font-semibold text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                    <span className="font-['Manrope'] font-normal text-[12px] text-white">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-['Manrope'] font-extralight text-[16px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{item}</span>
                  </div>
                  {i < group.items.length - 1 && <div className="h-px w-full"><img alt="" className="block w-full" src={imgLine1} /></div>}
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
