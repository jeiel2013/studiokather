import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-offwhite/90 backdrop-blur-md shadow-sm py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-semibold tracking-tight text-black relative z-50"
          >
            CAMILA
            <span className="text-olive">DESIGN</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#home"
              className="group relative text-lg font-semibold text-black hover:text-olive transition-colors duration-300"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-olive transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="group relative text-lg font-medium text-black hover:text-olive transition-colors duration-300"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#portfolio"
              className="group relative text-lg font-medium text-black hover:text-olive transition-colors duration-300"
            >
              Portfólio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="group relative text-lg font-medium text-black hover:text-olive transition-colors duration-300"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-btn"
            className="md:hidden z-50 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Icon icon="solar:close-circle-linear" width="28" />
            ) : (
              <Icon icon="solar:hamburger-menu-linear" width="28" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-offwhite z-40 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          <a
            href="#home"
            className="text-2xl font-medium text-black hover:text-olive"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-2xl font-medium text-black hover:text-olive"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#portfolio"
            className="text-2xl font-medium text-black hover:text-olive"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfólio
          </a>
          <a
            href="#contact"
            className="text-2xl font-medium text-black hover:text-olive"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </>
  );
};
