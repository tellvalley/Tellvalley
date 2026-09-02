import previewProductDesign from "../assets/landing/landing-imgRectangle1.png";
import previewWebsite from "../assets/landing/landing-imgRectangle2.png";
import previewTechEducation from "../assets/about/about-imgRectangle8.png";
import previewMediaProduction from "../assets/landing/landing-imgRectangle3.png";
import previewConsultancy from "../assets/landing/landing-imgRectangle4.png";

export const SERVICES = [
  {
    slug: "product-design",
    num: "01",
    title: "Product Design",
    body: [
      "We design user-centric web3 products that balance strategy, usability, and visual craft.",
      "Helping teams turn complex ideas into intuitive experiences users trust and adopt.",
    ],
    tags: ["UX Design", "UI Design", "Interactive Design", "Design Systems", "Interactive Experiences", "Motion Design", "Brand Design"],
    preview: previewProductDesign,
  },
  {
    slug: "website-design-development",
    num: "02",
    title: "Website Design & Development",
    body: [
      "We design high-impact web3 websites that blend strategy, storytelling, and cutting-edge design.",
      "Built to engage communities, impress investors, and clearly communicate complex blockchain products.",
    ],
    tags: ["Content Strategy", "Web Design", "Frontend Development", "Backend Development", "CMS Implementation"],
    preview: previewWebsite,
  },
  {
    slug: "tech-education",
    num: "03",
    title: "Tech Education",
    body: ["We train and build a community of learners that can compete in the global talent space and thrive."],
    tags: ["Graphic Design", "Coding", "3D & Product Design", "AI Tools", "Media Production"],
    preview: previewTechEducation,
  },
  {
    slug: "media-production",
    num: "04",
    title: "Media Production",
    body: ["We help brands turn early ideas into clear, and compelling visuals. "],
    tags: ["Photography", "Videography", "Content Creation", "Documentary Filming", "Audio Production", "Scripting", "Photo & Video Editing"],
    preview: previewMediaProduction,
  },
  {
    slug: "consultancy",
    num: "05",
    title: "Consultancy",
    body: [
      "We help brands turn early ideas into clear, actionable plans — combining strategic insight, technical expertise,",
      "and real-world experience to define MVPs that are ready to build.",
    ],
    tags: ["Content Strategy", "Art Direction", "UI Design", "Partnership & Facilitators Support", "Content Production", "Project Planning", "Mentorship Program", "Discovery Workshop"],
    preview: previewConsultancy,
  },
];
