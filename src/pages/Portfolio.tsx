import { useState, useEffect } from "react";
import LogoKather from "../assets/Images/LogoKather.png";
import K from "../assets/Images/K.png";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../styles/portfolio.css";
import { useLocation } from "react-router-dom";
import {
  FaPinterest,
  FaBehance,
  FaLinkedin,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const regra = import.meta.glob<string>(
  "/src/assets/Images/regra/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const regraImages = Object.values(regra).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`,
}));

const essenciaJeans = import.meta.glob<string>(
  "/src/assets/Images/essenciaJeans/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const essenciaJeansImages = Object.values(essenciaJeans).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`,
}));

const docidade = import.meta.glob<string>(
  "/src/assets/Images/docidade/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const docidadeImages = Object.values(docidade).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`,
}));

const barbara = import.meta.glob<string>(
  "/src/assets/Images/barbara/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const barbaraImages = Object.values(barbara).map((img, index) => ({
  url: img,
  alt: `Bárbara Benevenutto - Aplicação ${index + 1}`,
}));

const maite = import.meta.glob<string>(
  "/src/assets/Images/maite/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const maiteImages = Object.values(maite).map((img, index) => ({
  url: img,
  alt: `Escola da Crinaça Interior - Aplicação ${index + 1}`,
}));

const pastro = import.meta.glob<string>(
  "/src/assets/Images/pastro/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const pastroImages = Object.values(pastro).map((img, index) => ({
  url: img,
  alt: `Escola da Crinaça Interior - Aplicação ${index + 1}`,
}));

const prospere = import.meta.glob<string>(
  "/src/assets/Images/prospere/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const prospereImages = Object.values(prospere).map((img, index) => ({
  url: img,
  alt: `Escola da Crinaça Interior - Aplicação ${index + 1}`,
}));

const zadda = import.meta.glob<string>(
  "/src/assets/Images/zadda/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const zaddaImages = Object.values(zadda).map((img, index) => ({
  url: img,
  alt: `Escola da Crinaça Interior - Aplicação ${index + 1}`,
}));

