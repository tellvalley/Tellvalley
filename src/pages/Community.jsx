import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import Accordion from "../components/Accordion.jsx";
import { ChevronRight, ArrowUpRight, ClockIcon } from "../components/icons.jsx";
import img011 from "../assets/landing/landing-img011.png";

// Opens the Tally form as a popup via the widget script loaded in
// index.html (https://tally.so/widgets/embed.js), which watches for
// clicks on links whose href matches this #tally-open=... pattern.
const TALLY_JOIN_HREF =
  "#tally-open=QKZW2A&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2000&tally-form-events-forwarding=1";
const TALLY_MENTOR_HREF =
  "#tally-open=RGp4Pd&tally-overlay=1&tally-emoji-text=🧨&tally-emoji-animation=tada&tally-auto-close=2000&tally-form-events-forwarding=1";

const BENEFITS = [
  {
    title: "Mentorship & guidance",
    body: "Direct insights and feedback from seasoned tech leaders, designers, builders, and strategists across the agency.",
  },
  {
    title: "Exclusive Masterclasses",
    body: "Live interactive sessions on tech, creative execution, and public speaking hosted by Tellvalley Academy.",
  },
  {
    title: "Templates & Resources",
    body: "Plug-and-play UI kits, design systems, and story frameworks curated by community members.",
  },
  {
    title: "A Community That Speaks",
    body: "Collaborate on real-world projects, demo your builds, or take the mic at Tellvalley Tales.",
  },
];

const FAQ = [
  { q: "Is the community really free to join?", a: "Yes — joining the Tellvalley Collective is completely free, now and going forward." },
  {
    q: "Who is the Tellvalley Collective for?",
    a: "Creators, builders, and thinkers — from designers and developers to strategists and storytellers — who want to connect with peers and sharpen their craft.",
  },
  {
    q: "Do I need to be a designer or tech founder to join?",
    a: "Not at all. Members range from complete beginners to working professionals across design, tech, and media.",
  },
  {
    q: "How often do the live community sessions happen?",
    a: "Bi-monthly — live sessions, masterclasses, and community stage calls, hosted by Tellvalley Studios & Academy.",
  },
  {
    q: "Can I join as a mentor or speaker?",
    a: "Yes. If you'd like to lead a session or guide others, you can apply as a mentor.",
  },
  {
    q: "How it works",
    a: "Join the collective, get an invite to the community space, and jump into discussions, mentorship, resources, and events — at your own pace.",
  },
];

function Eyebrow({ children, tone = "light" }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className={`font-['Manrope'] font-extralight ${tone === "dark" ? "text-[#1c1c1c]" : "text-white"}`}>{children}</span>
    </div>
  );
}

function NumberedList({ items }) {
  return (
    <div className="flex flex-col gap-[46px] items-start w-full">
      {items.map((item, i) => (
        <div key={item.title} className="flex flex-col gap-[46px] items-start w-full">
          <div className="group flex flex-col md:flex-row gap-[20px] md:gap-[120px] items-start md:items-center w-full transition-transform duration-300 ease-out hover:translate-x-[8px]">
            <div className="content-stretch flex gap-[10px] shrink-0 whitespace-nowrap">
              <span className="font-['Manrope'] font-semibold text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
              <span className="font-['Manrope'] font-normal text-[12px] text-white">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-1 flex-col gap-[20px] items-start w-full min-w-0">
              <div className="flex items-start justify-between w-full">
                <p className="font-['Manrope'] font-light text-[24px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                  {item.title}
                </p>
                <ArrowUpRight className="size-[24px] shrink-0 text-[#e3e3e3] transition-transform duration-300 ease-out group-hover:rotate-45" />
              </div>
              <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)] max-w-[560px]">{item.body}</p>
            </div>
          </div>
          {i < items.length - 1 && <div className="h-px w-full bg-[rgba(255,255,255,0.15)]" />}
        </div>
      ))}
    </div>
  );
}

