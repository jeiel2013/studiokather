export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-20 lg:py-28 overflow-hidden bg-offwhite text-black"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 items-center">
          {/* Text Card */}
          <div className="bg-white p-8 md:p-10 lg:p-12 shadow-lg aspect-square flex flex-col justify-center items-start rounded-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tight mb-4 md:mb-6 text-black">
              Precisa de um projeto?
            </h2>
            <p className="text-sm md:text-base lg:text-base font-light leading-relaxed mb-8 md:mb-10 text-black/60">
              Agende uma conversa com nossa equipe. Estamos dispostos a entender
              sobre sua marca para oferecer uma solução eficiente e criativa.
            </p>
            <a
              href="#"
              className="inline-block bg-olive text-offwhite px-8 md:px-10 py-3 md:py-4 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:bg-[#5d7b32] hover:scale-105 shadow-lg shadow-olive/20"
            >
              Agendar Call
            </a>
          </div>

          {/* Image Card */}
          <div className="relative w-full aspect-square overflow-hidden shadow-lg rounded-3xl">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
              alt="Creative Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
