// import vediofinal from "../assets/vediofinal.mp4";
// import { TypeAnimation } from "react-type-animation";
// import GradientBtn from "./GradientBtn";
import bg1 from "../assets/bg1.mp4";

const Hero = () => {
  return (
    <div className="relative h-screen gradient-bg-welcome bg-gradient-to-br from-gray-700 to-black  ">
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
      <div className="absolute w-full h-full top-0 left-0 right-0 bg-gray-900/30"></div>

      {/* Content Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center font-custom w-4/5 mx-auto">
        {/* Headline */}
        <h1
          data-aos="fade-down"
          data-aos-delay="500"
          className="text-3xl overflow-y-hidden text-center md:text-left md:text-4xl lg:text-6xl font-bold mb-4 text-gray-300 "
        >
          Find the Perfect{" "}
          <span className="text-transparent bg-clip-text bg-accent">
            Musicians
          </span>{" "}
          for Your Event
        </h1>

        {/* Subheadline */}
        <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="text-xl font-tertiary md:text-2xl text-center md:text-left overflow-y-hidden text-gray-200"
        >
          Discover talented musicians and music services for any occasion.{" "}
          {/* <TypeAnimation
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
          /> */}
        </p>
        <p
          data-aos="fade-down"
          data-aos-delay="600"
          className="overflow-y-hidden pt-2 text-xl font-bold tracking-wider md:text-2xl text-left text-accent font-tertiary "
        >
          {" "}
          Download our app today!
        </p>

        {/* CTA Button */}
        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="flex flex-col space-y-2 md:flex-row space-x-0 md:space-x-3 mt-3 items-center justify-start sm:ml-[-80px] md:ml-0"
        >
          <button className="mt-2 bg-gradient-to-br from-orange-500 via-black to-green-500 text-gray-300 px-7 py-2 text-xl rounded-2xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
            Download Now
          </button>
          <button className="px-[40px] tracking-widest py-2  rounded-2xl border text-xl text-center font-medium">
            Learn More
          </button>
        </div>
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
