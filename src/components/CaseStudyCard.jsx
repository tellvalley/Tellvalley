import { Link } from "react-router-dom";

export default function CaseStudyCard({ study }) {
  return (
    <Link to={`/case-studies/${study.slug}`} className="group flex flex-col gap-[24px] items-start w-full">
      <div className="h-[280px] md:h-[356px] relative rounded-[20px] shrink-0 w-full overflow-hidden bg-[#d9d9d9] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <img
          alt={study.tag}
          className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full transition-transform duration-500 ease-out group-hover:scale-[1.08]"
          src={study.cover}
        />
      </div>
      <div className="flex flex-col gap-[12px] items-start w-full">
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">{study.tag}</span>
        </div>
        <p className="font-['Manrope'] font-normal text-[24px] text-white leading-[29px] transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
          {study.title}
        </p>
        <div className="flex gap-[10px] items-center flex-wrap w-full">
          {study.pills.map((pill) => (
            <div key={pill} className="border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid flex items-center justify-center px-[8px] py-[4px] rounded-[100px] shrink-0">
              <p className="font-['Manrope'] font-extralight text-[10px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">{pill}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
