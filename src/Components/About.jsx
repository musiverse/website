import Lottie from "lottie-react";
import animationData from "../assets/star-animation.json";
import animationData1 from "../assets/book.json";
import animationData2 from "../assets/diverse.json";
import animationData3 from "../assets/support.json";
import animationData4 from "../assets/Wallet.json";
import animationData5 from "../assets/mobile.json";

const services = [
  {
    animationData: animationData4,
    title: "Budget Friendly",
    description:
      "Discover a variety of genres that fit your budget without compromising on quality.",
  },
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
    <div
      id="aboutUsSection"
      className="flex flex-col items-center bg-[#0f0e13] space-y-8 overflow-hidden h-[360vh] md:h-[155vh] w-full "
    >
      {/*gradient-bg-new1*}
      {/* Updated content... */}
      <div
        data-aos="fade-down"
        className="text-4xl overflow-y-hidden font-medium p-4 text-center bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text mt-9 "
      >
        Connecting Artists and Music Enthusiasts with Ease!
      </div>
      <div
        data-aos="fade-down"
        className="overflow-y-hidden antialiased p-2 text-blue-200 font-normal font-tertiary text-center max-w-3xl text-lg"
      >
        At{" "}
        <span className=" text-slate-300  font-new2 p-3 font-bold text-3xl underline underline-offset-2">
          STAGExSPLASH,
        </span>{" "}
        our mission is to bring music to your doorstep. With our user-friendly
        app, you can effortlessly connect with talented musicians, singers, and
        music systems. We value reliability, quality, diversity, and
        convenience, ensuring that every occasion is filled with the perfect
        rhythm and soul.
      </div>
      {/* Updated animation data */}
      <div className="max-w-[1240px] mx-auto overflow-y-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 mt-8 font-new">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-down"
              // data-aos-delay={`${400 + index * 100}`}npm
              className="text-center flex flex-col items-center"
            >
              <div className="rounded-full  w-[100px] h-[100px] flex items-center justify-center">
                <Lottie animationData={service.animationData} />
              </div>
              <div className="mt-3 text-white">
                <div className=" bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text text-3xl font-black font-new2 leading-10 ">
                  {service.title}
                </div>
                <div className="font-normal text-lg text-center tracking-wide text-gray-400 mt-2 leading-6 p-1 font-tertiary">
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
