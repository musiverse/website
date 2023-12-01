import down1 from "../assets/down1.png";
import android from "../assets/android.png";
import { AiOutlineApple } from "react-icons/ai";

const Download = () => {
  return (
    <div className="h-[85vh] p-2 text-white/80 md:h-[60vh] flex flex-col md:flex-row gradient-bg-transactions items-center border-y-2 border-purple-500 ">
      <div className="ml-0 py-2 md:ml-[120px] overflow-hidden">
        <img src={down1} alt="mobile" className="h-[300px] " />
      </div>
      <div className="overflow-hidden p-3 w-[340px] md:w-[780px] sm:ml-0  font-tertiary md:ml-[420px] space-y-7 tracking-wider">
        <p className="font-medium text-center md:text-left text-3xl overflow-y-hidden font-new">
          Download Application
        </p>
        <p className="sm:w-[10px] text-center md:text-left md:w-[550px] sm:text-base md:text-xl ">
          Download our mobile app for iOS and android and enjoy unlimited access
          to your favorite music, anytime and anywhere .
        </p>
        <div className="flex flex-col w-[300px] md:w-[300px] justify-center items-center space-y-3 md:space-y-0 md:space-x-3 md:flex-row md:items-center">
          {/* Android Button */}
          <button className="px-1 py-1 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
            <span className="text-base flex items-center gradient-bg-services hover:bg-slate-800 rounded-3xl px-3 py-[6px]">
              Download
              <img src={android} alt="android" className="h-5 w-7 pl-2" />
            </span>
          </button>
          {/* Apple Button */}
          <button className="px-1 py-1 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white">
            <span className="text-base flex items-center gradient-bg-services hover:bg-slate-800 rounded-3xl px-3 py-[6px]">
              Download
              <AiOutlineApple size={25} className="pl-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
