import ImageAbout from "../../assets/Images/About.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="z-20 
      py-16 
      min-[768px]:py-20 
      min-[820px]:py-20
      min-[853px]:py-22
      min-[912px]:py-22
      lg:py-28 
      -mt-28 
      min-[540px]:-mt-27
      min-[768px]:-mt-34 
      min-[820px]:-mt-36
      min-[853px]:-mt-40
      min-[912px]:-mt-36
      min-[1024px]:-mt-45
      min-[1280px]:-mt-45
      bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full">
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
          {/* Image */}
          <div
            className="relative 
          order-2 
          lg:order-1"
          >
            <div className="relative overflow-hidden shadow-[0_6px_28px_-6px_rgba(0,0,0,0.45)] aspect-square rounded-2xl">
              <img
                src={ImageAbout}
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-olive/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Content */}
          <div
            className="order-1 
          lg:order-2 
          bg-olive aspect-square overflow-hidden 
          p-8 
          min-[768px]:p-12 
          min-[820px]:p-14
          min-[853px]:p-16
          min-[912px]:p-16
          lg:p-16 
          shadow-sm flex flex-col justify-center rounded-2xl"
          >
            <h2
              className="font-semibold text-black leading-[1.15] 
            mb-6 
            min-[768px]:mb-6 
            tracking-tight
            text-[44px]
            min-[344px]:text-[34px]
            min-[360px]:text-[36px]
            min-[390px]:text-[39px]
            min-[412px]:text-[41px]
            min-[414px]:text-[41px]
            min-[430px]:text-[43px]
            min-[540px]:text-[38px]
            min-[768px]:text-[75px] 
            min-[820px]:text-[85px]
            min-[853px]:text-[90px]
            min-[912px]:text-[95px]
            min-[1024px]:text-[52px]
            min-[1280px]:text-[60px]"
            >
              <span className="text-beige">Acredito</span> que sua marca é o que
              ela transmite
            </h2>
            <p
              className="text-black/85 font-regular leading-relaxed text-balance 
            mt-1 
            lg:mt-4
            text-[20px]
            min-[344px]:text-[16px]
            min-[360px]:text-[15px]
            min-[390px]:text-[16px]
            min-[412px]:text-[17px]
            min-[414px]:text-[17px]
            min-[430px]:text-[18px]
            min-[540px]:text-[18px]
            min-[768px]:text-[25px] 
            min-[820px]:text-[30px]
            min-[853px]:text-[30px]
            min-[912px]:text-[32px]
            min-[1024px]:text-[22px]
            min-[1280px]:text-2xl
            min-[820px]:mt-14"
            >
              A identidade visual é tudo o que o cliente vê e percebe sobre sua
              marca, tanto nos meios digitais quanto no offline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
