import { useState } from "react";
import GradientBtn from "./GradientBtn";
// import logoF from "../assets/logoF.png";
import logoS from "../assets/logoS.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="400"
      className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white"
    >
      <div>
        <p onClick={handleNav} className={logo ? "hidden" : "block"}>
          <img src={logoS} alt="logo" width={70} height={70} />
        </p>
      </div>
      <ul className="hidden md:flex text-thBlue text-xl font-medium ">
        {/* <li>Home</li> */}
        <li className="hover:bg-purple-800 text-slate-50  duration-1000 rounded-lg space-x-1">
          ABOUT US
        </li>
        <li className="hover:bg-purple-800 text-slate-50 duration-1000 rounded-lg space-x-1">
          SERVICES
        </li>
        <li className="hover:bg-purple-800 text-slate-50 duration-1000 rounded-lg space-x-1">
          TESTIMONIAL
        </li>
        <li className="hover:bg-purple-800 text-slate-50 duration-1000 rounded-lg space-x-1">
          CONTACT US
        </li>
      </ul>
      <GradientBtn
        className="ml-4 capitalize hidden md:flex"
        title="Download"
      />

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-white" size={30} />
        ) : (
          <HiOutlineMenuAlt4 size={30} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-white left-0 top-0 w-full bg-black/80 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>STAGE </h1>
          {/* <li className="border-b text-center">Home</li> */}
          <li className="border-b text-center">SERVICES</li>
          <li className="border-b text-center">ABOUT US</li>
          <li className="border-b text-center">View</li>
          <li className="border-b text-center">Book</li>
          <div className="flex flex-row w-15 justify-center mt-2">
            <GradientBtn
              data-aos="fade-up"
              data-aos-delay="600"
              className=""
              title="Get the app now"
            />
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
