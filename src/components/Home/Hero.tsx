export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-offwhite"
    >
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10 w-full">
        <div className="p-6 md:p-12 lg:p-16 shadow-2xl relative border border-white/20 max-w-6xl mx-auto -translate-y-6 lg:-translate-y-12 bg-white rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div
              className="lg:col-span-7 flex flex-col justify-center"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] font-semibold text-black leading-[1.1] tracking-tight text-balance">
                Design fala quando
                <br />
                palavras não são
                <span className="italic font-serif text-olive">
                  {" "}
                  suficientes.
                </span>
              </h1>
              <p
                className="mt-6 text-base md:text-lg text-black/80 font-normal max-w-xl leading-relaxed"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.5s forwards",
                }}
              >
                Marcas que crescem são aquelas que investem em design,
                especialmente na identidade visual. Transformamos essência em
                percepção.
              </p>
              <div
                className="mt-8"
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.8s forwards",
                }}
              >
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 border-2 border-olive rounded-full text-olive text-sm md:text-base font-medium transition-all duration-300 hover:bg-olive hover:text-offwhite"
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

            {/* Image */}
            <div
              className="lg:col-span-5 relative h-full flex items-center justify-center"
              style={{
                opacity: 0,
                animation: "slideInRight 1s ease-out 0.6s forwards",
              }}
            >
              <div className="relative w-full aspect-square max-w-[500px]">
                <div className="absolute inset-0 bg-white hero-image-3d overflow-hidden border border-black/5 rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                    alt="Brand Identity Mockup"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-black">
                          Identidade Premium
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Projeto Recente
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#portfolio"
            className="text-olive opacity-60 hover:opacity-100 transition-opacity"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v8m0 0l-3-3m3 3l3-3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
