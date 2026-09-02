import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import Marquee from "../components/Marquee.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import { CASE_STUDIES } from "../data/caseStudies.js";
import img011 from "../assets/landing/landing-img011.png";
import imgGroup from "../assets/landing/landing-imgGroup.svg";
import imgGroup1 from "../assets/landing/landing-imgGroup1.svg";
import imgVector from "../assets/landing/landing-imgVector.svg";
import imgVector1 from "../assets/landing/landing-imgVector1.svg";
import imgVector2 from "../assets/landing/landing-imgVector2.svg";
import imgVector3 from "../assets/landing/landing-imgVector3.svg";
import imgVector4 from "../assets/landing/landing-imgVector4.svg";
import imgVector5 from "../assets/landing/landing-imgVector5.svg";
import imgVector6 from "../assets/landing/landing-imgVector6.svg";
import imgVector7 from "../assets/landing/landing-imgVector7.svg";
import imgVector8 from "../assets/landing/landing-imgVector8.svg";
import imgVector9 from "../assets/landing/landing-imgVector9.svg";
import imgVector10 from "../assets/landing/landing-imgVector10.svg";
import imgVector11 from "../assets/landing/landing-imgVector11.svg";
import imgVector12 from "../assets/landing/landing-imgVector12.svg";
import imgVector13 from "../assets/landing/landing-imgVector13.svg";
import imgVector14 from "../assets/landing/landing-imgVector14.svg";
import imgVector15 from "../assets/landing/landing-imgVector15.svg";
import imgVector16 from "../assets/landing/landing-imgVector16.svg";
import imgVector17 from "../assets/landing/landing-imgVector17.svg";
import imgVector18 from "../assets/landing/landing-imgVector18.svg";
import imgVector19 from "../assets/landing/landing-imgVector19.svg";
import imgVector20 from "../assets/landing/landing-imgVector20.svg";
import imgVector21 from "../assets/landing/landing-imgVector21.svg";
import imgVector22 from "../assets/landing/landing-imgVector22.svg";
import imgVector23 from "../assets/landing/landing-imgVector23.svg";
import imgVector24 from "../assets/landing/landing-imgVector24.svg";
import imgVector25 from "../assets/landing/landing-imgVector25.svg";
import imgVector26 from "../assets/landing/landing-imgVector26.svg";
import imgVector27 from "../assets/landing/landing-imgVector27.svg";
import imgVector28 from "../assets/landing/landing-imgVector28.svg";
import imgVector29 from "../assets/landing/landing-imgVector29.svg";
import imgVector30 from "../assets/landing/landing-imgVector30.svg";
import imgVector31 from "../assets/landing/landing-imgVector31.svg";
import imgVector32 from "../assets/landing/landing-imgVector32.svg";
import imgVector33 from "../assets/landing/landing-imgVector33.svg";
import imgVector34 from "../assets/landing/landing-imgVector34.svg";
import imgVector35 from "../assets/landing/landing-imgVector35.svg";
import imgSonvisageLogo12 from "../assets/landing/landing-imgSonvisageLogo12.svg";
import imgFrame from "../assets/landing/landing-imgFrame.svg";
import imgLine1 from "../assets/landing/landing-imgLine1.svg";

