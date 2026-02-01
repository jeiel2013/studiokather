import FundoHero from "../../assets/Images/FundoHero.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden 
      pt-16 
      min-[540px]:pt-20 
      min-[768px]:pt-24 
      min-[820px]:pt-24 
      min-[853px]:pt-24
      min-[912px]:pt-24
      lg:pt-32 
      bg-offwhite"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 w-full">
        <div
          className="shadow-lg relative border border-gray-100 mx-auto rounded-3xl 
        min-h-[700px] 
        min-[344px]:min-h-[450px]
        min-[360px]:min-h-[520px]
        min-[390px]:min-h-[630px]
        min-[412px]:min-h-[700px]
        min-[414px]:min-h-[650px]
        min-[540px]:min-h-[550px] 
        min-[768px]:min-h-[850px] 
        min-[820px]:min-h-[950px] 
        min-[853px]:min-h-[1050px]
        min-[912px]:min-h-[1200px]
        min-[1024px]:min-h-[1000px] 
        min-[1280px]:min-h-[650px]
        -mt-25 
        min-[344px]:-mt-19
        min-[360px]:-mt-33
        min-[414px]:-mt-40
        min-[540px]:-mt-20
        min-[768px]:-mt-24 
        min-[820px]:-mt-24
        min-[853px]:-mt-24
        min-[912px]:-mt-24
        lg:-mt-70 
        overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={FundoHero}
              alt="Brand Identity Background"
              className="w-full h-full object-cover 
              object-[39%_70%] 
              min-[360px]:object-[37%_70%]
              min-[414px]:object-[38%_70%]
              min-[540px]:object-[25%_70%]
              min-[768px]:object-[39%_70%] 
              min-[820px]:object-[39%_70%]
              min-[853px]:object-[39%_70%]
              min-[912px]:object-[39%_70%]
              lg:object-center"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div
            className="relative z-10 
          p-6 
          min-[540px]:p-7
          min-[768px]:p-8 
          min-[820px]:p-10
          min-[853px]:p-10
          min-[912px]:p-10
          lg:p-10 
          lg:mt-15
          min-[768px]:mt-18
          min-[820px]:mt-20
          min-[853px]:mt-24
          min-[912px]:mt-24
          h-full flex items-center"
          >
            <div
              className="flex flex-col justify-center items-start max-w-lg 
              mt-16 
              min-[360px]:mt-7
              min-[390px]:mt-8
              min-[414px]:mt-12
              min-[540px]:mt-12
              min-[768px]:mt-0 
              min-[820px]:mt-0
              min-[853px]:mt-0
              min-[912px]:mt-0"
              style={{
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.2s forwards",
              }}
            >
              <h1
                className="font-semibold text-black leading-tight tracking-tight text-left
              text-[40px]
              min-[344px]:-mt-8
              min-[344px]:text-[40px]
              min-[360px]:text-[34px]
              min-[390px]:text-[36px]
              min-[412px]:text-[39px]
              min-[414px]:text-[38px]
              min-[430px]:text-[40px]
              min-[540px]:text-[46px]
              min-[768px]:text-[59px] 
              min-[820px]:text-[65px]
              min-[853px]:text-[70px]
              min-[912px]:text-[75px]
              min-[1024px]:text-7xl
              min-[1280px]:text-5xl"
              >
                Está na hora de
                <br />
                <span className="text-offwhite">mudar a forma</span> como
                <br />
                seus clientes enxergam
                <br />
                <span className="italic text-offwhite"> sua marca</span>
              </h1>
              <p
                className="mt-3 text-black font-normal max-w-md leading-relaxed text-left
                text-[19px]
                min-[344px]:text-[17px]
                min-[360px]:text-[15px]
                min-[390px]:text-[16px]
                min-[412px]:text-[17px]
                min-[414px]:text-[17px]
                min-[540px]:text-[17px]
                min-[768px]:text-[23px] 
                min-[820px]:text-[24px]
                min-[853px]:text-[28px]
                min-[912px]:text-[30px]
                min-[1024px]:text-2xl
                min-[1280px]:text-xl
                min-[390px]:mt-6
                min-[412px]:mt-9
                min-[414px]:mt-6"
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
                  className="group inline-flex items-center gap-2 
                  px-6 py-3
                  min-[540px]:px-7 min-[540px]:py-3
                  min-[768px]:px-8 min-[768px]:py-3.5 
                  min-[820px]:px-8 min-[820px]:py-3.5
                  min-[853px]:px-9 min-[853px]:py-4
                  min-[912px]:px-9 min-[912px]:py-4
                  lg:px-8 lg:py-3.5
                  border-2 border-offwhite rounded-full text-offwhite 
                  text-lg
                  min-[360px]:text-base
                  min-[390px]:text-base
                  min-[412px]:text-lg
                  min-[414px]:text-base
                  min-[540px]:text-base
                  min-[768px]:text-lg 
                  min-[820px]:text-2xl
                  min-[853px]:text-xl
                  min-[912px]:text-2xl
                  min-[1024px]:text-3xl
                  min-[412px]:mt-3  
                  lg:text-2xl
                  font-medium transition-all duration-300 hover:bg-offwhite hover:text-black"
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
