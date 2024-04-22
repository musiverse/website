import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const Sound = () => {
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
      className="overflow-y-hidden bg-[#030014] text-gray-300 overflow-x-hidden "
    >
      {/*gradient-bg-new1*/}
      <div className="overflow-x-hidden p-2 pt-7 mx-auto md:mx-36 max-w-7xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        {/* Image Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="pt-4 md:pt-0 flex flex-1 items-center justify-center md:justify-start mx-auto order-2 md:order-1 overflow-y-hidden"
        >
          <img
            src="https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Singers"
            className="h-[230px] object-contain  rounded-ss-[90px] rounded-ee-[90px] border-white md:h-[400px] w-[600px] max-w-full border-[1px] shadow-2xl shadow-black"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="flex flex-col justify-center items-start order-1 md:order-2"
        >
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-semibold font-new2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Sound Equipments
          </h1>
          {/* <p className="pt-3 text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Access Top-Notch Sound
          </p> */}
          <div className="mt-4 text-blue-200 text-base md:text-lg space-y-3 flex flex-col font-tertiary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              🔊 Seamless sound experience
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              📱 Tech rider for personalized events
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              🎵 Crystal-clear audio, powerful bass
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sound;