const THREE_SIXTY_VECTORS = [
  [imgVector, "8.97% 8.9% 38.66% 60.03%"],
  [imgVector1, "9.63% 41.56% 38.71% 28.29%"],
  [imgVector2, "32.32% 48.94% 47.35% 35.6%"],
  [imgVector3, "8.98% 72.93% 38.81% 0.52%"],
  [imgVector4, "64.16% 0.96% 15.82% 89.01%"],
  [imgVector5, "71.36% 72.95% 15.6% 16.49%"],
  [imgVector6, "71.33% 61.76% 15.63% 27.78%"],
  [imgVector7, "71.33% 50.54% 15.66% 39.07%"],
  [imgVector8, "0.83% 5.01% 86.08% 84.26%"],
  [imgVector9, "64.12% 23.51% 15.84% 64.67%"],
  [imgVector10, "63.9% 11.73% 15.74% 77.17%"],
  [imgVector11, "66.43% 41.43% 15.71% 50.5%"],
  [imgVector12, "66.78% 84.59% 15.91% 1.15%"],
  [imgVector13, "90.84% 70.69% 1.6% 26.42%"],
  [imgVector14, "93.15% 86.21% 1.45% 10.73%"],
  [imgVector15, "93.18% 51.9% 1.46% 45.03%"],
  [imgVector16, "93.19% 37.49% 1.41% 59.44%"],
  [imgVector17, "64.12% 22.38% 21.84% 76.03%"],
  [imgVector18, "90.94% 90.13% 1.75% 6.06%"],
  [imgVector19, "93.17% 77.96% 1.37% 19.04%"],
  [imgVector20, "93.15% 81.96% 1.39% 14.93%"],
  [imgVector21, "93.18% 47.67% 1.34% 49.31%"],
  [imgVector22, "66.78% 98.15% 16.45% 0.86%"],
  [imgVector23, "90.72% 40.96% 1.9% 56.35%"],
  [imgVector24, "66.37% 84.33% 24.82% 14.36%"],
  [imgVector25, "90.69% 21.59% 1.8% 76.76%"],
  [imgVector26, "90.65% 64.95% 1.77% 33.36%"],
  [imgVector27, "91.97% 59.08% 1.81% 39.06%"],
  [imgVector28, "90.68% 24.18% 2% 74.14%"],
  [imgVector29, "93.19% 34.24% 2% 63.92%"],
  [imgVector30, "78.27% 84.32% 15.85% 14.65%"],
  [imgVector31, "93.04% 75.13% 1.91% 23.47%"],
  [imgVector32, "93.09% 67.89% 1.76% 30.72%"],
  [imgVector33, "93.1% 62.52% 2.02% 36.2%"],
  [imgVector34, "93.06% 56.29% 1.98% 42.42%"],
  [imgVector35, "94.88% 79.13% 2.73% 19.08%"],
];

const EXPERIENCE = [
  { num: "01", title: "Product Design", body: ["We design user-centric web3 products that balance strategy, usability, and visual craft.", "Helping teams turn complex ideas into intuitive experiences users trust and adopt."] },
  { num: "02", title: "Website Design & Development", body: ["We design high-impact web3 websites that blend strategy, storytelling, and cutting-edge design.", "Built to engage communities, impress investors, and clearly communicate complex blockchain products."] },
  { num: "03", title: "Tech Education", body: ["We train and build a community of learners that can compete in the global talent space and thrive."] },
  { num: "04", title: "Media Production", body: ["We help brands turn early ideas into clear, and compelling visuals. "] },
  { num: "05", title: "Consultancy", body: ["We help brands turn early ideas into clear, actionable plans — combining strategic insight, technical expertise,", "and real-world experience to define MVPs that are ready to build."] },
];

