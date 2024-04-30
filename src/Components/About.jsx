import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft } from "../utils/motion"; // Update motion import
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
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animationDelay = 0.3;

  return (
    <div
      ref={ref}
      id="aboutUsSection"
      className="flex flex-col items-center bg-[#030014] space-y-8   overflow-hidden h-[360vh] md:h-[140vh] w-full cursor"
    >
      {/*gradient-bg-new1*}
      {/* Updated content... */}
      <motion.div
        variants={slideInFromTop}
        className="text-4xl overflow-y-hidden font-medium pt-12 p-4 text-center bg-gradient-to-r  from-sky-700 via-violet-600 to-pink-400 text-transparent bg-clip-text mt-9 "
      >
        Connecting Artist and Users with Ease!
      </motion.div>
      <motion.div
        variants={slideInFromTop}
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
      </motion.div>
      {/* Updated animation data */}
      <div className="max-w-[1240px] mx-auto overflow-y-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 mt-8 font-new">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              variants={slideInFromLeft(0.8)} // Alternate direction based on index
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * animationDelay }}
              // data-aos-delay={`${400 + index * 100}`}npm
              className="text-center flex flex-col items-center"
            >
              <div className="rounded-full  w-[100px] h-[100px] flex items-center justify-center">
                <Lottie animationData={service.animationData} />
              </div>
              <div className="mt-3 text-white">
                <div className="bg-cyan-800 text-transparent bg-clip-text text-3xl font-black font-new2 leading-10 ">
                  {service.title}
                </div>
                <div className="font-normal text-lg text-center tracking-wide text-gray-400 mt-2 leading-6 p-1 font-tertiary">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
