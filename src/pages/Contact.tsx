import { useState, useEffect } from "react";
import LogoKather from "../assets/Images/LogoKather.png";
import K from "../assets/Images/K.png";
import "../styles/contact.css";
import {
  FaPinterest,
  FaBehance,
  FaLinkedin,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const currentYear = new Date().getFullYear();

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const questions = [
  {
    id: "name",
    question: "Como você gostaria de ser chamado (a)?",
    placeholder: "Responda aqui...",
    type: "text",
  },
  {
    id: "email",
    question: "Qual é o seu e-mail?",
    placeholder: "seuemail@exemplo.com",
    type: "email",
  },
  {
    id: "phone",
    question: "Qual é o seu telefone/WhatsApp?",
    placeholder: "(00) 00000-0000",
    type: "tel",
  },
  {
    id: "projectType",
    question: "Qual tipo de projeto você precisa?",
    placeholder: "Ex: Identidade Visual, Rebranding, Web Design...",
    type: "text",
  },
  {
    id: "budget",
    question: "Qual é o seu orçamento aproximado?",
    placeholder: "Ex: R$ 5.000 - R$ 10.000",
    type: "text",
  },
  {
    id: "timeline",
    question: "Qual é o prazo desejado para o projeto?",
    placeholder: "Ex: 2 meses, urgente, flexível...",
    type: "text",
  },
  {
    id: "message",
    question: "Conte-nos mais sobre o seu projeto",
    placeholder: "Descreva brevemente o que você precisa...",
    type: "textarea",
  },
];

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 585, y: 10 });
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const location = useLocation();

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

  const handleNext = () => {
    if (!currentAnswer.trim()) return;

    const currentQuestion = questions[currentStep];
    setFormData({
      ...formData,
      [currentQuestion.id]: currentAnswer,
    });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentAnswer("");
    } else {
      handleSubmit();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && questions[currentStep].type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = () => {
    // Aqui você pode integrar com sua API ou serviço de e-mail
    console.log("Form Data:", { ...formData, message: currentAnswer });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setCurrentAnswer("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitted(false);
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
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
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
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-olive transition-all duration-300 group-hover:w-full"></span>
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
          href="#contact"
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
      <main className="pt-28 lg:pt-40 pb-10 lg:-mb-21 bg-offwhite min-h-screen">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {/* Text Card */}
            <div className="bg-olive shadow-sm rounded-[1.5rem] p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-[600px]">
              <h1 className="text-[40px] md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
                Vamos conhecer seus desafios.
              </h1>
              <p className="text-lg md:text-xl text-offwhite font-light leading-relaxed">
                Preencha a solicitação para que possamos agendar um horário e
                conversarmos sobre seu projeto. Se preferir, nos envie um e-mail
                para{" "}
                <a
                  href="mailto:ola@studiokather.com.br"
                  className="text-olive font-medium hover:underline transition-all"
                >
                  ola@studiokather.com.br
                </a>
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white shadow-sm rounded-[1.5rem] p-8 md:p-10 lg:p-12 min-h-[400px] lg:min-h-[600px] flex flex-col justify-center">
              {!isSubmitted ? (
                <div className="space-y-6">
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mb-8">
                    {questions.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          index <= currentStep ? "bg-olive" : "bg-black/10"
                        }`}
                      ></div>
                    ))}
                  </div>

                  {/* Question */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-olive/10 flex items-center justify-center text-olive text-sm font-semibold mt-1">
                        {currentStep + 1}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-medium text-black leading-tight">
                        {questions[currentStep].question}
                        {questions[currentStep].id === "name" && (
                          <span className="text-olive">*</span>
                        )}
                      </h2>
                    </div>

                    {/* Answer Input */}
                    <div className="pl-9">
                      {questions[currentStep].type === "textarea" ? (
                        <textarea
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          placeholder={questions[currentStep].placeholder}
                          className="w-full px-0 py-3 text-lg text-black placeholder:text-black/40 bg-transparent border-b-2 border-black/20 focus:border-olive outline-none transition-colors resize-none"
                          rows={4}
                          autoFocus
                        />
                      ) : (
                        <input
                          type={questions[currentStep].type}
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={questions[currentStep].placeholder}
                          className="w-full px-0 py-3 text-lg text-black placeholder:text-black/40 bg-transparent border-b-2 border-black/20 focus:border-olive outline-none transition-colors"
                          autoFocus
                        />
                      )}

                      {/* OK Button */}
                      <button
                        onClick={handleNext}
                        disabled={!currentAnswer.trim()}
                        className="mt-6 px-8 py-3 bg-black text-white rounded-full font-medium text-base hover:bg-olive transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-black"
                      >
                        {currentStep === questions.length - 1 ? "Enviar" : "OK"}
                      </button>
                    </div>
                  </div>

                  {/* Navigation Hint */}
                  <p className="text-sm text-black/50 pl-9 mt-4">
                    Pressione{" "}
                    <kbd className="px-2 py-1 bg-black/5 rounded">Enter ↵</kbd>{" "}
                    ou clique em OK
                  </p>
                </div>
              ) : (
                // Success Message
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-10 h-10 text-olive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-black">
                    Mensagem enviada!
                  </h2>
                  <p className="text-lg text-black/70">
                    Obrigado pelo contato. Retornaremos em breve para agendar
                    uma conversa sobre seu projeto.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 px-8 py-3 bg-olive text-white rounded-full font-medium text-base hover:bg-olive/80 transition-all duration-300"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

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

export default Contact;
