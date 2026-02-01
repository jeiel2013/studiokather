import FundoHero from "../../assets/Images/FundoHero.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-24 lg:pt-32 bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 w-full">
        <div className="shadow-lg relative border border-gray-100 mx-auto rounded-3xl min-h-[700px] md:min-h-[550px] lg:min-h-[650px] -mt-25 md:-mt-16 lg:-mt-70 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={FundoHero}
              alt="Brand Identity Background"
              className="w-full h-full object-cover object-[39%_70%] md:object-center"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 lg:p-10 lg:mt-15 h-full flex items-center">
            <div
              className="flex flex-col justify-center items-start max-w-lg mt-16 md:mt-0"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              }}
            >
              <h1 className="text-[40px] md:text-3xl lg:text-5xl font-semibold text-black leading-tight tracking-tight text-left">
                Está na hora de
                <br />
                <span className="text-offwhite">mudar a forma</span> como
                <br />
                seus clientes enxergam
                <br />
                <span className="italic text-offwhite"> sua marca</span>
              </h1>
              <p
                className="mt-3 text-[19px] md:text-xl text-black font-normal max-w-md leading-relaxed text-left"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.5s forwards",
                }}
              >
                Vamos mostrar o seu profissionalismo, eficiência e valores em
                uma identidade visual não apenas bonita, mas fundamentada em um
                conceito sólido e duradouro.
              </p>
              <div
                className="mt-6"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.8s forwards",
                }}
              >
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 border-2 border-offwhite rounded-full text-offwhite text-lg md:text-base font-medium transition-all duration-300 hover:bg-offwhite hover:text-black"
                >
                  Como trabalhamos?
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </div>
    </section>
  );
};
