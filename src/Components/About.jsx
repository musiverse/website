import Lottie from "lottie-react";
import animationData from "../assets/star-animation.json";
import animationData1 from "../assets/book.json";
import animationData2 from "../assets/diverse.json";
import animationData3 from "../assets/support.json";
import animationData4 from "../assets/quality.json";
import animationData5 from "../assets/mobile.json";

const services = [
  {
    animationData: animationData,
    title: "Instant Access to Talent",
    description:
      "Browse and book talented musicians, singers, and music systems in just a few taps.",
  },
  {
    animationData: animationData1,
    title: "Seamless Booking",
    description:
      "Enjoy a hassle-free booking process with our user-friendly interface.",
  },
  {
    animationData: animationData2,
    title: "Diverse Music Genres",
    description:
      "Choose from a wide range of genres to find the perfect sound for your event.",
  },
  {
    animationData: animationData4,
    title: "High-Quality Performances",
    description:
      "Our curated selection of artists ensures exceptional and professional performances.",
  },
  {
    animationData: animationData5,
    title: "Personalised Experiences",
    description: "Tailor the music to suit your event or personal preferences.",
  },
  {
    animationData: animationData3,
    title: "Customer Support",
    description:
      "Our dedicated team is here to assist you throughout the process.",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center space-y-8 gradient-bg-welcome overflow-hidden h-[320vh] md:h-[130vh] w-full">
      {/* Updated content... */}
      <div
        data-aos="fade-down"
        className="text-4xl font-medium p-4 text-center text-gray-300 mt-9"
      >
        Connecting Artists and Music{" "}
        <span className="text-accent">Enthusiasts</span> with Ease!
      </div>
      <div
        data-aos="fade-down"
        className="antialiased p-2 text-gray-300 font-medium font-primary text-center max-w-3xl text-xl"
      >
        At{" "}
        <span className="text-accent p-3 font-bold text-3xl underline underline-offset-2">
          STAGExSPLASH,
        </span>{" "}
        our mission is to bring music to your doorstep. With our user-friendly
        app, you can effortlessly connect with talented musicians, singers, and
        music systems. We value reliability, quality, diversity, and
        convenience, ensuring that every occasion is filled with the perfect
        rhythm and soul.
      </div>
      {/* Updated animation data */}
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 mt-8 font-new">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-delay={`${400 + index * 100}`}
              className="text-center flex flex-col items-center"
            >
              <div className="rounded-full bg-gradient-to-br from-blue-600 via-accent to-accent bg-blend-saturation w-[100px] h-[100px] flex items-center justify-center">
                <Lottie animationData={service.animationData} />
              </div>
              <div className="mt-3 text-white">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-accent  to-accent  text-3xl font-black font-primary leading-10 tracking-wide">
                  {service.title}
                </div>
                <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
