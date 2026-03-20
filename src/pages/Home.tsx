import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FundoHero from "../assets/Images/FundoHero.webp";
import K from "../assets/Images/K.webp";
import LogoKather from "../assets/Images/LogoKather.webp";
import CartaoKather from "../assets/Images/CartaoKather.webp";
import Home1 from "../assets/Images/Home1.webp";
import Home2 from "../assets/Images/Home2.webp";
import "../styles/home.css";

import image1 from "../assets/Images/home/Capas portfólio -04.webp";
import image2 from "../assets/Images/home/Capas portfólio -07.webp";
import image3 from "../assets/Images/home/Capas portfólio -08.webp";
import image4 from "../assets/Images/home/Capas portfólio -11.webp";
import image5 from "../assets/Images/home/Capas portfólio -12.webp";
import image6 from "../assets/Images/home/Capas portfólio -14.webp";

import {
  FaPinterest,
  FaBehance,
  FaLinkedin,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const logos = import.meta.glob<string>(
  "/src/assets/Images/CarouselLogos/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const CarouselLogos = Object.values(logos).map((img, index) => ({
  url: img,
  alt: `Logos ${index + 1}`,
}));

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "O resultado ficou incrível, superou minhas expectativas. Tudo muito legal mesmo! Sempre que alguém me perguntar sobre identidade visual, vou te indicar com certeza. Parabéns pelo trabalho impecável!",
    name: "Dr. Marlon Manhães",
    company: "Médico Esportivo",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Conheci seu trabalho pelo TikTok e fui surpreendida. Você criou minha marca com atenção, carinho e profissionalismo. Ficou exatamente como eu queria. Sucesso sempre, Katharine! Obrigada por tudo!.",
    name: "Vandressa",
    company: "Alazzo - Moda Fitness",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "Sou exigente com design, mas confiei de cara no seu trabalho. Você captou minha essência e transmitiu com sensibilidade. Tudo ficou muito alinhado à proposta. Parabéns pelos detalhes!",
    name: "Clara Linhares",
    company: "Psicóloga Clínica",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

