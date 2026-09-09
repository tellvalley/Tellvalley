import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../lib/gsapSetup.js";
import { ChevronRight } from "./icons.jsx";
import { useVisitorName } from "../context/VisitorNameContext.jsx";
import bgTexture from "../assets/landing/landing-img011.png";

const COUNTER_DURATION = 4.2;

// Faces of the spinning wordmark die, spaced 90deg apart (matches the
// 3-face "code driven animation" rig: https://codepen.io/creativeocean/pen/ByBogvj)
const DIE_WORDS = [
  { text: "TELL", size: 38, ry: 270 },
  { text: "VALLEY", size: 32, ry: 0 },
  { text: "STUDIOS", size: 26, ry: 90 },
];
const DIE_WIDTH = 260;
const DIE_HEIGHT = 54;
const DIE_RADIUS = DIE_WIDTH / 2;

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
  // No cursor follower on touch devices, so there's no point asking for a
  // nickname there — mobile just gets a plain Enter button.
  const [canPickName, setCanPickName] = useState(() => window.matchMedia("(pointer: fine)").matches);

  const overlayRef = useRef(null);
  const loadingLayerRef = useRef(null);
  const nameLayerRef = useRef(null);
  const dieWrapRef = useRef(null);
  const cubeRef = useRef(null);
  const taglineRef = useRef(null);
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
    const mq = window.matchMedia("(pointer: fine)");
    const onChange = (e) => setCanPickName(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (!cubeRef.current) return undefined;

    // Static 3D setup applies synchronously before first paint, so the
    // faces never flash flat/unrotated on top of each other.
    const faces = cubeRef.current.querySelectorAll(".die-face");
    gsap.set(faces, {
      z: DIE_RADIUS,
      rotateY: (i) => DIE_WORDS[i].ry,
      transformOrigin: `50% 50% -${DIE_RADIUS}px`,
    });
    gsap.set(dieWrapRef.current, { opacity: 0, y: 20 });
    gsap.set(taglineRef.current.children, { opacity: 0, y: 14 });
    gsap.set(percentRef.current, { opacity: 0, y: 8 });

    // Continuous back-and-forth spin, running independently of the
    // one-shot entrance/counter timeline below.
    const dieTl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power1.inOut", duration: 2 } });
    dieTl.fromTo(cubeRef.current, { rotateY: -90 }, { rotateY: 90 });

    const counter = { val: 0 };
    const tl = gsap.timeline();

    tl.to(dieWrapRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.6)" })
      .to(
        taglineRef.current.children,
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power3.out" },
        "-=0.3"
      )
      .to(percentRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.1")
      .to(
        counter,
        {
          val: 100,
          duration: COUNTER_DURATION,
          ease: "power1.inOut",
          onUpdate: () => {
            if (percentRef.current) percentRef.current.textContent = `${Math.round(counter.val)}%`;
          },
        },
        "-=0.05"
      )
      .add(() => dieTl.pause())
      .to(loadingLayerRef.current, { opacity: 0, scale: 0.96, duration: 0.5, ease: "power2.inOut" }, "+=0.3")
      .fromTo(
        nameLayerRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", onStart: () => setStage("name") },
        "<"
      );

    return () => {
      tl.kill();
      dieTl.kill();
    };
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
    <div ref={overlayRef} className="fixed inset-0 z-[999] bg-[#050505] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover opacity-[0.03]" src={bgTexture} />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(120% 90% at 50% 32%, rgba(45,45,45,0.5) 0%, rgba(4,4,4,0.94) 62%, #000 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.55)]" />
      </div>

      {/* Loading screen */}
      <div ref={loadingLayerRef} className="absolute inset-0 flex flex-col items-center justify-center gap-[15px]">
        <div ref={dieWrapRef} style={{ perspective: 900 }}>
          <div
            ref={cubeRef}
            style={{ width: DIE_WIDTH, height: DIE_HEIGHT, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {DIE_WORDS.map((word) => (
              <div
                key={word.text}
                style={{ fontSize: word.size, backfaceVisibility: "hidden" }}
                className="die-face absolute inset-0 flex items-center justify-center font-['Manrope'] font-bold text-white leading-none"
              >
                {word.text}
              </div>
            ))}
          </div>
        </div>
        <div ref={taglineRef} className="flex gap-[10px] items-center text-[16px] whitespace-nowrap">
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
          {canPickName ? (
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
          ) : (
            <p className="font-['Manrope'] font-normal text-[16px] text-[#f3ede3] text-center leading-[28px]">
              Welcome to Tellvalley
            </p>
          )}
          <button
            type="submit"
            className="group inline-flex items-center gap-[10px] bg-white rounded-[100px] px-[12px] py-[6px] text-[12px] text-center whitespace-nowrap cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_10px_30px_rgba(255,92,34,0.35)] active:scale-[0.97]"
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
