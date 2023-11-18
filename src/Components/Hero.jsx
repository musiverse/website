import final from "../assets/final.mp4";
import { TypeAnimation } from "react-type-animation";
// import GradientBtn from "./GradientBtn";

const Hero = () => {
  return (
    <div className="relative h-screen bg-slate-900 overflow-hidden  ">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover rounded-b-[5rem]"
        src={final}
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>

      {/* Content Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center w-4/5 mx-auto">
        {/* Headline */}
        <h1
          data-aos="fade-down"
          data-aos-delay="500"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-300"
        >
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-accent">
            Moments
          </span>{" "}
          with Live Music
        </h1>

        {/* Subheadline */}
        <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="text-xl font-secondary md:text-xl lg:text-3xl mb-6 text-gray-200"
        >
          Discover the Power of Live Performances
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
        </p>

        {/* CTA Button */}
        <button className="bg-gradient-to-br from-orange-500 via-black to-green-500 text-gray-300 px-7 py-2 text-xl rounded-3xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
          Experience Now
        </button>
        {/* Unique Selling Proposition */}
        {/* <p className="text-lg mt-4 font-secondary flex justify-center items-center">
          <AvatarGroup />
          Your curated collection of musicians, singers, and music systems, at
          your fingertips.
        </p> */}
        {/* <Circle /> */}
      </div>
    </div>
  );
};

export default Hero;
