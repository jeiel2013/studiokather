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

const regra = import.meta.glob<string>('/src/assets/Images/regra/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});
const regraImages = Object.values(regra).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`
}));

const essenciaJeans = import.meta.glob<string>('/src/assets/Images/essenciaJeans/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});
const essenciaJeansImages = Object.values(essenciaJeans).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`
}));

const docidade = import.meta.glob<string>('/src/assets/Images/docidade/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});
const docidadeImages = Object.values(docidade).map((img, index) => ({
  url: img,
  alt: `Docidade - Aplicação ${index + 1}`
}));

const barbara = import.meta.glob<string>('/src/assets/Images/barbara/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});
const barbaraImages = Object.values(barbara).map((img, index) => ({
  url: img,
  alt: `Bárbara Benevenutto - Aplicação ${index + 1}`
}));

const lavoy = import.meta.glob<string>('/src/assets/Images/lavoy/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
});
const lavoyImages = Object.values(lavoy).map((img, index) => ({
  url: img,
  alt: `LaVoy - Aplicação ${index + 1}`
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
    name: "LaVoy",
    type: "Identidade Visual",
    year: "2025",
    location: "Coroaci, MG",
    description:
      "A identidade visual da LaVoy foi construída a partir dos pilares da autenticidade, liberdade e sofisticação sutil. Mais do que uma marca de acessórios, LaVoy representa uma experiência que valoriza o cotidiano e desperta a essência única de cada mulher.",
    coverImage:
      lavoyImages[0]?.url,
    images: lavoyImages
  },
  {
    id: 2,
    name: "Bárbara Benevenutto",
    type: "Identidade Visual",
    year: "2025",
    location: "XXXXXX, XX",
    description:
      "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
    coverImage: barbaraImages[0]?.url,
    images: barbaraImages
  },
  {
    id: 3,
    name: "Docidade",
    type: "Identidade Visual",
    year: "202X",
    location: "Coroaci, MG",
    description:
      "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
    coverImage: docidadeImages[0]?.url,
    images: docidadeImages
  },
  {
    id: 4,
    name: "Essência Jeans",
    type: "Identidade Visual",
    year: "202X",
    location: "XXXXXXXX, XX",
    description:
      "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
    coverImage: essenciaJeansImages[0]?.url,
    images: essenciaJeansImages
  },
  {
    id: 5,
    name: "Regra",
    type: "Identidade Visual",
    year: "202X",
    location: "XXXXXXX, XX",
    description:
      "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
    coverImage: regraImages[0]?.url,
    images: regraImages
  },
  {
    id: 6,
    name: "Kinetic",
    type: "Brand Strategy",
    year: "2024",
    location: "Belo Horizonte, MG",
    description:
      "Estratégia de marca completa para academia boutique. Posicionamento premium e comunicação visual impactante.",
    coverImage:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    images: [
      {
        url: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
        alt: "Kinetic - Brand Strategy",
      },
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
        alt: "Kinetic - Academia",
      },
    ],
  },
  {
    id: 7,
    name: "Verde Café",
    type: "Identidade Visual",
    year: "2023",
    location: "Porto Alegre, RS",
    description:
      "Identidade visual para cafeteria sustentável. Design orgânico refletindo os valores ecológicos da marca.",
    coverImage:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop",
        alt: "Verde Café - Identidade",
      },
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop",
        alt: "Verde Café - Interior",
      },
    ],
  },
  {
    id: 8,
    name: "Stellar Labs",
    type: "Brand Identity",
    year: "2024",
    location: "Brasília, DF",
    description:
      "Criação de marca para laboratório de inovação. Identidade futurista com elementos tecnológicos.",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        alt: "Stellar Labs - Identity",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        alt: "Stellar Labs - Tech",
      },
    ],
  },
  {
    id: 9,
    name: "Artisan Bakery",
    type: "Packaging & Branding",
    year: "2023",
    location: "Salvador, BA",
    description:
      "Identidade e embalagens para padaria artesanal. Design rústico-moderno que valoriza o produto local.",
    coverImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop",
        alt: "Artisan Bakery - Branding",
      },
      {
        url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1600&auto=format&fit=crop",
        alt: "Artisan Bakery - Produtos",
      },
    ],
  },
];

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight tracking-tight mb-5 md:mb-3">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-3 md:mb-2 font-light leading-relaxed">
              Seja bem-vindo ao meu portfólio!
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 mb-3 md:mb-2 font-light leading-relaxed">
              Este espaço está sempre em atualização, então aproveite para
              explorar, mergulhar nos conceitos e se inspirar.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-black/80 font-light leading-relaxed">
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

              {/* Image Carousel - SEM SWIPE */}
              <div className="relative">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/5">
                  <img
                    src={selectedProject.images[currentImageIndex].url}
                    alt={selectedProject.images[currentImageIndex].alt}
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all shadow-lg"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all shadow-lg"
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
