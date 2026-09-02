import imgCios from "../assets/landing/landing-imgRectangle1.png";
import imgCloudolle from "../assets/landing/landing-imgRectangle2.png";
import imgReaching from "../assets/landing/landing-imgRectangle3.png";
import imgCareBridge from "../assets/landing/landing-imgRectangle4.png";

import galleryReaching1 from "../assets/about/about-imgRectangle8.png";
import galleryReaching2 from "../assets/about/about-imgRectangle9.png";
import galleryReaching3 from "../assets/about/about-imgRectangle5.png";
import galleryCareBridge1 from "../assets/about/about-imgRectangle2.png";
import galleryCareBridge2 from "../assets/about/about-imgRectangle3.png";
import galleryCareBridge3 from "../assets/about/about-imgRectangle4.png";

export const CASE_STUDIES = [
  {
    slug: "cios",
    tag: "Cios (Release)",
    title: "First-ever Insurtech product for lease break coverage.",
    type: "Product Build",
    pills: ["Branding", "Product Design", "Consultancy"],
    cover: imgCios,
    brief:
      "Cios came to us with a bold idea: give renters a way to break a lease without the usual financial gut-punch. Nothing quite like it existed in the insurtech space, so there was no map to follow — we had to design the category as we designed the product.",
    results:
      "We shaped the product strategy, defined the core coverage flows, and designed an interface that makes a genuinely complex insurance product feel as simple as booking a ride. Cios launched with a waitlist that outgrew its first funding round in six weeks.",
    gallery: [],
  },
  {
    slug: "cloudolle",
    tag: "Cloudolle",
    title: "Platform of innovative consultants dedicated to top-notch cloud-based solutions for businesses of all sizes",
    type: "Consultancy",
    pills: ["Branding", "Product Design", "Consultancy"],
    cover: imgCloudolle,
    brief:
      "Cloudolle needed to position a network of independent cloud consultants as one coherent, trustworthy brand — without flattening what made each consultant credible on their own.",
    results:
      "We built a shared visual language and a booking-first product experience that lets clients match with the right consultant in minutes instead of weeks, while keeping every consultant's own expertise front and center.",
    gallery: [],
  },
  {
    slug: "reaching-the-unreached",
    tag: "Reaching the Unreached",
    title: "Health Documentary On Maternal Mortality Rate In Nigeria",
    type: "Documentary",
    pills: ["Documentary", "Storytelling", "Scripting", "Filming"],
    cover: imgReaching,
    brief:
      "Maternal mortality in rural Nigeria is a statistic most people never see past the number. We were brought in to put faces, homes, and voices behind it — without turning real people's hardest moments into spectacle.",
    results:
      "We scripted, filmed, and edited a documentary that traveled with community health workers into the areas most affected. It has since screened at regional health conferences and is used as a training resource for maternal-health NGOs.",
    gallery: [galleryReaching1, galleryReaching2, galleryReaching3],
  },
  {
    slug: "carebridge",
    tag: "CareBridge",
    title: "Improving Emergency Obstetric Care in Rural Areas — Comprehensive Feature Analysis",
    type: "Product Design",
    pills: ["Product Build", "Product Design", "Website Design & Development", "Consultancy"],
    cover: imgCareBridge,
    brief:
      "CareBridge connects rural clinics to emergency obstetric care, but the early product buried its most urgent feature — fast referrals — under generic hospital-app patterns. We were asked to rebuild the experience around the moments that actually matter.",
    results:
      "We audited every screen against real emergency scenarios, redesigned the referral flow to work in under 30 seconds on a low-end phone, and rebuilt the website so partner hospitals could understand and adopt the platform faster.",
    gallery: [galleryCareBridge1, galleryCareBridge2, galleryCareBridge3],
  },
];

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
