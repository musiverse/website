import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";

const Vedio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-l from-slate-700 to-gray-900 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around">
          <h3 className="text-center md:text-left text-xl md:text-2xl font-semibold mb-8 text-gray-300 lg:mb-0 w-[400px] md:w-[800px]">
            Surprise Moments, Unforgettable Memories - Hire a Singer in Just 5
            Minutes!
          </h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="qNxaTgFL1aU"
            onClose={() => setIsOpen(false)}
          />
          {/* {vedi0} */}
          <div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" cursor-pointer bg-videoBg bg-no-repeat bg-cover  w-[270px] h-[180px] flex items-center justify-center"
            >
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
