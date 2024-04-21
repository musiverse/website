import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full bg-[#030014]"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-325px] md:top-[-340px]  h-full w-full left-0 Z-[-1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
