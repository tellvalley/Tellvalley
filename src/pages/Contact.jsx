import { useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import Select from "../components/Select.jsx";
import { ChevronRight, InstagramIcon, TikTokIcon, XIcon, LinkedInIcon, YoutubeIcon } from "../components/icons.jsx";
import { SERVICES } from "../data/services.js";
import img011 from "../assets/services/services-img011.png";

const SOCIALS = [
  ["Instagram", "https://www.instagram.com/tellvalleystudios/", InstagramIcon],
  ["Tiktok", "https://www.tiktok.com/@tellvalley_studios", TikTokIcon],
  ["Twitter", "https://twitter.com/ValleyTell", XIcon],
  ["Linkedin", "https://www.linkedin.com/company/tellvalley/", LinkedInIcon],
  ["Youtube", "https://www.youtube.com/@tellvalley", YoutubeIcon],
];

const fieldClasses =
  "bg-transparent border border-[rgba(255,255,255,0.3)] rounded-[8px] px-[16px] py-[12px] font-['Manrope'] text-[14px] text-white placeholder:text-[rgba(255,255,255,0.4)] transition-colors duration-300 hover:border-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[color:var(--pricolor-orange,#ff5c22)] w-full";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjnzgkk";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

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
        className="relative max-w-[1055px] mx-auto px-6 pt-[160px] pb-[80px] flex flex-col items-center text-center gap-[16px]"
      >
        <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Contact Us</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[28px] md:text-[36px] text-white leading-[1.25] text-balance">
          Let&rsquo;s build something together.
        </h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)] max-w-[600px] text-pretty">
          Tell us a bit about your project and what you&rsquo;re trying to solve — we&rsquo;ll get back to you within a couple of business days.
        </p>
      </Reveal>

      {/* Form + info */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[220px]">
        <Reveal as="div" stagger={0.15} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[60px]">
          {/* Form */}
          <div>
            {sent ? (
              <div className="border border-[rgba(255,255,255,0.15)] rounded-[20px] p-[40px] flex flex-col gap-[12px] items-start">
                <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
                  <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                  <span className="font-['Manrope'] font-extralight text-white">Thanks</span>
                </div>
                <p className="font-['Manrope'] font-normal text-[22px] text-white">Message sent.</p>
                <p className="font-['Manrope'] font-extralight text-[14px] text-[rgba(255,255,255,0.7)]">
                  We&rsquo;ll get back to you within a couple of business days. You can also reach us directly at{" "}
                  <a href="mailto:hello@tellvalley.com" className="text-[color:var(--pricolor-orange,#ff5c22)] underline">
                    hello@tellvalley.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-[12px] font-['Manrope'] text-[13px] text-[rgba(255,255,255,0.6)] underline transition-colors duration-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <label className="flex flex-col gap-[8px]">
                    <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">Name</span>
                    <input required type="text" value={form.name} onChange={update("name")} placeholder="Your name" className={fieldClasses} />
                  </label>
                  <label className="flex flex-col gap-[8px]">
                    <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">Email</span>
                    <input required type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className={fieldClasses} />
                  </label>
                </div>
                <label className="flex flex-col gap-[8px]">
                  <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">What are you interested in?</span>
                  <Select value={form.service} onChange={update("service")} className="w-full" selectClassName={`${fieldClasses} cursor-pointer`}>
                    <option value="" className="bg-[#1c1c1c]">
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title} className="bg-[#1c1c1c]">
                        {s.title}
                      </option>
                    ))}
                    <option value="Something else" className="bg-[#1c1c1c]">
                      Something else
                    </option>
                  </Select>
                </label>
                <label className="flex flex-col gap-[8px]">
                  <span className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">Message</span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project…"
                    className={`${fieldClasses} resize-none`}
                  />
                </label>
                {error && (
                  <p className="font-['Manrope'] font-extralight text-[13px] text-[color:var(--pricolor-orange,#ff5c22)]">
                    Something went wrong sending your message. Please try again, or email us directly at hello@tellvalley.com.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-[10px] bg-white rounded-[100px] px-[24px] py-[14px] text-[14px] text-center whitespace-nowrap cursor-pointer w-fit transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_10px_30px_rgba(255,92,34,0.35)] active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none"
                >
                  <p className="font-['Manrope'] font-normal text-[#1c1c1c]">{submitting ? "Sending…" : "Send message"}</p>
                  <ChevronRight className="size-[12px] text-[color:var(--pricolor-orange,#ff5c22)] transition-transform duration-300 ease-out group-hover:translate-x-[4px]" />
                </button>
              </form>
            )}
          </div>

          {/* Info card */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[14px]">
              <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
                <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                <span className="font-['Manrope'] font-extralight text-white">Get in touch</span>
              </div>
              <a href="mailto:hello@tellvalley.com" className="font-['Manrope'] text-[20px] text-white underline w-fit transition-colors duration-300 hover:text-[color:var(--pricolor-orange,#ff5c22)]">
                hello@tellvalley.com
              </a>
              <p className="font-['Manrope'] text-[16px] text-white">+234-813-323-2542</p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
                <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
                <span className="font-['Manrope'] font-extralight text-white">Follow us on</span>
              </div>
              <div className="flex gap-[12px] items-center flex-wrap">
                {SOCIALS.map(([label, href, Icon]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group relative shrink-0 size-[40px] rounded-full border border-[rgba(255,255,255,0.3)] flex items-center justify-center text-white transition-all duration-300 ease-out hover:border-[color:var(--pricolor-orange,#ff5c22)] hover:text-[color:var(--pricolor-orange,#ff5c22)] hover:scale-[1.1]"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
