import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../utils/motion";

const Led = () => {
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
      className="overflow-y-hidden bg-[#030014] text-gray-300 overflow-x-hidden  "
    >
      {/*new*/}
      <div className="overflow-x-hidden p-2 pt-7 mx-auto max-w-6xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className=" flex flex-col justify-center items-start"
          data-aos="fade-down"
        >
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-semibold font-new2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Other technical gadgets
          </h1>
          {/* <p className="pt-3 text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Transform Events with a Tap
          </p> */}
          <div className="mt-4 text-blue-200 text-base md:text-lg space-y-3 flex flex-col font-tertiary">
            <p className="flex items-center gap-4 overflow-y-hidden ">
              💡 Smart LED displays and lights
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              📲 High-tech gadgets
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              📸 From photography to drone camera shoots{" "}
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              🎨 Decor or any other services
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="pt-4 md:pt-0 flex flex-1 items-center  justify-center md:justify-end mx-auto overflow-y-hidden"
        >
          <img
            src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Singers"
            className="object-contain rounded-ss-[90px] rounded-ee-[90px] border-[1px] border-white h-[230px] md:h-[400px] w-[600px] max-w-full   "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Led;
