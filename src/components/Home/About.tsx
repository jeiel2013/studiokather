export const About = () => {
  return (
    <section
      id="about"
      className="z-20 py-16 md:py-20 lg:py-28 -mt-28 md:-mt-16 lg:-mt-45 bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-3 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-[0_6px_28px_-6px_rgba(0,0,0,0.45)] aspect-square rounded-2xl">
              <img
                src="src\assets\Images\About.jpg"
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative element */}
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-beige rounded-full -z-10 blur-xl opacity-60 hidden lg:block"></div> */}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 bg-olive aspect-square overflow-hidden p-8 md:p-12 lg:p-16 shadow-sm flex flex-col justify-center rounded-2xl">
            <h2 className="text-[44px] md:text-6xl lg:text-[60px] font-semibold text-black leading-[1.15] mb-6 md:mb-6 tracking-tight">
              <span className="text-beige">Acredito</span> que sua marca é o
              que ela transmite
            </h2>
            <p className="text-[20px] md:text-[22px] lg:text-2xl text-black/85 font-regular leading-relaxed text-balance mt-1 lg:mt-4">
              A identidade visual é tudo o que o cliente vê e percebe sobre sua
              marca, tanto nos meios digitais quanto no offline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