export default function Community() {
  return (
    <div className="bg-[#1c1c1c] relative w-full overflow-x-clip">
      <div className="absolute inset-x-0 top-0 h-[700px] pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-2 size-full" src={img011} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,1)]" />
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
          <span className="font-['Manrope'] font-extralight text-white">The Tellvalley Collective</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[32px] md:text-[40px] text-white leading-[1.2] max-w-[760px] text-balance">
          Learn, build, and grow — together.
        </h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-white max-w-[600px] text-balance">
          {`A space for creators, builders, and thinkers to connect, connect with peers, master your craft, and access insights from Tellvalley Studios & Academy.`}
        </p>
        <div className="pt-[14px]">
          <a
            href={TALLY_JOIN_HREF}
            className="inline-flex items-center justify-center bg-white rounded-[100px] px-[26px] py-[10px] text-[12px] text-center whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_10px_30px_rgba(255,92,34,0.35)] active:scale-[0.97]"
          >
            <span className="font-['Manrope'] font-normal text-[#1c1c1c]">Enter the Valley</span>
          </a>
        </div>
      </Reveal>

      {/* What you get */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[46px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>What you get</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-white leading-[1.25] max-w-[1055px] text-pretty">
            Everything you need to learn faster and build with confidence.
          </p>
        </Reveal>
        <Reveal as="div" stagger={0.1}>
          <NumberedList items={BENEFITS} />
        </Reveal>
      </section>

      {/* Become a Valley Teller */}
      <section id="join" className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <Reveal
          as="div"
          className="rounded-[20px] bg-[#f1e8dd] flex flex-col items-center gap-[52px] px-6 md:px-[40px] py-[44px] md:py-[52px] text-center"
        >
          <div className="flex flex-col items-center gap-[27px] w-full">
            <Eyebrow tone="dark">Become a Valley Teller</Eyebrow>
            <p className="font-['Manrope'] font-bold text-[40px] md:text-[80px] text-[#1c1c1c] leading-[1.05] max-w-[1104px] text-balance">
              Access curated tools, talks, and room to grow.
            </p>
            <p className="font-['Manrope'] font-medium text-[18px] md:text-[22px] text-[#1c1c1c]">
              Bi-monthly live sessions, masterclasses, and community stage calls.
            </p>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <div className="flex gap-[10px] items-center">
              <ClockIcon className="size-[16px] text-[#ff4d00]" />
              <p className="font-['Manrope'] font-medium text-[16px] text-[#ff4d00]">Applications currently open</p>
            </div>
            <p className="font-['Manrope'] font-semibold text-[28px]">
              <span className="text-[#ff4d00]">100%</span>
              <span className="text-[#1c1c1c]"> Free Access</span>
            </p>
            <a
              href={TALLY_JOIN_HREF}
              className="group inline-flex items-center gap-[10px] bg-[#1c1c1c] rounded-[10px] px-[40px] md:px-[111px] py-[20px] md:py-[32px] cursor-pointer transition-all duration-300 ease-out hover:bg-[color:var(--pricolor-orange,#ff5c22)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="font-['Manrope'] font-semibold text-[18px] md:text-[20px] text-white">Join the Valley</span>
              <ChevronRight className="size-[16px] text-[color:var(--pricolor-orange,#ff5c22)] transition-all duration-300 ease-out group-hover:translate-x-[4px] group-hover:text-white" />
            </a>
            <p className="font-['Manrope'] font-medium text-[16px] md:text-[20px] pt-[24px] text-balance">
              <span className="text-[#1c1c1c]">Want to lead a session or guide others? </span>
              <a href={TALLY_MENTOR_HREF} className="text-[#ff4d00] hover:underline">
                Apply as a Mentor →
              </a>
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col md:flex-row gap-[24px] md:gap-[120px]">
        <Reveal as="div" className="shrink-0 md:w-[360px] flex flex-col gap-[16px]">
          <Eyebrow>FAQ</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-[rgba(255,255,255,0.7)] leading-[1.25] text-pretty">
            Questions, answered.
          </p>
        </Reveal>
        <Reveal as="div" className="flex-1 min-w-0">
          <Accordion items={FAQ} />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
