import { useState, useEffect } from "react";
import FundoHero from "../assets/Images/FundoHero.jpg";
import K from "../assets/Images/K.png";
import LogoKather from "../assets/Images/LogoKather.png";
import CartaoKather from "../assets/Images/CartaoKather.png";
import About from "../assets/Images/About.jpg";
import Contact from "../assets/Images/Contact.jpg";
import "./home.css";

const currentYear = new Date().getFullYear();

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Botanica Studio",
    category: "Visual Identity",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
  },
  {
    id: 2,
    title: "Lumina Arc",
    category: "Rebranding",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Nordic Home",
    category: "Packaging",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Aura Tech",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Essence",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Kinetic",
    category: "Brand Strategy",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
  },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Custom Cursor Element */}
      <div
        id="cursor"
        className="custom-cursor hidden lg:block"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 bg-offwhite/90 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-[1400px]">
          <a
            href="#"
            className="flex items-center text-xl font-bold tracking-tight text-black z-50"
          >
            <img
              src={LogoKather}
              alt="Studio Kather"
              className="h-7 w-auto hidden lg:block"
            />
            <img src={K} alt="Studio Kather" className="h-7 w-auto lg:hidden" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#portfolio"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Sobre
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Contato
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <button
            id="menu-btn"
            className="md:hidden z-50 text-black p-2 focus:outline-none"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div
            id="mobile-menu"
            className={`fixed inset-0 bg-offwhite z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="#home"
              className="mobile-link text-3xl font-medium text-black hover:text-olive transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="mobile-link text-3xl font-medium text-black hover:text-olive transition-colors"
              onClick={closeMenu}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="mobile-link text-3xl font-medium text-black hover:text-olive transition-colors"
              onClick={closeMenu}
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="mobile-link text-3xl font-medium text-black hover:text-olive transition-colors"
              onClick={closeMenu}
            >
              Contato
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          className="flex overflow-hidden lg:pt-28 lg:items-start relative pt-24 lg:pb-10"
          id="home"
        >
          <div className="container z-10 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative">
            <div className="relative w-full bg-white rounded-[1.5rem] overflow-hidden group">
              <div className="absolute inset-0 w-full h-full">
                {/* Desktop */}
                <img
                  src={FundoHero}
                  alt="Hero Studio Kather"
                  className="hidden md:block object-cover lg:object-center object-top w-full h-full"
                />
                {/* Mobile */}
                <img
                  src={CartaoKather}
                  alt="Hero Studio Kather"
                  className="md:hidden object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 bg-white/1 backdrop-blur-[1px] hidden md:block"></div>
              </div>
              <div className="flex flex-col md:p-16 lg:p-24 min-h-[600px] md:min-h-[750px] lg:min-h-[650px] z-10 lg:justify-start p-8 md:pt-10 md:pr-10 md:pb-10 md:pl-10 relative justify-end">
                <h1 className="leading-tight md:leading-[1.1] text-balance md:text-6xl lg:text-[64px] lg:text-6xl text-3xl font-medium tracking-tight text-center md:text-left mb-6 md:mb-0 text-offwhite md:text-black">
                  Está na hora de
                  <br className="" />
                  <span className="text-beige">muda a forma</span>
                  <br />
                  como seus clientes <br /> enxergam
                  <br />
                  <span className="text-beige">sua marca.</span>
                </h1>
                <p className="hidden md:block md:text-lg leading-relaxed text-base font-regular text-black max-w-xl mt-6 opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]">
                  Marcas que crescem são aquelas que investem em design,
                  especialmente na identidade visual. Transformamos essência em
                  percepção.
                </p>
                {/* Botão - centralizado no mobile, alinhado à esquerda no desktop */}
                <div className="mt-0 md:mt-8 md:opacity-0 md:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] flex justify-center md:justify-start">
                  <a
                    href="#about"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 border-2 border-offwhite md:border-beige rounded-full text-offwhite md:text-offwhite text-base md:text-lg font-normal transition-all duration-300 hover:bg-beige hover:text-black"
                  >
                    Como trabalhamos?
                    <svg
                      className="group-hover:translate-x-1 transition-transform w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section id="portfolio" className="pt-5 lg:pt-0 pb-4">
          <div className="container mx-auto px-6 max-w-[1400px]">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-x-3 gap-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="group relative w-full aspect-square overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out rounded-[1.5rem]"
                >
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-black/60 ${
                      activeProject === project.id ? "opacity-100" : "opacity-0"
                    } lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]`}
                  >
                    <h3
                      className={`text-offwhite text-2xl font-semibold ${
                        activeProject === project.id
                          ? "translate-y-0"
                          : "translate-y-4"
                      } lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-75`}
                    >
                      {project.title}
                    </h3>
                    <span
                      className={`text-beige text-sm mt-2 font-light ${
                        activeProject === project.id
                          ? "translate-y-0"
                          : "translate-y-4"
                      } lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-100`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (Inline) */}
        <section id="about" className="bg-offwhite pt-2 md:pt-4 pb-4">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
              {/* Image */}
              <div className="relative order-2 lg:order-1 w-full">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] md:aspect-[3/2] lg:aspect-auto lg:h-full">
                  <img
                    src={About}
                    alt="Designer at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-beige rounded-full -z-10 blur-xl opacity-60"></div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 bg-olive shadow-sm flex flex-col justify-center rounded-[1.5rem] p-6 md:p-10 lg:p-12">
                <h2 className="text-[40px] md:text-[59px] font-semibold text-black leading-[1.15] mb-6 tracking-tight mt-6 md:mt-0">
                  <span className="text-beige">Acredito </span>
                  que sua marca é o que ela transmite
                </h2>

                <p className="text-lg md:text-2xl text-offwhite font-normal leading-relaxed mb-4 mt-2 md:mt-12 text-balance mb-6 md:mb-0">
                  A identidade visual é tudo o que o cliente vê e percebe sobre
                  sua marca, tanto nos meios digitais quanto no offline.
                </p>

                <div className="mt-19 hidden md:block">
                  <a
                    href="#"
                    className="inline-flex items-center text-offwhite font-medium text-base hover:underline decoration-1 underline-offset-4 transition-all"
                  >
                    Conhecer mais sobre nosso processo
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          id="contact"
          className="relative overflow-hidden bg-offwhite text-black pt-1 md:pt-4 pb-10"
        >
          <div className="container mx-auto px-6 max-w-[1400px] relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
              {/* Text Card */}
              <div className="bg-beige shadow-sm flex flex-col justify-center rounded-[1.5rem] p-6 md:p-10 lg:p-12 md:aspect-[3/2] lg:aspect-auto">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-black mt-4 md:mt-0">
                  Marcas sem identidade visual passam{" "}
                  <span className="text-white">despercebidas</span>
                </h2>
                <p className="text-base md:text-xl font-semibold leading-relaxed mb-5 md:mb-10 mt-0 md:mt-7 text-black/90">
                  Agende uma conversa comigo. Estou disposta a entender sobre
                  sua marca para oferecer uma solução eficiente e criativa.
                </p>
                <a
                  href="#"
                  className="inline-block bg-olive text-white px-8 py-3 rounded-full font-medium text-base mt-0 md:mt-4 mb-3 md:mb-0 transition-all duration-300 hover:bg-[#5d7b32] hover:scale-105 shadow-lg shadow-olive/20 w-fit"
                >
                  Agendar Call
                </a>
              </div>

              {/* Image Card */}
              <div className="relative w-full overflow-hidden rounded-[1.5rem] aspect-[3/4] md:aspect-[3/2] lg:aspect-auto lg:h-full hidden md:block">
                <img
                  src={Contact}
                  alt="Creative Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 bg-offwhite text-black">
        <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Logo */}
          <a
            href="#"
            className="text-lg md:text-xl font-semibold tracking-tight text-black md:mb-2"
          >
            <img
              src={LogoKather}
              alt="Studio Kather"
              className="h-7 w-auto ml-3 md:ml-0"
            />
          </a>

          {/* Center: Copyright */}
          <p className="text-base font-bold text-black mt-1">
            © {currentYear} | Studio Kather
          </p>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-black hover:text-olive transition-colors"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-black hover:text-olive transition-colors"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-black hover:text-olive transition-colors"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
