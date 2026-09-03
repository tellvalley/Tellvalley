import { Link, Navigate, useParams } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import { ChevronRight } from "../components/icons.jsx";
import { CASE_STUDIES, getCaseStudy } from "../data/caseStudies.js";
import img011 from "../assets/services/services-img011.png";

function Eyebrow({ children }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className="font-['Manrope'] font-extralight text-white">{children}</span>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  const more = CASE_STUDIES.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <div className="bg-[#1c1c1c] relative w-full overflow-x-clip">
      <div className="absolute -translate-x-1/2 h-[700px] left-1/2 top-0 w-[1536px] max-w-none pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-2 size-full" src={img011} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,0)]" />
      </div>

      <Nav />

      {/* Header */}
      <Reveal as="section" stagger={0.1} y={20} className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pt-[160px] pb-[60px] flex flex-col gap-[16px]">
        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-[8px] font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)] w-fit transition-colors duration-300 hover:text-white"
        >
          <ChevronRight className="size-[10px] rotate-180 transition-transform duration-300 group-hover:-translate-x-[3px]" />
          Back to case studies
        </Link>
        <Eyebrow>{study.tag}</Eyebrow>
        <h1 className="font-['Manrope'] font-normal text-[28px] md:text-[40px] text-white leading-[1.2] max-w-[900px] text-balance">{study.title}</h1>
        <div className="flex gap-[10px] items-center flex-wrap w-full pt-[8px]">
          {study.pills.map((pill) => (
            <div key={pill} className="border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid flex items-center justify-center px-[10px] py-[5px] rounded-[100px] shrink-0">
              <p className="font-['Manrope'] font-extralight text-[11px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">{pill}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Cover */}
      <Reveal as="section" className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[100px]">
        <div className="h-[320px] md:h-[560px] relative rounded-[20px] overflow-hidden bg-[#d9d9d9]">
          <img alt={study.tag} className="absolute inset-0 max-w-none object-cover size-full" src={study.cover} />
        </div>
      </Reveal>

      {/* Brief + results */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[120px] flex flex-col gap-[80px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px]">
          <Eyebrow>The Brief</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[22px] md:text-[28px] text-[rgba(255,255,255,0.7)] leading-[1.4] max-w-[900px] text-pretty">{study.brief}</p>
        </Reveal>
        <Reveal as="div" className="flex flex-col md:flex-row md:items-start md:justify-between gap-[24px]">
          <Eyebrow>The Results</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[22px] md:text-[28px] text-white leading-[1.4] max-w-[900px] text-pretty">{study.results}</p>
        </Reveal>
      </section>

      {/* Gallery */}
      {study.gallery.length > 0 && (
        <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
          <Reveal as="div" stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {study.gallery.map((src, i) => (
              <div key={i} className="group h-[240px] md:h-[320px] relative rounded-[20px] overflow-hidden">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  src={src}
                />
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* More case studies */}
      {more.length > 0 && (
        <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[46px]">
          <Reveal as="div">
            <Eyebrow>More case studies</Eyebrow>
          </Reveal>
          <Reveal as="div" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[80px]">
            {more.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </Reveal>
        </section>
      )}

      <Footer />
    </div>
  );
}
