export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-32 bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 w-full">
        <div className="p-6 md:p-8 lg:p-10 shadow-lg relative border border-gray-100 mx-auto bg-white rounded-3xl min-h-[500px] md:min-h-[550px] lg:min-h-[650px] -mt-12 md:-mt-16 lg:-mt-70">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Text Content */}
            <div
              className="flex flex-col justify-center items-start"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight tracking-tight text-left">
                Design fala quando
                <br />
                palavras não são
                <span className="italic text-olive"> suficientes.</span>
              </h1>
              <p
                className="mt-3 text-sm md:text-base text-black/70 font-normal max-w-md leading-relaxed text-left"
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
                className="mt-6"
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
              className="relative flex items-center justify-center"
              style={{
                opacity: 0,
                animation: "slideInRight 1s ease-out 0.6s forwards",
              }}
            >
              <div className="relative w-full aspect-square max-w-xs lg:max-w-sm">
                <div className="absolute inset-0 bg-white hero-image-3d overflow-hidden border border-gray-100 rounded-2xl">
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
      </div>
    </section>
  );
};
