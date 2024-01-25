// import vediofinal from "../assets/vediofinal.mp4";
// import { TypeAnimation } from "react-type-animation";
// import GradientBtn from "./GradientBtn";
// import bg1 from "../assets/bg1.mp4";
import bgwall from "../assets/bgwall.jpg";
import { BsMusicNoteList } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
// import AvatarGroup from "./AvatarGroup";

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
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center font-new1 w-4/5 mx-auto">
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
        <div className="flex flex-col md:flex-row justify-center items-center pt-4">
          <p className="flex flex-row p-1  items-center">
            <BsMusicNoteList className="bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text text-2xl mx-2" />
            ARTISTS
          </p>
          <p className="flex flex-row  p-1 items-center">
            <FontAwesomeIcon
              icon={faGuitar}
              className="text-accent text-2xl mx-2"
            />
            SOUND
          </p>
          <p className="flex flex-row p-1 items-center">
            <PiMicrophoneStageFill className="text-accent text-2xl mx-2" />
            HIGH-TECH GADGETS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
