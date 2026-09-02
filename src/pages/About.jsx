import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import img011 from "../assets/about/about-img011.png";
import imgRectangle6 from "../assets/about/about-imgRectangle6.png";
import imgRectangle7 from "../assets/about/about-imgRectangle7.png";
import imgRectangle10 from "../assets/about/about-imgRectangle10.png";
import imgRectangle11 from "../assets/about/about-imgRectangle11.png";
import imgRectangle12 from "../assets/about/about-imgRectangle12.png";
import imgRectangle2 from "../assets/about/about-imgRectangle2.png";
import imgRectangle3 from "../assets/about/about-imgRectangle3.png";
import imgRectangle4 from "../assets/about/about-imgRectangle4.png";
import imgRectangle5 from "../assets/about/about-imgRectangle5.png";
import imgRectangle8 from "../assets/about/about-imgRectangle8.png";
import imgRectangle9 from "../assets/about/about-imgRectangle9.png";
import imgSonvisageLogo11 from "../assets/about/about-imgSonvisageLogo11.svg";
import imgGroup from "../assets/about/about-imgGroup.svg";
import imgGroup1 from "../assets/about/about-imgGroup1.svg";
import imgVector from "../assets/about/about-imgVector.svg";
import imgVector1 from "../assets/about/about-imgVector1.svg";
import imgVector2 from "../assets/about/about-imgVector2.svg";
import imgVector3 from "../assets/about/about-imgVector3.svg";
import imgVector4 from "../assets/about/about-imgVector4.svg";
import imgVector5 from "../assets/about/about-imgVector5.svg";
import imgVector6 from "../assets/about/about-imgVector6.svg";
import imgVector7 from "../assets/about/about-imgVector7.svg";
import imgVector8 from "../assets/about/about-imgVector8.svg";
import imgVector9 from "../assets/about/about-imgVector9.svg";
import imgVector10 from "../assets/about/about-imgVector10.svg";
import imgVector11 from "../assets/about/about-imgVector11.svg";
import imgVector12 from "../assets/about/about-imgVector12.svg";
import imgVector13 from "../assets/about/about-imgVector13.svg";
import imgVector14 from "../assets/about/about-imgVector14.svg";
import imgVector15 from "../assets/about/about-imgVector15.svg";
import imgVector16 from "../assets/about/about-imgVector16.svg";
import imgVector17 from "../assets/about/about-imgVector17.svg";
import imgVector18 from "../assets/about/about-imgVector18.svg";
import imgVector19 from "../assets/about/about-imgVector19.svg";
import imgVector20 from "../assets/about/about-imgVector20.svg";
import imgVector21 from "../assets/about/about-imgVector21.svg";
import imgVector22 from "../assets/about/about-imgVector22.svg";
import imgVector23 from "../assets/about/about-imgVector23.svg";
import imgVector24 from "../assets/about/about-imgVector24.svg";
import imgVector25 from "../assets/about/about-imgVector25.svg";
import imgVector26 from "../assets/about/about-imgVector26.svg";
import imgVector27 from "../assets/about/about-imgVector27.svg";
import imgVector28 from "../assets/about/about-imgVector28.svg";
import imgVector29 from "../assets/about/about-imgVector29.svg";
import imgVector30 from "../assets/about/about-imgVector30.svg";
import imgVector31 from "../assets/about/about-imgVector31.svg";
import imgVector32 from "../assets/about/about-imgVector32.svg";
import imgVector33 from "../assets/about/about-imgVector33.svg";
import imgVector34 from "../assets/about/about-imgVector34.svg";
import imgVector35 from "../assets/about/about-imgVector35.svg";
import imgLine1 from "../assets/about/about-imgLine1.svg";

