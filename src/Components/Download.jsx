// import down1 from "../assets/down1.png";
import d1 from "../assets/d1.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
// import android from "../assets/android.png";
// import { AiOutlineApple } from "react-icons/ai";

const Download = () => {
  return (
    <div className="h-[100vh] gradient-bg-new1 p-2 text-gray-400 md:h-[70vh] flex flex-col md:flex-row items-center justify-evenly">
      <div className="ml-0 py-2 md:ml-[150px] overflow-visible">
        <img src={d1} alt="mobile" className="h-[250px] md:h-[600px] " />
      </div>
      <div className="overflow-hidden  p-3 w-[340px] md:w-[780px] sm:ml-0  font-tertiary md:ml-[420px] space-y-7 tracking-wider">
        <p className="font-medium text-center md:text-left text-3xl overflow-y-hidden font-new2 bg-gradient-to-r from-sky-700 via-violet-600 to-pink-400 text-transparent bg-clip-text">
          Download Application
        </p>
        <p className="sm:w-[10px] text-center md:text-left md:w-[550px] sm:text-base md:text-xl font-tertiary">
          Download our mobile app for iOS and android and enjoy unlimited access
          to your favorite music, anytime and anywhere .
        </p>
        <div className="flex flex-col w-[300px] md:w-[300px] justify-center items-center space-y-3 md:space-y-0 md:space-x-3 md:flex-row md:items-center">
          <img
            src={GooglePlay}
            alt="playstore"
            width={150}
            className="cursor-pointer z-10 border-2 border-white rounded-xl"
          />
          <img
            src={AppStore}
            alt="appstore"
            width={150}
            className="cursor-pointer z-10 border-2 border-white rounded-xl"
          />
          {/* <button className="px-[3px] py-[3px] rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
            <span className="text-base flex items-center gradient-bg-services hover:bg-slate-800 rounded-xl px-3 py-[6px]">
              Download
              <img src={android} alt="android" className="h-5 w-7 pl-2" />
            </span>
          </button>

          <button className="px-[3px] py-[3px] rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
            <span className="text-base flex items-center gradient-bg-services hover:bg-slate-800 rounded-xl px-3 py-[6px]">
              Download
              <AiOutlineApple size={25} className="pl-1" />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Download;
