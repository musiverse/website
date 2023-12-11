// import image4 from "../assets/image4.jpeg";
import { FaCube } from "react-icons/fa6";

const Singers = () => {
  return (
    <div className="overflow-y-hidden gradient-bg-transactions text-gray-300 overflow-x-hidden">
      <div className="p-2 pt-7 mx-auto max-w-7xl h-[100vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        <div className=" flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-secondary">
            Discover the Perfect Musicians for Your Event with just a few taps.
          </h1>
          <p className="pt-3 text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Our app makes it incredibly easy to book talented musicians for any
            occasion. Simply browse, select, and confirm your booking in
            minutes.
          </p>
          <div className="mt-4 text-blue-300 text-base md:text-lg space-y-3 flex flex-col font-secondary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              <FaCube size={13} className="text-blue-700" /> Browse a Variety of
              Musicians and Genres.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              <FaCube size={13} className="text-blue-700" /> Book Musicians at
              Your Preferred Date and Time.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              <FaCube size={13} className="text-blue-700" /> Enjoy Seamless and
              Reliable Booking Process.
            </p>
          </div>
        </div>
        <div className="pt-4 md:pt-0 flex flex-1 items-center  justify-center md:justify-start mx-auto overflow-y-hidden">
          <img
            src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Singers"
            className="object-contain w-[600px] h-full max-w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Singers;
