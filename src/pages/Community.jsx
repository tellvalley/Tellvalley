import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import CtaButton from "../components/CtaButton.jsx";
import Accordion from "../components/Accordion.jsx";
import img011 from "../assets/landing/landing-img011.png";

// Paste your Tally form's embed URL here once it's created (Settings ->
// Embed -> Copy embed code -> use the src of the iframe), e.g.
// "https://tally.so/embed/xxxxxx". Configure the redirect-on-submit to
// your WhatsApp community invite link inside Tally itself. Leave empty
// to show a "coming soon" placeholder instead of a broken embed.
const TALLY_FORM_URL = "";

const BENEFITS = [
  {
    title: "Mentorship & guidance",
    body: "Get paired with experienced designers and developers who review your work, answer questions, and help you grow faster.",
  },
  {
    title: "Hands-on projects",
    body: "Work on real design & dev challenges and portfolio-ready case studies, with feedback from people who've shipped.",
  },
  {
    title: "Workshops & resources",
    body: "Free access to Tellvalley Academy sessions, templates, and training material as they go live.",
  },
  {
    title: "A community that shows up",
    body: "Ask questions, share wins, find opportunities, and meet people who are on the same journey as you.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Just starting out",
    body: "New to tech or design and want structured guidance and a support system that keeps you accountable.",
  },
  {
    title: "Switching into tech or design",
    body: "Making the leap into a new field and need mentorship and community to make it actually stick.",
  },
  {
    title: "Leveling up your craft",
    body: "Already building, looking to sharpen your skills, get honest feedback, and stay sharp with peers.",
  },
];

const HOW_IT_WORKS = [
  {
    q: "Join the community",
    a: "Fill out the quick form below — your name, email, and what you want to learn.",
  },
  {
    q: "Get connected",
    a: "You'll get an invite to the Tellvalley community space, where mentors and other members hang out.",
  },
  {
    q: "Start learning",
    a: "Jump into discussions, mentorship, resources, and events — at your own pace, whenever it works for you.",
  },
];

const FAQ = [
  { q: "Is there a cost to join?", a: "No, joining the Tellvalley Community is completely free." },
  {
    q: "Do I need design or development experience?",
    a: "Not at all. Members range from complete beginners to working professionals looking to sharpen their craft.",
  },
  { q: "Do I need to be based in a specific location?", a: "No, the community is open to anyone, anywhere." },
  {
    q: "How much time do I need to commit?",
    a: "None required — participate at your own pace, whenever it works for you.",
  },
  {
    q: "Can I become a mentor later?",
    a: "Yes. As you grow, you can apply to mentor others coming up behind you.",
  },
];

function Eyebrow({ children }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 text-[16px] whitespace-nowrap">
      <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
      <span className="font-['Manrope'] font-extralight text-white">{children}</span>
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
            <div className="flex flex-1 flex-col gap-[12px] items-start w-full min-w-0">
              <p className="font-['Manrope'] font-light text-[24px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                {item.title}
              </p>
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
          <span className="font-['Manrope'] font-extralight text-white">Community</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[32px] md:text-[40px] text-white leading-[1.2] max-w-[760px] text-balance">
          Learn, build, and grow — together.
        </h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-white max-w-[600px] text-balance">
          {`Join a free community of designers, developers, and creatives inside the Tellvalley Academy. Get mentorship, build real projects, and grow alongside people on the same path.`}
        </p>
        <div className="pt-[14px]">
          <CtaButton href="#join">Join the Community</CtaButton>
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

      {/* Who it's for */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col gap-[46px]">
        <Reveal as="div" className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px]">
          <Eyebrow>Who it's for</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-[rgba(255,255,255,0.7)] leading-[1.25] max-w-[1055px] text-pretty">
            However far along you are, there's a place for you here.
          </p>
        </Reveal>
        <Reveal as="div" stagger={0.1}>
          <NumberedList items={WHO_ITS_FOR} />
        </Reveal>
      </section>

      {/* How it works */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px] flex flex-col md:flex-row gap-[24px] md:gap-[120px]">
        <Reveal as="div" className="shrink-0 md:w-[360px] flex flex-col gap-[16px]">
          <Eyebrow>How it works</Eyebrow>
          <p className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-white leading-[1.25] text-pretty">
            Getting in takes less than a minute.
          </p>
        </Reveal>
        <Reveal as="div" className="flex-1 min-w-0">
          <Accordion items={HOW_IT_WORKS} defaultOpen={0} />
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

      {/* Join banner */}
      <section id="join" className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <Reveal as="div" className="flex flex-col items-center text-center gap-[16px] mb-[48px]">
          <Eyebrow>Join us</Eyebrow>
          <h2 className="font-['Manrope'] font-normal text-[32px] md:text-[40px] text-white leading-[1.2] max-w-[700px] text-balance">
            Ready to join the Tellvalley Community?
          </h2>
          <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)] max-w-[500px]">
            Tell us a bit about yourself and we'll send your invite to the community.
          </p>
        </Reveal>

        <Reveal as="div" className="rounded-[20px] border border-white/10 bg-[#141414] overflow-hidden max-w-[720px] mx-auto">
          {TALLY_FORM_URL ? (
            <iframe title="Join the Tellvalley Community" src={TALLY_FORM_URL} className="w-full min-h-[500px]" />
          ) : (
            <div className="flex flex-col items-center gap-[12px] text-center p-[48px]">
              <p className="font-['Manrope'] font-normal text-[16px] text-white">Sign-up form coming soon</p>
              <p className="font-['Manrope'] font-extralight text-[14px] text-[rgba(255,255,255,0.6)] max-w-[420px]">
                {"We're setting up the community form — check back shortly, or reach out at "}
                <a href="mailto:hello@tellvalley.com" className="text-[color:var(--pricolor-orange,#ff5c22)] underline">
                  hello@tellvalley.com
                </a>
                {" in the meantime."}
              </p>
            </div>
          )}
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
