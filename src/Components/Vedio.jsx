import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";
// import praposal1 from "../assets/praposal.jpeg";
// import prop2 from "../assets/prop2";
// import prop3 from "../assets/prop3";

const Vedio = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      className="bg-gradient-to-l from-slate-700 to-gray-900 border border-black border-y-4 py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around">
          <motion.h3
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center md:text-left text-xl md:text-2xl font-tertiary font-medium mb-8 text-gray-300 lg:mb-0 w-[380px] md:w-[800px] pl-3 pr-3"
          >
            Surprise Moments, Unforgettable Memories - Hire a Singer in Just 5
            Minutes!
          </motion.h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="qNxaTgFL1aU"
            onClose={() => setIsOpen(false)}
          />
          {/* {vedi0} */}
          <motion.div
            variants={slideInFromRight(0.8)}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" overflow-hidden cursor-pointer bg-videoBg1 bg-no-repeat bg-cover  w-[270px] h-[180px] flex items-center justify-center"
            >
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vedio;
