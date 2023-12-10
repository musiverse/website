import image4 from "../assets/image4.jpeg";
import { FaCube } from "react-icons/fa6";
// import { PiCubeFill } from "react-icons/pi";

const Singers = () => {
  return (
    <div className="overflow-y-hidden gradient-bg-services text-white">
      <div className="p-5 h-[120vh] md:h-[80vh] mx-auto max-w-7xl space-x-0 md:space-x-10 flex flex-col md:flex-row justify-center overflow-y-hidden">
        <div className=" w-[100%] md:w-[50%]  flex flex-col justify-center items-start ">
          <h1 className="text-3xl md:text-4xl w-[350px] md:w-[600px] overflow-y-hidden tracking-wide font-secondary">
            Discover the Perfect Musicians for Your Event with just a few taps.
          </h1>
          <p className="pt-3 text-lg w-[380px] md:w-[550px] font-secondary text-gray-300">
            Our app makes it incredibely easy to book talented musicians for any
            occasion. Simply browse, select, and comfirm your booking in minutes
          </p>
          <div className="mt-4 text-blue-300 text-base md:text-lg space-y-3 flex flex-col font-secondary">
            {" "}
            <p className="flex items-center gap-4 overflow-y-hidden">
              <FaCube size={13} className="text-blue-700" />
              Browse a Variety of Musicians and Genres.{" "}
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              <FaCube size={13} className="text-blue-700" />
              Book Musicians at Your Preffered Date and Time.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              <FaCube size={13} className="text-blue-700" />
              Enjoy Seamless and Reliable Booking Process.
            </p>
          </div>
        </div>
        <div className=" pt-[80px] flex items-start justify-start mx-auto overflow-y-hidden">
          <img
            src={image4}
            alt="Singers"
            height={500}
            width={600}
            className="border"
          />
        </div>
      </div>
    </div>
  );
};

export default Singers;
