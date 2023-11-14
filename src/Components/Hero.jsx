import beachVid from "../assets/final.mp4";
// import AvatarGroup from "./AvatarGroup";
import GradientBtn from "./GradientBtn";
import Circle from "./Circle";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        // autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>

      {/* Content Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-4/5 mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Elevate Your <span className="text-red-600">Moments</span> with Live
          Music
        </h1>

        {/* Subheadline */}
        <p className="text-lg font-secondary md:text-xl lg:text-2xl mb-6 text-gray-200">
          Discover the Power of Live Performances Anytime, Anywhere.
        </p>

        {/* CTA Button */}
        <GradientBtn className="" title="Experience Now" />

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