const THREE_SIXTY_VECTORS = [
  [imgVector, "8.97% 8.9% 38.66% 60.03%"], [imgVector1, "9.63% 41.56% 38.71% 28.29%"],
  [imgVector2, "32.32% 48.94% 47.35% 35.6%"], [imgVector3, "8.98% 72.93% 38.81% 0.52%"],
  [imgVector4, "64.16% 0.96% 15.82% 89.01%"], [imgVector5, "71.36% 72.95% 15.6% 16.49%"],
  [imgVector6, "71.33% 61.76% 15.63% 27.78%"], [imgVector7, "71.33% 50.54% 15.66% 39.07%"],
  [imgVector8, "0.83% 5.01% 86.08% 84.26%"], [imgVector9, "64.12% 23.51% 15.84% 64.67%"],
  [imgVector10, "63.9% 11.73% 15.74% 77.17%"], [imgVector11, "66.43% 41.43% 15.71% 50.5%"],
  [imgVector12, "66.78% 84.59% 15.91% 1.15%"], [imgVector13, "90.84% 70.69% 1.6% 26.42%"],
  [imgVector14, "93.15% 86.21% 1.45% 10.73%"], [imgVector15, "93.18% 51.9% 1.46% 45.03%"],
  [imgVector16, "93.19% 37.49% 1.41% 59.44%"], [imgVector17, "64.12% 22.38% 21.84% 76.03%"],
  [imgVector18, "90.94% 90.13% 1.75% 6.06%"], [imgVector19, "93.17% 77.96% 1.37% 19.04%"],
  [imgVector20, "93.15% 81.96% 1.39% 14.93%"], [imgVector21, "93.18% 47.67% 1.34% 49.31%"],
  [imgVector22, "66.78% 98.15% 16.45% 0.86%"], [imgVector23, "90.72% 40.96% 1.9% 56.35%"],
  [imgVector24, "66.37% 84.33% 24.82% 14.36%"], [imgVector25, "90.69% 21.59% 1.8% 76.76%"],
  [imgVector26, "90.65% 64.95% 1.77% 33.36%"], [imgVector27, "91.97% 59.08% 1.81% 39.06%"],
  [imgVector28, "90.68% 24.18% 2% 74.14%"], [imgVector29, "93.19% 34.24% 2% 63.92%"],
  [imgVector30, "78.27% 84.32% 15.85% 14.65%"], [imgVector31, "93.04% 75.13% 1.91% 23.47%"],
  [imgVector32, "93.09% 67.89% 1.76% 30.72%"], [imgVector33, "93.1% 62.52% 2.02% 36.2%"],
  [imgVector34, "93.06% 56.29% 1.98% 42.42%"], [imgVector35, "94.88% 79.13% 2.73% 19.08%"],
];

const TEAM = [
  { name: "Dan Daniel Madaki", role: "Co-founder &  Creative Director", codename: "ProdigyDan", img: imgRectangle6 },
  { name: "Sanni Emmanuel", role: "CTO & Senior Software Engineer", codename: "Flowkeyz", img: imgRectangle7 },
  { name: "Kate Jim", role: "UI & UX Designer", codename: "Pro's Mentor", img: imgRectangle10 },
  { name: "Nathaniel Tibitus", role: "UX Designer & Filmmaker", codename: "Outeplays", img: imgRectangle11 },
  { name: "Nasiru Kwargana", role: "Software Engineer", codename: "Nas", img: imgRectangle12 },
];

const STATS = [
  { to: 126, suffix: "+", label: "Kids trained & mentored", sub: "Through strategic partnerships with tech Hubs" },
  { to: 10, suffix: "+", label: "Products launched", sub: "From Health to Journalism" },
  { to: 3, suffix: "+", label: "Partners", sub: "Strategic & Global Reach" },
];

const WHAT_WE_DO = [
  { title: "Agency", items: ["Product Design", "Website Design & Development", "Consultancy", "Media Production", "Documentary Production"] },
  { title: "Academy", items: ["Mentorship", "Bootcamps", "Trainings", "Workshops", "Hackathons"] },
  { title: "Community", items: ["Hub", "Networking", "Collaboration", "Opportunities", "Events"] },
];

const GALLERY = [imgRectangle8, imgRectangle9, imgRectangle5, imgRectangle2, imgRectangle3, imgRectangle4];

function Eyebrow({ children }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className="font-['Manrope'] font-extralight text-white">{children}</span>
    </div>
  );
}

