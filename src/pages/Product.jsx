import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Reveal from "../components/Reveal.jsx";
import img011 from "../assets/services/services-img011.png";
import scndly from "../assets/product/product-scndly.png";
import pixelPool from "../assets/product/product-pixelpool.png";
import gestureCanvas from "../assets/product/product-gesturecanvas.png";

const PRODUCTS = [
  { img: scndly, name: "Scndly", tagline: "Create unlimited QR codes for free." },
  { img: pixelPool, name: "Pixel Pool", tagline: "Designers vs. Clients Game" },
  { img: gestureCanvas, name: "Gesture Canvas", tagline: "A Figma-like design editor that uses gestures" },
];

export default function Product() {
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
        className="relative max-w-[1055px] mx-auto px-6 pt-[160px] pb-[120px] flex flex-col items-center text-center gap-[16px]"
      >
        <div className="content-stretch flex gap-[10px] items-center text-[16px] whitespace-nowrap">
          <span className="font-['Manrope'] font-semibold text-[color:var(--pricolor-orange,#ff5c22)]">/</span>
          <span className="font-['Manrope'] font-extralight text-white">Products</span>
        </div>
        <h1 className="font-['Manrope'] font-normal text-[36px] md:text-[45px] text-white">Things We Built</h1>
        <p className="font-['Manrope'] font-extralight text-[16px] text-[rgba(255,255,255,0.7)]">
          Helpful Plugins & products for our community & partners
        </p>
      </Reveal>

      {/* Product cards */}
      <section className="relative max-w-[1348px] mx-auto px-6 md:px-[82px] pb-[160px]">
        <Reveal as="div" stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[38px] max-w-[1018px] mx-auto">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col gap-[24px] items-center rounded-[16px] border border-white/10 p-[10px] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-[color:var(--pricolor-orange,#ff5c22)]/60 hover:shadow-[0_20px_40px_rgba(255,92,34,0.2)]"
            >
              <div className="w-full h-[183px] rounded-[8px] overflow-hidden">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  src={p.img}
                />
              </div>
              <div className="flex flex-col items-center gap-[4px] pb-[10px]">
                <p className="font-['Manrope'] font-normal text-[16px] text-white transition-colors duration-300 group-hover:text-[color:var(--pricolor-orange,#ff5c22)]">{p.name}</p>
                <p className="font-['Manrope'] font-extralight text-[12px] text-[rgba(255,255,255,0.7)]">{p.tagline}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Coming soon */}
      <Reveal as="section" className="relative max-w-[1055px] mx-auto px-6 pb-[220px] text-center">
        <p className="font-['Manrope'] font-normal text-[20px] text-white">
          We are working on other <span className="italic text-[color:var(--pricolor-orange,#ff5c22)]">cool</span>{" "}
          stuffs.
          <br />
          Look out for this space
        </p>
      </Reveal>

      <Footer />
    </div>
  );
}
