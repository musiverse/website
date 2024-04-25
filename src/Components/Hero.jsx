import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full bg-[#030014]"
      id="about-me"
    >
      {/* Video for large screens */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-10 object-cover hidden md:block"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Video for small screens */}
      <video
        autoPlay
        muted
        loop
        className="object-cover w-full h-full left-0 bottom-0 block md:hidden z-0 relative "
      >
        <source src="/mobbg.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};

export default Hero;
