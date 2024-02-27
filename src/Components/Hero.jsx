// import vediofinal from "../assets/vediofinal.mp4";
// import { TypeAnimation } from "react-type-animation";
// import GradientBtn from "./GradientBtn";
// import bg1 from "../assets/bg1.mp4";
import bgwall from "../assets/bgwall.jpg";
import WeatherCard from "./WeatherCard";
import guitar1 from "../assets/guitar1.png";
import techrider from "../assets/techrider.jpg";
import hightech from "../assets/hightech.jpg";
// import guitar from "../assets/guitar.jpg";

const Hero = () => {
  return (
    <div id="HeroSection" className="relative h-screen   ">
      {/* <video
        className="w-full h-full object-cover rounded-b-[4rem]"
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      <img src={bgwall} alt="bg photo" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="font-new1 absolute  w-full h-full top-0 left-0 right-0  bg-black/70"></div>

      {/* Content Container */}
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center font-new1 w-4/5 mx-auto">
        {/* Headline */}
        <h1 className="bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text pb-5 font-secondary font-semibold text-2xl md:text-7xl tracking-widest">
          {/* ＳＴΛＧΞＳＰＬΛＳＨ */}
          STAGESPLASH
        </h1>

        {/* <h1
          // data-aos="fade-down"
          // data-aos-delay="500"
          className="font-stylish text-2xl overflow-y-hidden text-center md:text-center md:text-5xl lg:text-5xl font-bold mb-4 text-gray-300 "
        >
          Let's create{" "}
          <span className="text-transparent bg-clip-text bg-accent">
            unforgettable
          </span>{" "}
          Moments.
    </h1>*/}
        <div className="flex flex-row p-10 space-x-4 md:space-x-0 justify-around md:pt-44 w-18 overflow-x-scroll md:overflow-x-hidden">
          <WeatherCard imageSrc={guitar1} city="Artists" />
          <WeatherCard imageSrc={techrider} city="Sound" />
          <WeatherCard imageSrc={hightech} city="High tech gadgets" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
