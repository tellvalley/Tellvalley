import { useEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsapSetup.js";
import { ChevronRight } from "./icons.jsx";
import { useVisitorName } from "../context/VisitorNameContext.jsx";
import bgTexture from "../assets/landing/landing-img011.png";

const LOAD_DURATION = 2.2;

/**
 * Full-screen intro gate: a loading count-up crossfades into a nickname
 * prompt, then fades out to reveal the site. Runs on every mount (App
 * never persists "seen intro" state), and the collected name lives only
 * in VisitorNameContext so it resets with the page.
 */
export default function IntroExperience() {
  const { setVisitorName } = useVisitorName();
  const [stage, setStage] = useState("loading"); // "loading" | "name" | "done"
  const [nameInput, setNameInput] = useState("");

  const overlayRef = useRef(null);
  const loadingLayerRef = useRef(null);
  const nameLayerRef = useRef(null);
  const percentRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = stage === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  useEffect(() => {
    if (stage === "name") inputRef.current?.focus();
  }, [stage]);

  useEffect(() => {
    const counter = { val: 0 };
    const tl = gsap.timeline();

    tl.to(counter, {
      val: 100,
      duration: LOAD_DURATION,
      ease: "power2.out",
      onUpdate: () => {
        if (percentRef.current) percentRef.current.textContent = `${Math.round(counter.val)}%`;
      },
    })
      .to(loadingLayerRef.current, { opacity: 0, scale: 0.96, duration: 0.5, ease: "power2.inOut" }, "+=0.3")
      .fromTo(
        nameLayerRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", onStart: () => setStage("name") },
        "<"
      );

    return () => tl.kill();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setVisitorName(nameInput.trim());
    overlayRef.current.style.pointerEvents = "none";
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => setStage("done"),
    });
  }

  if (stage === "done") return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[999] bg-[#1c1c1c] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover opacity-2" src={bgTexture} />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(28,28,28,0)]" />
      </div>

      {/* Loading screen */}
      <div ref={loadingLayerRef} className="absolute inset-0 flex flex-col items-center justify-center gap-[15px]">
        <p className="font-['Manrope'] font-extralight text-[36px] text-white leading-none">Tellvalley</p>
        <div className="flex gap-[10px] items-center text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Listen</span>
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Learn</span>
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Lead</span>
        </div>
        <p
          ref={percentRef}
          className="absolute bottom-[80px] font-['Manrope'] font-normal text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]"
        >
          0%
        </p>
      </div>

      {/* Nickname prompt */}
      <div
        ref={nameLayerRef}
        className="absolute inset-0 opacity-0"
        style={{ pointerEvents: stage === "name" ? "auto" : "none" }}
      >
        <p className="absolute left-6 top-6 md:left-[82px] md:top-[40px] flex items-center gap-[10px] font-['Manrope'] font-extralight text-[16px] text-white whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          Tellvalley
        </p>

        <form
          onSubmit={handleSubmit}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[30px] w-[min(481px,90vw)] px-6"
        >
          <div className="flex flex-col items-center gap-[20px] w-full">
            <p className="font-['Manrope'] font-normal text-[16px] text-[#f3ede3] text-center leading-[28px]">
              Welcome,
              <br />
              Tell us your nickname..
            </p>
            <input
              ref={inputRef}
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Enter Nickname.."
              maxLength={24}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className="bg-[#1c1c1c] border border-white/10 rounded-[10px] w-full p-[14px] text-center font-['Manrope'] font-normal text-[12px] text-white placeholder:text-[rgba(103,98,94,0.7)] outline-none focus:border-[color:var(--pricolor-orange,#ff5c22)] transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            disabled={!nameInput.trim()}
            className="group inline-flex items-center gap-[10px] bg-white rounded-[100px] px-[12px] py-[6px] text-[12px] text-center whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_10px_30px_rgba(255,92,34,0.35)] active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none"
          >
            <p className="font-['Manrope'] font-normal text-[#1c1c1c]">Enter Valley</p>
            <ChevronRight className="size-[12px] text-[color:var(--pricolor-orange,#ff5c22)] transition-transform duration-300 ease-out group-hover:translate-x-[4px]" />
          </button>
        </form>

        <p className="absolute right-6 bottom-6 md:right-[40px] md:bottom-[40px] font-['Manrope'] font-normal text-[16px] text-[color:var(--pricolor-orange,#ff5c22)]">
          100%
        </p>
      </div>
    </div>
  );
}
