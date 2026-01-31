export const About = () => {
  return (
    <section
      id="about"
      className="z-20 py-16 md:py-20 lg:py-28 -mt-12 md:-mt-16 lg:-mt-45 bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-3 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-[0_6px_28px_-6px_rgba(0,0,0,0.45)] aspect-square rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop"
                alt="Designer at work"
                className="w-full h-full object-cover"
              />  
              <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative element */}
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-beige rounded-full -z-10 blur-xl opacity-60 hidden lg:block"></div> */}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 bg-white aspect-square overflow-hidden p-6 md:p-12 lg:p-16 shadow-sm flex flex-col justify-center rounded-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-[42px] font-semibold text-black leading-[1.15] mb-4 md:mb-6 tracking-tight">
              Criamos para marcas que buscam crescer e
              <span className="text-olive"> inovar.</span>
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-black/85 font-normal leading-relaxed mb-6 md:mb-8 text-balance">
              Sabemos que empresas carregam qualidades e entregas relevantes que
              podem ser trabalhadas na percepção visual da sua marca. Nosso
              processo é um mergulho profundo na essência do seu negócio.
            </p>

            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex items-start gap-3">
                <svg
                  className="text-olive text-xl mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm md:text-base text-black/80">
                  Estratégia visual fundamentada
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="text-olive text-xl mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm md:text-base text-black/80">
                  Design atemporal e funcional
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="text-olive text-xl mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm md:text-base text-black/80">
                  Acompanhamento próximo
                </span>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <a
                href="#"
                className="inline-flex items-center text-olive font-medium text-sm md:text-base hover:underline decoration-1 underline-offset-4 transition-all"
              >
                Conhecer mais sobre nosso processo
                <svg
                  className="ml-2 w-4 h-4 md:w-5 md:h-5"
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
    </section>
  );
};
