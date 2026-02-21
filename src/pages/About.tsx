import { useState, useEffect } from "react";
import LogoKather from "../assets/Images/LogoKather.png";
import K from "../assets/Images/K.png";
import "../styles/about.css";
import {
  FaPinterest,
  FaBehance,
  FaLinkedin,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto tempo leva o procecsso completo?",
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
      "Você recebe a identidade visual finalizada, com todos os arquivos organizados e prontos para uso: versões vetoriais (como .ai e .svg), imagens em alta resolução (.png) e o manual da marca. Apesar de serem tecnicamente editáveis, recomendamos que esses arquivos não sejam alterados por terceiros, para preservar a consistência visual e a integridade do projeto.",
  },
  {
    question: "Esse serviço serve para qualquer tipo de negócio?",
    answer:
      "Sim! Já desenvolvemos identidades para psicólogas, estúdios criativos, marcas de moda, indústrias e mais. A metodologia se adapta à proposta e essência de cada negócio — com estratégia e personalidade.",
  },
  {
    question: "E se eu não gostar do resultado, como fazemos?",
    answer:
      "Toda proposta é construída com base em briefing, referências e análises estratégicas. Mas se algo não fizer sentido, refinamos juntos. Nosso compromisso é entregar uma identidade que represente você — com autenticidade e visão de futuro.",
  },
];

const methodologySteps = [
  {
    number: "01",
    title: "Alinhamento",
    description:
      "Para que eu possa entender melhor o que você precisa, peço que preencha um questionário curtinho. Assim, consigo criar uma proposta personalizada para te apresentar.",
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Aqui, farei a apresentação dos pacotes, valores, metodologia aplicada e prazos. Finalizamos com envio de contrato para formalizar a parceria.",
  },
  {
    number: "03",
    title: "Briefing",
    description:
      "Agora, você preenche um documento essencial com todas as informações estratégicas que servirão de base para a criação da marca.",
  },
  {
    number: "04",
    title: "Moodboard",
    description:
      "A etapa mais divertida! Nessa parte, faremos uma reunião para alinhar conceitos estéticos, referências e elementos visuais da identidade. Preciso conhecer e saber do que você gosta para traduzir sua marca da melhor forma possível!",
  },
  {
    number: "05",
    title: "Criação",
    description:
      "Mãos na massa! Agora partimos para o desenvolvimento do sistema visual: símbolos, tipografias, grafismos, cores, layouts e demais elementos da identidade.",
  },
  {
    number: "06",
    title: "Apresentação",
    description:
      "Hora do show! Agendaremos a apresentação do conceito final com explicações estratégicas e justificativas visuais que sustentam o design da marca.",
  },
  {
    number: "07",
    title: "Entrega",
    description:
      "Depois de tudo aprovado, faremos a entrega de todos os arquivos digitais (PNG, PDF, SVG), além da paleta de cores em RGB, CMYK e Pantone, e arquivos para impressão — prontos para uso online e impresso, conforme a necessidade.",
  },
];

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Custom Cursor Element */}
      <div
        id="cursor"
        className="custom-cursor hidden lg:block"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-offwhite/90 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-[1400px]">
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
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/portfolio"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Sobre
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
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
              location.pathname === "/portfolio"
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
              location.pathname === "/contact"
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>
      </div>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="pt-15 md:pt-28 pb-6 lg:pb-0 animate-fade-in-up"
        >
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="flex flex-col gap-10 lg:gap-14 w-full">
              {/* Text Content */}
              <div className="flex flex-col justify-center py-6 w-full">
                <h1 className="text-[53px] md:text-5xl lg:text-[64px] font-medium leading-[1.05] max-w-180 lg:max-w-300 text-black tracking-tight mb-6">
                  Oiê, muito prazer!{" "} <br />
                  <span className="text-olive">Katharine</span> aqui, mas pode
                  me chamar de <span className="text-olive">Kath</span> .
                </h1>
                <p className="text-black/90 text-lg md:text-xl font-regular leading-relaxed mb-4 max-w-xl lg:max-w-250">
                  Sou designer especializada em identidades visuais e fundadora
                  do Studio Kather. Mais do que estética bonita, entrego
                  estrutura, clareza e emoção. Cada projeto nasce com base em
                  estratégia, pesquisa e escuta profunda, porque identidade
                  visual não é só sobre aparência, é sobre posicionamento.
                </p>
                <p className="text-black/90 text-lg md:text-xl font-regular leading-relaxed mb-4 max-w-xl lg:max-w-250">
                  Acredito que marcas são feitas de pessoas, e por isso precisam
                  ser vivas, únicas e intencionais.
                </p>
                <p className="text-black/90 text-lg md:text-xl font-regular leading-relaxed mb-4 max-w-xl lg:max-w-250">
                  Se você sente que está na hora da sua marca ser reconhecida
                  pelo que realmente é, seja bem-vindo(a). <br />
                  Aqui, a gente constrói visualmente tudo aquilo que você veio
                  dizer ao mundo.
                </p>
              </div>

              {/* Visual */}
              <div className="relative h-[370px] lg:h-[500px] min-h-[300px] w-full rounded-[1.5rem] overflow-hidden shadow-sm group -mt-15 md:-mt-10">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
                  alt="Office Space"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-101"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                    </div>
                    <span className="text-white text-sm font-medium">
                      +120 projetos entregues
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METHODOLOGY / PROCESS SECTION */}
        <section id="process" className="pt-10 pb-16 md:pt-12 md:pb-24">
          <div className="container mx-auto px-6 max-w-[1400px]">
            <div className="flex flex-col gap-20 w-full ">
              {/* Methodology */}
              <div className="flex flex-col gap-16">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-black">
                    Identidade não nasce de um copia e cola
                  </h2>
                  <p className="text-xl md:text-2xl text-black/60 font-light">
                    Aqui, passamos por 7 etapas até alcançar um resultado
                    verdadeiramente satisfatório.
                  </p>
                </div>

                <div className="flex flex-col gap-12 -mt-10 md:-mt-8 lg:max-w-210">
                  {methodologySteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-8 items-start group"
                    >
                      <div className="shrink-0">
                        <div
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-black/10 flex items-center 
                        justify-center text-3xl md:text-4xl font-bold text-olive shadow-sm transition-transform duration-300 group-hover:scale-105"
                        >
                          {step.number}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <h3 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="flex flex-col pt-20 border-t border-black/5">
                <div className="mb-2">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-black">
                    Perguntas Frequentes
                  </h2>
                </div>

                <div className="flex flex-col">
                  {faqItems.map((item, index) => (
                    <details
                      key={index}
                      className="group py-8 border-b border-black/10"
                      open={openFAQ === index}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFAQ(index);
                      }}
                    >
                      <summary className="flex justify-between items-start cursor-pointer list-none outline-none [&::-webkit-details-marker]:hidden gap-4">
                        <span className="text-2xl md:text-3xl font-medium text-black/90 group-hover:text-olive transition-colors leading-tight">
                          {item.question}
                        </span>
                        <span
                          className={`text-olive pt-2 transform transition-transform duration-300 ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        >
                          <svg
                            width="24"
                            height="24"
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
                      <div className="mt-6 text-xl text-black/60 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
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

export default About;