const faqItemsHome = [
  {
    question: "Quanto tempo leva o processo completo?",
    answer:
      "O prazo médio é de 20 a 35 dias úteis, dependendo da complexidade do projeto. Tudo é planejado com cronograma e transparência — sem atropelos, mas com comprometimento.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! O pagamento pode ser parcelado via cartão de crédito em até 6x sem juros, através de uma plataforma segura.",
  },
  {
    question: "Os arquivos finais são editáveis?",
    answer:
      "Você recebe a identidade visual finalizada, com todos os arquivos organizados e prontos para uso: versões vetoriais (.ai e .svg), imagens em alta resolução (.png) e o manual da marca.",
  },
  {
    question: "Esse serviço serve para qualquer tipo de negócio?",
    answer:
      "Sim! Já desenvolvemos identidades para psicólogas, estúdios criativos, marcas de moda, indústrias e mais. A metodologia se adapta à proposta e essência de cada negócio.",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "MazaMad",
    category: "Identidade Visual",
    image:
      image1,
  },
  {
    id: 2,
    title: "Lavoy",
    category: "Identidade Visual & Naming",
    image:
      image2,
  },
  {
    id: 3,
    title: "Essência Jeans",
    category: "Identidade Visual",
    image:
      image3,
  },
  {
    id: 4,
    title: "Zadda",
    category: "Identidade Visual & Naming",
    image:
      image4,
  },
  {
    id: 5,
    title: "Regra",
    category: "Identidade Visual",
    image:
      image5,
  },
  {
    id: 6,
    title: "Bárbara Benevenutto",
    category: "Identidade Visual",
    image:
      image6,
  },
];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const location = useLocation();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
        <div className="container mx-auto px-3 md:px-6 h-20 flex items-center justify-between max-w-[1400px]">
          <a
            href="/"
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
              href="/"
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/portfolio"
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
            >
              Sobre
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
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
        </div>
      </header>

      {/* Mobile Menu - Fora do Header */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-beige z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="/"
          onClick={closeMenu}
          className="group relative text-4xl font-medium text-black hover:text-olive transition-colors"
        >
          Home
          <span
            className={`absolute left-0 -bottom-2 h-1 bg-olive transition-all duration-300 ${
              location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>

        <a
          href="/portfolio"
          onClick={closeMenu}
          className="group relative text-4xl font-medium text-black hover:text-olive transition-colors"
        >
          Portfolio
          <span
            className={`absolute left-0 -bottom-2 h-1 bg-olive transition-all duration-300 ${
              location.pathname === "/about"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>

        <a
          href="/about"
          onClick={closeMenu}
          className="group relative text-4xl font-medium text-black hover:text-olive transition-colors"
        >
          Sobre
          <span
            className={`absolute left-0 -bottom-2 h-1 bg-olive transition-all duration-300 ${
              location.pathname === "/about"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>

        <a
          href="/contact"
          onClick={closeMenu}
          className="group relative text-4xl font-medium text-black hover:text-olive transition-colors"
        >
          Contato
          <span
            className={`absolute left-0 -bottom-2 h-1 bg-olive transition-all duration-300 ${
              location.pathname === "/about"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>
      </div>

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          className="flex overflow-hidden lg:pt-28 lg:items-start relative pt-24 lg:pb-5"
          id="home"
        >
          <div className="container z-10 max-w-[1400px] mr-auto ml-auto px-3 md:px-6 relative">
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
                <h1 className="leading-tight lg:uppercase md:leading-[1.3] text-balance md:text-6xl lg:text-[53px] text-3xl lg:font-bold font-medium tracking-tight text-center md:text-left mb-6 md:mb-0 text-black md:text-black">
                  Está na hora <br /> de{" "}
                  <span className="text-[#f1f0ee]">mudar a forma</span> <br /> como
                  seus clientes <br />
                  enxergam <span className="text-[#f1f0ee]">sua marca</span>
                </h1>
                <p className="hidden md:block md:text-2xl leading-relaxed text-base font-medium text-black max-w-xl mt-6 opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards] lg:max-w-140">
                  Vamos mostrar o seu profissionalismo, <br /> eficiência e
                  valores em uma identidade visual <br /> não apenas bonita, mas
                  fundamentada em um conceito sólido e duradouro.
                </p>
                {/* Botão - centralizado no mobile, alinhado à esquerda no desktop */}
                <div className="mt-0 md:mt-8 md:opacity-0 md:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] flex justify-center md:justify-start">
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#f1f0ee] rounded-full text-offwhite text-base md:text-xl font-medium transition-all duration-300 hover:bg-[#f1f0ee] hover:text-black whitespace-nowrap"
                  >
                    Como trabalhamos?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARCAS QUE CONFIAM - SEÇÃO NOVA */}
        <section className="py-10 bg-offwhite">
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
            <p className="text-2xl font-semibold text-black/80 uppercase tracking-widest mb-8 ml-1">
              Marcas que confiam
            </p>

            <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max animate-marquee">
                <div className="flex gap-16 pr-13">
                  {CarouselLogos.map((logo, index) => (
                    <div
                      key={`original-${index}`}
                      className="w-32 h-14 flex items-center justify-center"
                    >
                      <img
                        src={logo.url}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-16">
                  {CarouselLogos.map((logo, index) => (
                    <div
                      key={`clone-${index}`}
                      className="w-32 h-14 flex items-center justify-center"
                    >
                      <img
                        src={logo.url}
                        alt=""
                        aria-hidden="true"
                        className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section id="portfolio" className="pt-5 lg:pt-9 pb-2 lg:pb-8">
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-x-3 gap-y-3 lg:gap-y-7">
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

        {/* TESTIMONIALS SECTION */}
        <section className="pt-4 lg:pt-6 pb-10 lg:pb-17 bg-offwhite">
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
            <p className="text-2xl font-semibold text-black/90 uppercase tracking-widest mb-5 ml-1">
              Um recado dos meus clientes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#f1f0ee] p-8 rounded-[1.5rem] flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300 h-full relative lg:min-h-[320px]"
                >
                  {/* Aspas decorativas no canto superior direito */}
                  <svg
                    className="absolute top-6 right-6 w-10 h-10 text-black/10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  {/* Texto do depoimento */}
                  <p className="text-black/75 text-lg italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3">
                    {/* Ícone avatar */}
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-black/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-black/50">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (Inline) */}
        <section
          id="about"
          className="bg-offwhite pt-2 md:pt-1 -mt-8 md:-mt-5 pb-2"
        >
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
              {/* Image */}
              <div className="relative order-2 lg:order-1 w-full">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] md:aspect-[3/2] lg:aspect-auto lg:h-full">
                  <img
                    src={Home1}
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
                <h2 className="text-[40px] md:text-[59px] font-semibold uppercase text-black leading-[1.15] mb-3 tracking-tight mt-6 md:mt-0">
                  <span className="text-[#f1f0ee]">Acredito </span>
                  que sua marca é o que ela transmite
                </h2>

                <p className="text-lg md:text-2xl text-[#f1f0ee] font-medium leading-relaxed mb-4 mt-2 md:mt-12 text-balance md:mb-0">
                  A identidade visual é tudo o que o cliente vê e percebe sobre
                  sua marca, tanto nos meios digitais quanto no offline.
                </p>

                <div className="mt-19 hidden md:block">
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#f1f0ee] rounded-full text-white text-base md:text-xl font-medium transition-all duration-300 hover:bg-[#f1f0ee] hover:text-black whitespace-nowrap"
                  >
                    Conhecer mais sobre nosso processo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          id="contact"
          className="relative overflow-hidden bg-offwhite text-black pt-1 md:pt-4 lg:pt-7 pb-10"
        >
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px] relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
              {/* Text Card */}
              <div className="bg-beige shadow-sm flex flex-col justify-center rounded-[1.5rem] p-6 md:p-10 lg:p-12 md:aspect-[3/2] lg:aspect-auto">
                <h2 className="text-[40px] md:text-[59px] font-semibold uppercase leading-[1.15] tracking-tight mb-4 text-black mt-4 md:mt-0">
                  Marcas sem identidade visual passam{" "}
                  <span className="text-[#f1f0ee]">despercebidas</span>
                </h2>
                <p className="text-lg md:text-2xl font-medium leading-relaxed mb-5 md:mb-10 mt-0 md:mt-4 text-black/90 md:max-w-120">
                  Agende uma conversa comigo. Estou disposta a entender sobre
                  sua marca para oferecer uma solução eficiente e criativa.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#4e6628] bg-transparent rounded-full text-olive hover:text-[#f1f0ee] text-base md:text-xl font-medium transition-all duration-300 hover:bg-olive whitespace-nowrap w-fit"
                >
                  Agendar uma conversa
                </a>
              </div>

              {/* Image Card */}
              <div className="relative w-full overflow-hidden rounded-[1.5rem] aspect-[3/4] md:aspect-[3/2] lg:aspect-auto lg:h-full hidden md:block">
                <img
                  src={Home2}
                  alt="Creative Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-offwhite pt-6 pb-4">
          <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
            <p className="text-2xl font-semibold text-black/90 uppercase tracking-widest mb-5 ml-1">
              Perguntas Frequentes
            </p>

            <div className="flex flex-col">
              {faqItemsHome.map((item, index) => (
                <details
                  key={index}
                  className="group py-5 border-b border-black/10"
                  open={openFAQ === index}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(index);
                  }}
                >
                  <summary className="flex justify-between items-start cursor-pointer list-none outline-none [&::-webkit-details-marker]:hidden gap-4">
                    <span className="text-lg md:text-xl font-medium text-black/90 group-hover:text-olive transition-colors leading-tight">
                      {item.question}
                    </span>
                    <span
                      className={`text-olive pt-1 flex-shrink-0 transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : ""}`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-lg text-black/60 font-regular leading-relaxed lg:max-w-210">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-olive bg-transparent rounded-full text-olive text-base font-bold transition-all duration-300 hover:bg-olive hover:text-white whitespace-nowrap w-fit mt-6"
            >
              Ver todas as perguntas
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-6 bg-offwhite text-black">
        <div className="container mx-auto px-3 md:px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-4">
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
          <p className="text-base font-medium text-black mt-1">
            © {currentYear} | Studio Kather
          </p>

          {/* Right: Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://pin.it/2flz87bqI"
              className="text-black hover:text-olive transition-colors"
            >
              <FaPinterest className="w-7 h-7" />
            </a>
            <a
              href="https://www.behance.net/katharidiasar"
              className="text-black hover:text-olive transition-colors"
            >
              <FaBehance className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/katharine-araujo-824586251/"
              className="text-black hover:text-olive transition-colors"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="https://open.spotify.com/playlist/32TglD8RJtWSjbaVU1LZGT?si=a859496cc0274748&nd=1&dlsi=dbdc9668daa64381"
              className="text-black hover:text-olive transition-colors"
            >
              <FaSpotify className="w-7 h-7" />
            </a>
            <a
              href="https://www.tiktok.com/@katharinearaujo_?_t=ZM-8xS2AimDpRN&_r=1"
              className="text-black hover:text-olive transition-colors"
            >
              <FaTiktok className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
