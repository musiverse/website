// import vediofinal from "../assets/vediofinal.mp4";
// import { TypeAnimation } from "react-type-animation";
// import GradientBtn from "./GradientBtn";
import bg1 from "../assets/bg1.mp4";
import { BsMusicNoteList } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
// import AvatarGroup from "./AvatarGroup";

const Hero = () => {
  return (
    <div
      id="HeroSection"
      className="relative h-screen gradient-bg-welcome bg-gradient-to-br from-gray-700 to-black  "
    >
      {/* Background Video */}
      <video
        className="w-full h-full object-cover rounded-b-[4rem]"
        src={bg1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="font-new1 absolute w-full h-full top-0 left-0 right-0  bg-gray-900/30"></div>

      {/* Content Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center font-new1 w-4/5 mx-auto">
        {/* Headline */}
        <h1 className="text-[#DB764F] pb-5 font-secondary font-semibold text-xl md:text-4xl">
          STAGESPLASH
        </h1>

        <h1
          // data-aos="fade-down"
          // data-aos-delay="500"
          className="font-new1 text-2xl overflow-y-hidden text-center md:text-center md:text-5xl lg:text-5xl font-bold mb-4 text-gray-300 "
        >
          Find the Perfect{" "}
          <span className="text-transparent bg-clip-text bg-accent">
            Services
          </span>{" "}
          for Your Event
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center pt-4">
          <p className="flex flex-row p-1  items-center">
            <BsMusicNoteList className="text-accent text-2xl mx-2" />
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
        {/* <div className="flex justify-center items-center">
          <AvatarGroup />
        </div> */}
        {/* Subheadline */}
        {/* <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="text-xl font-tertiary md:text-2xl text-center md:text-center overflow-y-hidden text-gray-200"
        >
          Discover talented musicians and music services for any occasion.{" "}
          <TypeAnimation
            className="ml-2 leading-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Anytime,",
              4000, // wait 1s before replacing "Mice" with "Hamsters"
              "Anywhere.",
              4000,
              // 'We produce food for Guinea Pigs',
              // 1000,
              // 'We produce food for Chinchillas',
              // 1000
            ]}
            wrapper="span"
            speed={10}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            deletionSpeed={10}
            repeat={Infinity}
          />
        </p> */}
        {/* <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="overflow-y-hidden pt-2 text-xl font-bold tracking-wider md:text-2xl text-center text-accent font-tertiary "
        >
          {" "}
          Download our app today!
        </p> */}

        {/* CTA Button */}
        {/* <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="flex flex-col space-y-2 md:flex-row space-x-0 md:space-x-3 mt-3 items-center justify-center sm:ml-[-80px] md:ml-0"
        >
          <button className="mt-2 bg-gradient-to-br from-black via-black to-green-500 text-gray-300 px-7 py-2 text-xl rounded-2xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
            Download Now
          </button>
          <button className="px-[40px] tracking-widest py-2  rounded-2xl border text-xl text-center font-medium">
            Learn More
          </button>
        </div> */}
        {/* Unique Selling Proposition */}
        {/* <p className="text-lg mt-4 font-secondary flex justify-center items-center">
          <AvatarGroup />
          Your curated collection of musicians, singers, and music systems, at
          your fingertips.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
