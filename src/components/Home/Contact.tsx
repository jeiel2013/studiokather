import ImageContact from "../../assets/Images/Contact.jpg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 
      min-[768px]:py-20 
      min-[820px]:py-20
      min-[853px]:py-22
      min-[912px]:py-22
      lg:py-24 
      -mt-28 
      min-[540px]:-mt-27
      min-[768px]:-mt-34 
      min-[820px]:-mt-36
      min-[853px]:-mt-40
      min-[912px]:-mt-38
      min-[1024px]:-mt-45
      min-[1280px]:-mt-45
      overflow-hidden bg-offwhite text-black z-10"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-20 w-full">
        <div
          className="grid 
        grid-cols-1 
        min-[1024px]:grid-cols-2
        min-[1280px]:grid-cols-2
        gap-6 
        lg:gap-8 
        xl:gap-3 
        items-center"
        >
          {/* Text Card */}
          <div
            className="bg-beige 
          p-8 
          min-[768px]:p-12 
          min-[820px]:p-14
          min-[853px]:p-16
          min-[912px]:p-16
          lg:p-16
          shadow-lg aspect-square flex flex-col justify-center items-start rounded-2xl"
          >
            <h2
              className="font-semibold tracking-tight 
            mb-6 
            min-[768px]:mb-6 
            min-[1024px]:mb-6
            text-black
            text-5xl
            min-[1024px]:-mt-13
            min-[344px]:text-4xl
            min-[360px]:text-4xl
            min-[412px]:text-5xl
            min-[430px]:text-5xl
            min-[540px]:text-4xl
            min-[768px]:text-7xl 
            min-[820px]:text-[80px]
            min-[853px]:text-[85px]
            min-[912px]:text-[90px]
            min-[1024px]:text-5xl
            min-[1280px]:text-6xl"
            >
              Marcas sem identidade visual passam{" "}
              <span className="text-white">despercebidas</span>
            </h2>
            <p
              className="font-regular leading-relaxed 
            mb-8 
            min-[768px]:mb-10 
            text-black
            text-[18px]
            min-[344px]:text-[16px]
            min-[360px]:text-[15px]
            min-[540px]:text-[16px]
            min-[768px]:text-2xl 
            min-[820px]:text-[26px]
            min-[853px]:text-[28px]
            min-[912px]:text-[30px]
            min-[1024px]:text-[19px]
            min-[1280px]:text-xl"
            >
              Agende uma conversa comigo. Estou disposta a entender sobre sua
              marca para oferecer uma solução eficiente e criativa.
            </p>
            <a
              href="#"
              className="inline-block bg-olive text-white 
              px-8 py-3
              min-[768px]:px-10 min-[768px]:py-4 
              min-[820px]:px-11 min-[820px]:py-4
              min-[853px]:px-12 min-[853px]:py-5
              min-[912px]:px-12 min-[912px]:py-5
              min-[1024px]:px-10 min-[1024px]:py-4
              rounded-full 
              font-medium 
              text-base
              min-[360px]:text-sm
              min-[412px]:text-lg
              min-[430px]:text-lg
              min-[540px]:text-sm
              min-[768px]:text-xl 
              min-[820px]:text-2xl
              min-[853px]:text-2xl
              min-[912px]:text-3xl
              min-[1024px]:text-[20px]
              min-[1024px]:-mb-13
              min-[1024px]:-mt-2
              transition-all duration-300 hover:bg-[#5d7b32] 
              hover:text-black hover:scale-105 shadow-lg shadow-olive/20"
            >
              Agendar Call
            </a>
          </div>

          {/* Image Card - Visible apenas em desktop 1024px+ */}
          <div
            className="hidden 
          lg:block 
          relative w-full aspect-square overflow-hidden shadow-lg rounded-2xl"
          >
            <img
              src={ImageContact}
              alt="Creative Process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
