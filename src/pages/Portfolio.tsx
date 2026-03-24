import { useState, useEffect } from "react";
import LogoKather from "../assets/Images/LogoKather.webp";
import K from "../assets/Images/K.webp";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../styles/portfolio.css";
import { useLocation } from "react-router-dom";
import {
  FaPinterest,
  FaBehance,
  FaLinkedin,
  FaSpotify,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const naturalSort = ([a]: [string, unknown], [b]: [string, unknown]) => {
  const num = (s: string) => {
    const filename =
      s
        .replace(/\.[^.]+$/, "")
        .split("/")
        .pop() || "";
    if (/^0/i.test(filename) || /^capa$/i.test(filename)) return -1;
    const paren = filename.match(/\((\d+)\)/);
    if (paren) return parseInt(paren[1]);
    const last = filename.match(/(\d+)[^\d]*$/);
    return last ? parseInt(last[1]) : 999;
  };
  return num(a) - num(b);
};

const sterlane = import.meta.glob<string>(
  "/src/assets/Images/sterlane/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const sterlaneImages = Object.entries(sterlane)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Sterlane Bispo - Psicóloga Clínica - Aplicação ${index + 1}`,
  }));

const mcrone = import.meta.glob<string>(
  "/src/assets/Images/mcrone/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const mcroneImages = Object.entries(mcrone)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Minas McRone - Aplicação ${index + 1}`,
  }));

const mazamad = import.meta.glob<string>(
  "/src/assets/Images/mazamad/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const mazamadImages = Object.entries(mazamad)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `MazaMad - Aplicação ${index + 1}`,
  }));

const ana = import.meta.glob<string>(
  "/src/assets/Images/ana/*.{png,jpg,jpeg,webp,mov}",
  { eager: true, import: "default" },
);
const anaImages = Object.entries(ana)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Dr. Ana Luiza Xavier - Aplicação ${index + 1}`,
  }));

const madalie = import.meta.glob<string>(
  "/src/assets/Images/madalie/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const madalieImages = Object.entries(madalie)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Madalie - Aplicação ${index + 1}`,
  }));

const regra = import.meta.glob<string>(
  "/src/assets/Images/regra/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const regraImages = Object.entries(regra)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Regra - Aplicação ${index + 1}`,
  }));

const essenciaJeans = import.meta.glob<string>(
  "/src/assets/Images/essenciaJeans/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const essenciaJeansImages = Object.entries(essenciaJeans)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Essência Jeans - Aplicação ${index + 1}`,
  }));

const docidade = import.meta.glob<string>(
  "/src/assets/Images/docidade/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const docidadeImages = Object.entries(docidade)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Docidade - Aplicação ${index + 1}`,
  }));

const barbara = import.meta.glob<string>(
  "/src/assets/Images/barbara/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const barbaraImages = Object.entries(barbara)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Bárbara Benevenutto - Aplicação ${index + 1}`,
  }));

const maite = import.meta.glob<string>(
  "/src/assets/Images/maite/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const maiteImages = Object.entries(maite)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Maitê Ferreira - Aplicação ${index + 1}`,
  }));

const pastro = import.meta.glob<string>(
  "/src/assets/Images/pastro/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const pastroImages = Object.entries(pastro)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Pastro - Aplicação ${index + 1}`,
  }));

const prospere = import.meta.glob<string>(
  "/src/assets/Images/prospere/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const prospereImages = Object.entries(prospere)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Prospere - Aplicação ${index + 1}`,
  }));

const zadda = import.meta.glob<string>(
  "/src/assets/Images/zadda/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const zaddaImages = Object.entries(zadda)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Zadda - Aplicação ${index + 1}`,
  }));