function Eyebrow({ children }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className="font-['Manrope'] font-extralight text-white">{children}</span>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-[#1c1c1c] relative w-full overflow-x-clip">
      <div className="absolute -translate-x-1/2 h-[700px] left-1/2 top-0 w-[1536px] max-w-none pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-2 size-full" src={img011} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,0)]" />
      </div>

      <Nav />

      {/* Hero */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pt-[160px] pb-[120px]">
        <Reveal as="div" stagger={0.12} y={24} className="flex flex-col gap-[8px] items-start max-w-[812px]">
          <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
            <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
            <span className="font-['Manrope'] font-extralight text-white">Listen</span>
            <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
            <span className="font-['Manrope'] font-extralight text-white">Learn</span>
            <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
            <span className="font-['Manrope'] font-extralight text-white">Lead</span>
          </div>
          <h1 className="font-['Manrope'] font-normal text-[32px] text-white leading-[44.8px]">
            A specialist design agency
            <br />
            and tech academy
          </h1>
          <p className="font-['Manrope'] font-normal text-[20px] text-white leading-[28px]">
            {`We are an efficient team of creatives - closing the Knowledge Gap in Tech & Design.`}
            <br />
            We breathe from the stories we share and hope those stories create magic at the seams.
          </p>
        </Reveal>
      </section>

      {/* Case study cards */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <Reveal as="div" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[80px]">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </Reveal>
      </section>

      {/* Experience / partners / services */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[120px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>Our Experience</Eyebrow>
          <div className="font-['Manrope'] font-normal text-[28px] md:text-[36px] leading-[1.25] max-w-[1055px]">
            <p className="text-[rgba(255,255,255,0.7)]">{`Our solutions & products are driven by real world problems.`}</p>
            <p className="text-white">Clear, focused, and senior-led, helping teams move from idea to adoption without friction.</p>
          </div>
        </Reveal>

        <Reveal as="div" className="flex flex-col md:flex-row md:items-center gap-[24px] md:gap-[32px]">
          <Eyebrow>Our strategic partners and clients</Eyebrow>
          <Marquee gap={78} speed={40} className="flex-1 min-w-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <a
              className="block h-[42px] w-[203px] relative grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]"
              href="https://sonvisage.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Sonvisage" className="absolute inset-0 max-w-none size-full object-contain" src={imgSonvisageLogo12} />
            </a>
            <a
              className="block h-[60px] w-[122px] relative overflow-hidden grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]"
              href="https://carebridge.ng/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]"
                style={{ maskImage: `url("${imgGroup}")` }}
              >
                <img alt="CareBridge" className="absolute inset-0 max-w-none size-full object-contain" src={imgGroup1} />
              </div>
            </a>
            <a
              className="block h-[42px] w-[55px] relative grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]"
              href="https://www.360maaas.com/"
              target="_blank"
              rel="noreferrer"
            >
              {THREE_SIXTY_VECTORS.map(([src, inset], i) => (
                <div key={i} className="absolute" style={{ inset }}>
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={src} />
                </div>
              ))}
            </a>
          </Marquee>
        </Reveal>

        <div className="flex flex-col gap-[46px] items-start">
          <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] w-full">
            <Eyebrow>How can we help you</Eyebrow>
            <div className="font-['Manrope'] font-normal text-[28px] md:text-[36px] leading-[1.25] max-w-[1055px]">
              <p className="text-[rgba(255,255,255,0.7)]">{`We don't just close the knowledge gap or offer services...`}</p>
              <p className="text-white">We drive measurable impact results.</p>
            </div>
          </Reveal>

          <Reveal as="div" stagger={0.1} className="flex flex-col gap-[46px] items-start w-full">
            {EXPERIENCE.map((item, i) => (
              <div key={item.num} className="flex flex-col gap-[46px] items-start w-full">
                <div className="group flex flex-col md:flex-row gap-[20px] md:gap-[120px] items-start md:items-center w-full transition-transform duration-300 ease-out hover:translate-x-[8px]">
                  <div className="content-stretch flex gap-[10px] shrink-0 whitespace-nowrap">
                    <span className="font-['Manrope'] font-semibold text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                    <span className="font-['Manrope'] font-normal text-[12px] text-white">{item.num}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-[20px] items-start w-full min-w-0">
                    <div className="flex items-start justify-between w-full">
                      <p className="font-['Manrope'] font-light text-[24px] text-white whitespace-nowrap transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{item.title}</p>
                      <img alt="" className="size-[24px] shrink-0 transition-transform duration-300 ease-out group-hover:rotate-45" src={imgFrame} />
                    </div>
                    <div className="font-['Manrope'] font-light text-[16px] text-[rgba(255,255,255,0.7)]">
                      {item.body.map((line, li) => (
                        <p key={li}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
                {i < EXPERIENCE.length - 1 && (
                  <div className="h-px w-full">
                    <img alt="" className="block w-full" src={imgLine1} />
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
