export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 -mt-28 md:-mt-16 lg:-mt-45 overflow-hidden bg-offwhite text-black z-10"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-3 items-center">
          {/* Text Card */}
          <div className="bg-beige p-8 md:p-12 lg:p-16 shadow-lg aspect-square flex flex-col justify-center items-start rounded-2xl">
            <h2 className="text-5xl md:text-4xl lg:text-6xl font-semibold tracking-tight mb-6 md:mb-6 text-black">
              Marcas sem identidade visual passam{" "}
              <span className="text-white">despercebidas</span>
            </h2>
            <p className="text-[18px] md:text-base lg:text-xl font-regular leading-relaxed mb-8 md:mb-10 text-black">
              Agende uma conversa comigo. Estou disposta a entender sobre sua
              marca para oferecer uma solução eficiente e criativa.
            </p>
            <a
              href="#"
              className="inline-block bg-olive text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-[#5d7b32] hover:text-black hover:scale-105 shadow-lg shadow-olive/20"
            >
              Agendar Call
            </a>
          </div>

          {/* Image Card - Hidden on mobile */}
          <div className="hidden lg:block relative w-full aspect-square overflow-hidden shadow-lg rounded-2xl">
            <img
              src="src\assets\Images\Contact.jpg"
              alt="Creative Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