const escolaCrianca = import.meta.glob<string>(
  "/src/assets/Images/escolaCrianca/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" },
);
const escolaCriancaImages = Object.entries(escolaCrianca)
  .sort(naturalSort)
  .map(([, img], index) => ({
    url: img,
    alt: `Escola da Criança Interior - Aplicação ${index + 1}`,
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
  {
    id: 10,
    name: "Madaliê — Acessórios de luxo",
    type: "Identidade Visual e Naming",
    year: "2025",
    location: "Goiânia, GO",
    description:
      "A identidade visual de Madalie foi criada para expressar elegância, simbolismo e sofisticação atemporal no universo dos acessórios de luxo. Inspirada no Art Nouveau e em elementos botânicos, a marca traduz delicadeza, curadoria e exclusividade. Tipografia refinada, detalhes florais e paleta em verde-musgo com tons metálicos constroem uma atmosfera de luxo discreto, onde cada peça representa presença, significado e identidade feminina.",
    coverImage: madalieImages[0]?.url,
    images: madalieImages,
  },
  {
    id: 11,
    name: "Dra. Ana Luiza Xavier - Clínica Geral & Gastroenterologia",
    type: "Identidade Visual",
    year: "2026",
    location: "Coroaci, MG",
    description:
      "A identidade visual da Dra. Ana Luiza Xavier foi desenvolvida para traduzir uma medicina mais humana, próxima e confiável. A proposta equilibra profissionalismo e acolhimento, refletindo cuidado, responsabilidade e escuta no atendimento. A paleta em tons terrosos e bordô transmite maturidade e estabilidade, enquanto a tipografia elegante e as formas orgânicas reforçam uma presença contemporânea, sensível e acessível.",
    coverImage: anaImages[0]?.url,
    images: anaImages,
  },
  {
    id: 12,
    name: "MazaMad",
    type: "Identidade Visual",
    year: "2024",
    location: "Mococa, SP",
    description:
      "A identidade visual da MazaMad foi desenvolvida para comunicar robustez, confiança e eficiência no setor industrial. A construção tipográfica geométrica e em caixa alta transmite precisão e estabilidade, enquanto a paleta em verde petróleo e laranja expressa inovação e energia. O resultado é uma marca sólida e contemporânea, alinhada ao mercado moveleiro e ao posicionamento técnico do Grupo Maza.",
    coverImage: mazamadImages[0]?.url,
    images: mazamadImages,
  },
  {
    id: 13,
    name: "Minas McRone",
    type: "Identidade Visual",
    year: "2025",
    location: "Coroaci, MG",
    description:
      "Minas McRone nasce como uma marca de bebidas que celebra Minas Gerais como território, cultura e estado de espírito. Inspirada nas paisagens e símbolos mineiros, sua identidade equilibra tradição e contemporaneidade. O sistema visual minimalista, aliado a uma paleta natural e tipografia precisa, traduz autenticidade, origem e sofisticação, permitindo sustentar diferentes rótulos e experiências com consistência e personalidade.",
    coverImage: mcroneImages[0]?.url,
    images: mcroneImages,
  },
  {
    id: 14,
    name: "Sterlane Bispo",
    type: "Identidade Visual",
    year: "2026",
    location: "Minaçu, GO",
    description:
      "A identidade visual de Sterlane Bispo foi desenvolvida para refletir sensibilidade, acolhimento e evolução pessoal no processo terapêutico. Inspirada na simbologia da natureza e da flor de lótus, a marca traduz crescimento, transformação e equilíbrio emocional. A paleta em tons terrosos e naturais reforça calma e estabilidade, enquanto a tipografia elegante comunica maturidade, escuta e cuidado no atendimento clínico.",
    coverImage: sterlaneImages[0]?.url,
    images: sterlaneImages,
  },
];

// Renderiza <video> para .mov/.mp4/.webm, e <img> para o resto
const MediaItem = ({
  url,
  alt,
  className,
  draggable,
  onClick,
}: {
  url: string;
  alt: string;
  className?: string;
  draggable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const isVideo = /\.(mov|mp4|webm)$/i.test(url);

  if (isVideo) {
    return (
      <video
        src={url}
        className={className}
        controls
        playsInline
        preload="metadata"
        onClick={onClick}
      />
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      draggable={draggable}
      onClick={onClick}
    />
  );
};

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

  useEffect(() => {
    if (!lightboxOpen || !selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === selectedProject.images.length - 1 ? 0 : prev + 1,
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? selectedProject.images.length - 1 : prev - 1,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, selectedProject]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/portfolio"
              className="group relative text-lg font-medium text-black/80 hover:text-black transition-colors"
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-offwhite z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/portfolio", label: "Portfólio" },
          { href: "/about", label: "Sobre" },
          { href: "/contact", label: "Contato" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="group relative text-4xl font-medium text-black hover:text-olive transition-colors"
          >
            {label}
            <span
              className={`absolute left-0 -bottom-2 h-1 bg-olive transition-all duration-300 ${
                location.pathname === href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </a>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <main className="pt-28 pb-10 bg-offwhite min-h-screen">
        <div className="container mx-auto px-3 md:px-6 max-w-[1400px]">
          {/* Header Card */}
          <div className="bg-[#f1f0ee] rounded-[1.5rem] px-8 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32 mb-6 md:mb-8 flex flex-col items-start text-left md:items-center md:text-center">
            <h1 className="uppercase md:text-6xl lg:text-[53px] text-[39px] font-semibold text-black leading-tight tracking-tight mb-5 md:mb-5">
              SEJA BEM-VINDO AO MEU PORTFÓLIO!
            </h1>
            <p className="text-xl md:text-2xl text-black mb-2 md:mb-0 font-regular leading-relaxed max-w-6xl">
              Este espaço está sempre em atualização, então aproveite para
              explorar, mergulhar nos conceitos e se inspirar.
            </p>
            <p className="text-xl md:text-2xl text-black font-regular leading-relaxed max-w-6xl italic">
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
                  className="relative aspect-video rounded-xl overflow-hidden bg-black/5 cursor-zoom-in"
                  onClick={() => {
                    setLightboxIndex(currentImageIndex);
                    setLightboxOpen(true);
                  }}
                >
                  <MediaItem
                    url={selectedProject.images[currentImageIndex].url}
                    alt={selectedProject.images[currentImageIndex].alt}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
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

                  {/* Dica de clique para ampliar - apenas desktop */}
                  <div className="hidden md:flex absolute bottom-14 left-1/2 -translate-x-1/2 items-center gap-2 bg-black/40 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full pointer-events-none select-none backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
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
                    Clique na imagem para ampliar
                  </div>

                  {/* Image Counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}

                  {/* Botão de ampliar - apenas desktop */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(currentImageIndex);
                      setLightboxOpen(true);
                    }}
                    className="hidden md:flex absolute top-3 right-3 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all shadow-lg"
                    aria-label="Ampliar imagem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
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
                  </button>

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

              {/* Lightbox — mobile e desktop */}
              {lightboxOpen && (
                <div
                  className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
                  onClick={() => setLightboxOpen(false)}
                >
                  {/* Botão fechar */}
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10 transition-colors"
                    aria-label="Fechar lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Contador */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm z-10 font-medium">
                    {lightboxIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Mídia */}
                  <MediaItem
                    url={selectedProject.images[lightboxIndex].url}
                    alt={selectedProject.images[lightboxIndex].alt}
                    className="max-w-full max-h-full object-contain select-none"
                    draggable={false}
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
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-colors"
                        aria-label="Imagem anterior"
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
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-colors"
                        aria-label="Próxima imagem"
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
          <p className="text-base font-medium text-black mt-1">
            © {currentYear} | Studio Kather
          </p>
          <div className="flex gap-4">
            <a
              href="https://br.pinterest.com/studiokather1/_profile/"
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
              href="https://www.tiktok.com/@katharinearaujoo?_r=1&_t=ZS-94xSOlsTPfT"
              className="text-black hover:text-olive transition-colors"
            >
              <FaTiktok className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/katharinearaujodesign/"
              className="text-black hover:text-olive transition-colors"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Portfolio;