const escolaCrianca = import.meta.glob<string>(
  "/src/assets/Images/escolaCrianca/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);
const escolaCriancaImages = Object.values(escolaCrianca).map((img, index) => ({
  url: img,
  alt: `Escola da Crinaça Interior - Aplicação ${index + 1}`,
}));

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  id: number;
  name: string;
  type: string;
  year: string;
  location: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "Escola da Criança Interior",
    type: "Identidade Visual",
    year: "2025",
    location: "Poços de Caldas, MG",
    description:
      "A identidade visual da Escola da Criança Interior foi criada para comunicar acolhimento emocional, sensibilidade e desenvolvimento humano. O projeto traduz a jornada terapêutica através de elementos suaves e simbólicos, conectando infância, autoconhecimento e evolução pessoal. Uma marca que equilibra ludicidade e profundidade com estética contemporânea.",
    coverImage: escolaCriancaImages[0]?.url,
    images: escolaCriancaImages,
  },
  {
    id: 2,
    name: "Bárbara Benevenutto",
    type: "Identidade Visual",
    year: "2025",
    location: "Brasília, DF",
    description:
      "A identidade visual de Bárbara Benevenutto foi construída para equilibrar sofisticação, maturidade e acolhimento, traduzindo uma atuação psicológica ética e sensível. O projeto buscou transmitir confiança para um público exigente, sem perder a leveza do cuidado terapêutico. Elementos visuais elegantes e atemporais reforçam profissionalismo, posicionamento estratégico e presença digital consistente.",
    coverImage: barbaraImages[0]?.url,
    images: barbaraImages,
  },
  {
    id: 3,
    name: "Docidade",
    type: "Identidade Visual e Naming",
    year: "2026",
    location: "Coroaci, MG",
    description:
      "Docidade nasceu a partir de uma história afetiva e familiar, transformando memória e emoção em identidade visual. O projeto foi desenvolvido para transmitir delicadeza, proximidade e autenticidade, valorizando o artesanal e o cuidado em cada detalhe. A estética combina leveza e personalidade, criando uma marca doce, acolhedora e cheia de significado.",
    coverImage: docidadeImages[0]?.url,
    images: docidadeImages,
  },
  {
    id: 4,
    name: "Essência Jeans",
    type: "Identidade Visual",
    year: "2025",
    location: "Coroaci, MG",
    description:
      "Essência Jeans teve sua identidade desenvolvida para unir autenticidade, estilo urbano e força feminina. O projeto buscou transmitir atitude e identidade própria, valorizando a expressão individual através da moda. A construção visual traz presença, modernidade e versatilidade, posicionando a marca de forma marcante e atual.",
    coverImage: essenciaJeansImages[0]?.url,
    images: essenciaJeansImages,
  },
  {
    id: 5,
    name: "Regra",
    type: "Identidade Visual",
    year: "2025",
    location: "Governador Valadares, MG",
    description:
      "REGRA Produtora teve sua identidade visual criada para transmitir autoridade criativa, organização e direção estratégica. O projeto equilibra impacto visual e clareza conceitual, posicionando a marca como referência em produção e comunicação. A construção estética reforça ritmo, movimento e presença forte no mercado",
    coverImage: regraImages[0]?.url,
    images: regraImages,
  },
  {
    id: 6,
    name: "Maitê Ferreira",
    type: "Identidade Visual",
    year: "2025",
    location: "Campinas, SP",
    description:
      "A identidade visual de Maitê Ferreira foi pensada para expressar liberdade, intuição e ousadia dentro do universo clínico. O projeto conecta espiritualidade, escuta crítica e sofisticação contemporânea, criando uma marca sensível e forte ao mesmo tempo. Elementos orgânicos e elegantes reforçam um posicionamento autêntico e profundo.",
    coverImage: maiteImages[0]?.url,
    images: maiteImages,
  },
  {
    id: 7,
    name: "Pastro",
    type: "Identidade Visual e Naming",
    year: "2025",
    location: "Jundiaí, SP",
    description:
      "A marca Pastro nasceu do desafio de unir diferentes áreas da saúde em uma identidade única e estratégica. O projeto foi desenvolvido para transmitir clareza, confiança e inovação, equilibrando ciência e humanidade. A estética visual reforça profissionalismo e integração, criando uma presença sólida e memorável.",
    coverImage: pastroImages[0]?.url,
    images: pastroImages,
  },
  {
    id: 8,
    name: "Prospere",
    type: "Identidade Visual",
    year: "2024",
    location: "Coroaci, MG",
    description:
      "A Prospere Odontologia Especializada, fundada pelo casal de dentistas Marcelle Moura e João Pedro, transforma sorrisos e vidas com excelência e atendimento humanizado. Oferecem tratamentos odontológicos e estéticos personalizados, combinando tecnologia com cuidado acolhedor. Seu compromisso é proporcionar bem-estar e autoestima, tornando-se a escolha preferida para quem busca qualidade e inovação em saúde bucal e estética facial.",
    coverImage: prospereImages[0]?.url,
    images: prospereImages,
  },
  {
    id: 9,
    name: "Zadda - Beleza e Saúde",
    type: "Identidade Visual e Naming",
    year: "2026",
    location: "Engenheiro Caldas, MG",
    description:
      "Zadda foi desenvolvida para expressar personalidade, beleza e atitude com identidade marcante. O projeto visual valoriza força feminina, estilo contemporâneo e presença estética refinada. A marca ganha destaque através de elementos visuais expressivos, criando conexão direta com o público e posicionamento autêntico.",
    coverImage: zaddaImages[0]?.url,
    images: zaddaImages,
  },
];

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isMenuOpen || selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen, selectedProject]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1,
      );
    }
  };

  return (
    <>
      {/* Custom Cursor */}
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
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="group relative text-lg font-semibold text-black/80 hover:text-black transition-colors"
            >
              Sobre
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
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
      <main className="pt-28 pb-10 bg-offwhite min-h-screen">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {/* Header Card */}
          <div className="bg-beige/40 rounded-[1.5rem] p-8 md:p-12 lg:p-16 mb-6 md:mb-8">
            <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight tracking-tight mb-5 md:mb-3">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-3 md:mb-2 font-light leading-relaxed">
              Seja bem-vindo ao meu portfólio!
            </p>
            <br />
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-3 md:mb-2 font-light leading-relaxed lg:wrap-break-word lg:max-w-140">
              Este espaço está sempre em atualização, então aproveite para
              explorar, mergulhar nos conceitos e se inspirar.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 font-light leading-relaxed lg:wrap-break-word lg:max-w-140">
              Quem sabe a sua marca não aparece por aqui também?
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                className="group relative w-full aspect-square overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out rounded-[1.5rem]"
              >
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                {/* Desktop Hover Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
                  <h3 className="text-offwhite text-2xl lg:text-3xl font-semibold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.name}
                  </h3>
                  <span className="text-beige text-sm lg:text-base font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Clique para abrir
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="bg-offwhite rounded-[1.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="sticky top-4 right-4 float-right z-10 bg-olive text-white p-2 rounded-full hover:bg-olive/80 transition-colors shadow-lg"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8 lg:p-12">
              {/* Project Info */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
                  {selectedProject.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-olive uppercase tracking-wider mb-1">
                      Tipo
                    </p>
                    <p className="text-base text-black/80">
                      {selectedProject.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-olive uppercase tracking-wider mb-1">
                      Ano
                    </p>
                    <p className="text-base text-black/80">
                      {selectedProject.year}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-semibold text-olive uppercase tracking-wider mb-1">
                      Localização
                    </p>
                    <p className="text-base text-black/80">
                      {selectedProject.location}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-olive uppercase tracking-wider mb-2">
                    Descrição
                  </p>
                  <p className="text-base md:text-lg text-black/70 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div
                  className="relative aspect-video rounded-xl overflow-hidden bg-black/5 md:cursor-default cursor-zoom-in"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setLightboxIndex(currentImageIndex);
                      setLightboxOpen(true);
                    }
                  }}
                >
                  <img
                    src={selectedProject.images[currentImageIndex].url}
                    alt={selectedProject.images[currentImageIndex].alt}
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />

                  {/* Navigation Arrows - apenas desktop */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all shadow-lg"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all shadow-lg"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}

                  {/* Ícone de toque - apenas mobile */}
                  <div className="md:hidden absolute top-3 right-3 bg-black/50 text-white p-1.5 rounded-full pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Thumbnail Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-olive w-8"
                            : "bg-black/30 hover:bg-black/50"
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Lightbox Mobile */}
              {lightboxOpen && (
                <div
                  className="md:hidden fixed inset-0 bg-black z-[60] flex items-center justify-center"
                  onClick={() => setLightboxOpen(false)}
                >
                  {/* Botão fechar */}
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Contador */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm z-10">
                    {lightboxIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Imagem */}
                  <img
                    src={selectedProject.images[lightboxIndex].url}
                    alt={selectedProject.images[lightboxIndex].alt}
                    className="max-w-full max-h-full object-contain select-none"
                    draggable="false"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Setas de navegação */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) =>
                            prev === 0
                              ? selectedProject.images.length - 1
                              : prev - 1,
                          );
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full"
                      >
                        <ChevronLeft className="w-7 h-7" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex((prev) =>
                            prev === selectedProject.images.length - 1
                              ? 0
                              : prev + 1,
                          );
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full"
                      >
                        <ChevronRight className="w-7 h-7" />
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-6 bg-offwhite text-black">
        <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="/"
            className="text-lg md:text-xl font-semibold tracking-tight text-black md:mb-2"
          >
            <img
              src={LogoKather}
              alt="Studio Kather"
              className="h-7 w-auto ml-3 md:ml-0"
            />
          </a>

          <p className="text-base font-bold text-black mt-1">
            © {currentYear} | Studio Kather
          </p>

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

export default Portfolio;
