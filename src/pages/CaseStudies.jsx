import { useMemo, useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import { CASE_STUDIES } from "../data/caseStudies.js";
import img011 from "../assets/services/services-img011.png";

const TYPES = ["Show all", ...Array.from(new Set(CASE_STUDIES.map((s) => s.type)))];
const EXPERTISE = ["Show all", ...Array.from(new Set(CASE_STUDIES.flatMap((s) => s.pills)))];

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-[8px] items-start">
      <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border border-[rgba(255,255,255,0.3)] rounded-[8px] px-[14px] py-[10px] font-['Manrope'] text-[14px] text-white cursor-pointer transition-colors duration-300 hover:border-[color:var(--pricolor-orange,#ff5c22)] focus:outline-none focus:border-[color:var(--pricolor-orange,#ff5c22)] min-w-[180px]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#1c1c1c] text-white">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function CaseStudies() {
  const [type, setType] = useState("Show all");
  const [expertise, setExpertise] = useState("Show all");

  const filtered = useMemo(
    () =>
      CASE_STUDIES.filter((s) => {
        const typeOk = type === "Show all" || s.type === type;
        const expertiseOk = expertise === "Show all" || s.pills.includes(expertise);
        return typeOk && expertiseOk;
      }),
    [type, expertise]
  );

  return (
    <div className="bg-[#1c1c1c] relative w-full overflow-x-clip">
      <div className="absolute -translate-x-1/2 h-[700px] left-1/2 top-0 w-[1536px] max-w-none pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-2 size-full" src={img011} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,0)]" />
      </div>

      <Nav />

      {/* Hero + filters */}
      <Reveal
        as="section"
        stagger={0.12}
        y={20}
        className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pt-[160px] pb-[80px] flex flex-col md:flex-row md:items-end md:justify-between gap-[32px]"
      >
        <div className="flex flex-col gap-[8px] items-start max-w-[560px]">
          <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
            <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
            <span className="font-['Manrope'] font-extralight text-white">Case Studies</span>
          </div>
          <h1 className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-white leading-[1.25]">
            See how we&rsquo;ve helped brands and communities move from idea to impact.
          </h1>
        </div>
        <div className="flex gap-[16px] items-start flex-wrap">
          <FilterSelect label="Filter by type" value={type} onChange={setType} options={TYPES} />
          <FilterSelect label="Filter by expertise" value={expertise} onChange={setExpertise} options={EXPERTISE} />
        </div>
      </Reveal>

      {/* Grid */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[220px]">
        {filtered.length > 0 ? (
          <Reveal as="div" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[80px]">
            {filtered.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </Reveal>
        ) : (
          <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)] text-center py-[80px]">
            No case studies match those filters yet.
          </p>
        )}
      </section>

      <Footer />
    </div>
  );
}
