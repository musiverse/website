// import vediofinal from "../assets/vediofinal.mp4";
import bg1 from "../assets/bg1.mp4";
// import bgwall from "../assets/bgwall.jpg";
// import WeatherCard from "./WeatherCard";
// import guitar1 from "../assets/guitar1.png";
// import techrider from "../assets/techrider.jpg";
// import hightech from "../assets/hightech.jpg";

// Import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import  { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div id="HeroSection" className="relative h-screen   ">
      <video
        className="w-full h-full object-cover "
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <img
        src={bgwall}
        alt="bg photo"
        className="w-full h-full object-cover "
      /> */}

      {/* Overlay */}
      <div className="font-new1 absolute   w-full h-full top-0 left-0 right-0  bg-black/70 border-black border-b-[12px]"></div>

      {/* Content Container */}
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-gray-100 text-center font-new1 w-4/5 mx-auto">
        {/* Headline */}
        <h1
          className="bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text pb-5 Aloevera font-semibold text-4xl md:text-8xl tracking-widest"
          data-aos="fade-down"
        >
          {/* ＳＴΛＧΞＳＰＬΛＳＨ */}
          STAGESPLASH
        </h1>

        {/* <div className="flex flex-row p-20 space-x-4 md:space-x-0 justify-around md:pt-44 w-18 overflow-x-scroll scroll-auto scroll-ml-14n  md:overflow-x-hidden">
          <WeatherCard imageSrc={guitar1} city="Artists" />
          <WeatherCard imageSrc={techrider} city="Sound" />
          <WeatherCard imageSrc={hightech} city="High tech gadgets" />
          <WeatherCard
            imageSrc={hightech}
            city="High tech gadgets"
            className="md:hidden"
          />
        </div> */}

        {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={80}
          mousewheel-invert="true"
          autoplay={{ delay: 50 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="flex flex-row p-20 space-x-4 md:space-x-0 justify-around md:pt-44 w-18 "
        >
          <SwiperSlide>
            <WeatherCard
              imageSrc={guitar1}
              city="Artists"
              features={[
                { icon: "🎤", text: "Diverse range of artists" },
                { icon: "💸", text: "Tailored to fit any budget" },
                {
                  icon: "🎶",
                  text: "High-quality performances",
                },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherCard
              imageSrc={techrider}
              city="Sound"
              features={[
                { icon: "🔊", text: "High-quality sound systems" },
                { icon: "🎚️", text: "Professional audio engineers" },
                { icon: "🎛️", text: "Customizable audio setups" },
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <WeatherCard
              imageSrc={hightech}
              city="High tech gadgets"
              features={[
                { icon: "📱", text: "State-of-the-art technology" },
                { icon: "💡", text: "Innovative lighting solutions" },
                { icon: "🔧", text: "Technical support for events" },
              ]}
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default Hero;