export default function About() {
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
        className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pt-[160px] pb-[80px] flex flex-col items-center text-center gap-[8px]"
      >
        <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">About Us</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[32px] text-white leading-[44.8px]">
          A specialist design agency
          <br />
          and tech academy
        </h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-white max-w-[600px]">
          {`We are an efficient team of creatives - closing the Knowledge Gap in Tech & Design.`}
          <br />
          We breathe from the stories we share and hope those stories create magic at the seams.
        </p>
      </Reveal>

      {/* Team */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <Reveal as="div" stagger={0.1} className="flex flex-wrap gap-[29px] items-start justify-center">
          {TEAM.map((member) => (
            <div key={member.name} className="group flex flex-col gap-[13px] items-start w-[280px] md:w-[430px]">
              <div className="h-[280px] md:h-[442px] relative rounded-[20px] shrink-0 w-full overflow-hidden bg-[#d9d9d9] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  alt={member.name}
                  className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  src={member.img}
                />
              </div>
              <div className="flex flex-col items-start">
                <p className="font-['Manrope'] font-normal text-[16px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{member.name}</p>
                <p className="font-['Manrope'] font-normal text-[12px] text-[rgba(255,255,255,0.7)]">{member.role}</p>
                <p className="font-['Manrope'] font-normal text-[10px] text-[rgba(255,255,255,0.7)]">
                  {"/ "}
                  <span className="text-[#ff5c22]">Codename:</span>
                  {` ${member.codename}`}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Founded / stats / partners */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[80px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>Founded in 2023 —</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[32px] text-white leading-[1.4] max-w-[1055px]">
            We work with startups, pioneers and disrupters in the space who are ready to drive growth and onboard users onchain with our strategic design expertise.
          </p>
        </Reveal>

        <Reveal as="div" stagger={0.15} className="flex flex-wrap items-center justify-center gap-[60px] md:gap-[0px] md:justify-between md:px-[100px]">
          {STATS.map((stat) => (
            <div key={stat.label} className="group flex flex-col gap-[10px] items-center text-center">
              <Counter
                to={stat.to}
                suffix={stat.suffix}
                className="font-['Manrope'] font-light text-[64px] text-white leading-[44.8px] transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]"
              />
              <div className="h-px w-[120px]"><img alt="" className="block w-full" src={imgLine1} /></div>
              <p className="font-['Manrope'] font-extralight text-[16px] text-white">{stat.label}</p>
              <p className="font-['Manrope'] font-extralight text-[10px] text-white">{stat.sub}</p>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[32px]">
          <Eyebrow>Our strategic partners and clients</Eyebrow>
          <div className="flex flex-wrap gap-[48px] md:gap-[78px] items-center">
            <div className="block h-[42px] w-[203px] relative grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]">
              <img alt="Sonvisage" className="absolute inset-0 max-w-none size-full object-contain" src={imgSonvisageLogo11} />
            </div>
            <div className="block h-[60px] w-[122px] relative overflow-hidden grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]" style={{ maskImage: `url("${imgGroup}")` }}>
                <img alt="CareBridge" className="absolute inset-0 max-w-none size-full object-contain" src={imgGroup1} />
              </div>
            </div>
            <div className="block h-[42px] w-[55px] relative grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.06]">
              {THREE_SIXTY_VECTORS.map(([src, inset], i) => (
                <div key={i} className="absolute" style={{ inset }}>
                  <img alt="" className="absolute inset-0 max-w-none size-full" src={src} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[80px] md:gap-[140px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>What we do</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-[rgba(255,255,255,0.7)] leading-[1.25] max-w-[1055px]">
            {`As an agency & academy consultancy, we immerse ourselves in our projects, understand clients goals, and define exactly what needs to be delivered. We scope the work, lead the process, and deliver the services below — and where specialist expertise is needed, we help bring in the right partners to make sure nothing slows you down.`}
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
                    <span className="font-['Manrope'] font-regular text-[12px] text-white">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-['Manrope'] font-extralight text-[16px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{item}</span>
                  </div>
                  {i < group.items.length - 1 && <div className="h-px w-full"><img alt="" className="block w-full" src={imgLine1} /></div>}
                </div>
              ))}
            </div>
          ))}
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] mb-[40px]">
          <Eyebrow>Our strategic partners and clients</Eyebrow>
        </div>
        <Reveal as="div" stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-[10px] rounded-[20px] overflow-hidden">
          {GALLERY.map((src, i) => (
            <div key={i} className="group h-[220px] md:h-[280px] relative rounded-[20px] overflow-hidden">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 ease-out group-hover:scale-[1.1]"
                src={src}
              />
            </div>
          ))}
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
