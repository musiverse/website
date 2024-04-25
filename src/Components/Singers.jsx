import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const Singers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const singersSection = document.getElementById("singersSection");
      if (singersSection) {
        const top = singersSection.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      id="singersSection"
      className="overflow-y-hidden bg-[#030014] text-gray-300 overflow-x-hidden z-10"
    >
      {/*gradient-bg-new*/}
      <div className="text-center mb-2" data-aos="fade-down">
        <h2 className="text-2xl md:text-4xl pt-[50px] text-blue-200 font-bold font-new2">
          Elevate Your Event with Unforgettable Artists
        </h2>
        <hr className="border-t-2 border-[#cc5a00] w-52 mx-auto mt-2" />
      </div>
      <div className="overflow-x-hidden p-2 mx-auto max-w-6xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col justify-center items-start overflow-x-hidden"
        >
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-semibold font-new2">
            Artists
          </h1>
          <div className="mt-4 text-blue-200 text-base md:text-lg space-y-3 flex flex-col font-tertiary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              🎤 Best quality artists
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden">
              💸 Budget friendly
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden">
              🎶 High-quality performances assurance
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="pt-4 md:pt-0 flex flex-1 items-center overflow-x-hidden justify-center md:justify-end mx-auto overflow-y-hidden"
        >
          <img
            src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Singers"
            className="object-contain  rounded-ss-[90px] rounded-ee-[90px] border-[5px] h-[230px] md:h-[400px] w-[600px] max-w-full border-black "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Singers;
