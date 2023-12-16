import { useState } from "react";
import GradientBtn from "./GradientBtn";
// import logoF from "../assets/logoF.png";
import logoSN from "../assets/logoSN.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Download from "./Download";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const closeNav = () => {
    setNav(false);
    setLogo(false);
  };

  return (
    <div
      className={`flex w-full justify-between items-center h-20 px-4 z-10 text-white fixed ${
        nav
          ? "bg-black bg-opacity-80"
          : "bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 border-opacity-20"
      }`}
    >
      <div className="flex flex-row items-center space-x-1 text-2xl">
        <p onClick={handleNav} className={logo ? "hidden" : "block"}>
          <img src={logoSN} alt="logo" width={70} height={70} />
        </p>
        <p className="font-custom font-medium hidden md:block">StageSplash</p>
      </div>

      {/* <li>Home</li> */}
      <ul className="hidden md:flex  text-thBlue text-xl font-medium space-x-6 ">
        <ScrollLink
          to="singersSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:bg-indigo-900 text-slate-50 duration-1000 rounded-lg "
          onClick={closeNav}
        >
          SERVICES
        </ScrollLink>

        <ScrollLink
          to="aboutUsSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:bg-indigo-900 text-slate-50 duration-1000 rounded-lg "
          onClick={closeNav}
        >
          ABOUT US
        </ScrollLink>

        {/* <li className="hover:bg-indigo-900 text-slate-50 duration-1000 rounded-lg space-x-1">
          TESTIMONIAL
        </li> */}
        <ScrollLink
          to="ContactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:bg-indigo-900 text-slate-50 duration-1000 rounded-lg "
          onClick={closeNav}
        >
          CONTACT US
        </ScrollLink>
      </ul>
      <button className="ml-4 capitalize hidden md:flex btn">Download</button>

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
        onClick={closeNav}
        className={
          nav
            ? "fixed text-white left-0 top-0 w-full bg-black/80 px-4 py-7 flex flex-col z-20"
            : "fixed left-[-100%]"
        }
      >
        <ul className="z-20">
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
