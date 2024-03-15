import { useState } from "react";
import newLogo from "../assets/newLogo.png";
import GradientBtn from "./GradientBtn";
// import logoSN from "../assets/logoSN.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

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
      className={`flex w-full justify-between items-center h-20 px-4 z-20 text-white fixed ${
        nav
          ? "bg-black bg-opacity-80"
          : "bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 border-opacity-20"
      }`}
      data-aos="fade-down"
    >
      <div className="flex flex-row items-center space-x-1 text-2xl">
        <p onClick={handleNav} className={logo ? "hidden" : "block"}>
          <img src={newLogo} alt="logo" width={70} height={70} />
        </p>
        {/* <p className="font-semibold hidden md:block bg-gradient-to-r  from-sky-700 via-violet-600 to-pink-400 text-transparent bg-clip-text">
          STAGESPLASH
        </p> */}
      </div>
      {/* <li>Home</li> */}
      {/* <ul className="hidden md:flex  text-thBlue text-xl font-medium space-x-6 ">
        <ScrollLink
          to="singersSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          className="custom-hover text-slate-50 duration-1000 rounded-lg px-4 py-2"
          onClick={closeNav}
        >
          SERVICES
        </ScrollLink>

        <ScrollLink
          to="aboutUsSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          className="custom-hover text-slate-50 duration-1000 rounded-lg px-4 py-2"
          onClick={closeNav}
        >
          ABOUT US
        </ScrollLink>

        {/* <li className="hover:bg-indigo-900 text-slate-50 duration-1000 rounded-lg space-x-1">
          TESTIMONIAL
        </li> */}
      {/* <ScrollLink
          to="ContactSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
          className="custom-hover text-slate-50 duration-1000 rounded-lg px-4 py-2"
          onClick={closeNav}
        >
          CONTACT US
        </ScrollLink>
      </ul> */}{" "}
      <GradientBtn
        className="ml-4 capitalize hidden md:flex "
        title="download"
      />
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-30">
        {nav ? (
          <AiOutlineClose className="text-white " size={30} />
        ) : (
          <HiOutlineMenuAlt4 className="text-white" size={30} />
        )}
      </div>
      {/* Mobile menu dropdown */}
      <div
        onClick={closeNav}
        className={
          nav
            ? "fixed text-white/50 left-0 top-0 w-full bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 border-opacity-20 px-4 py-3 flex flex-col z-20"
            : "fixed left-[-100%]"
        }
      >
        <ul className="z-20  text-white/70 flex flex-col font-new2 tracking-wider">
          <h1>
            <img src={newLogo} alt="logo" width={55} height={55} />{" "}
          </h1>
          {/* <li className="border-b text-center text-lg my-5">Home</li>
           */}
          <ScrollLink
            to="HeroSection" // Add the appropriate section ID
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={1200}
            className="border-b text-center text-lg my-6 pb-4 "
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="singersSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="border-b text-center text-lg my-5  pb-4"
            onClick={closeNav}
          >
            SERVICES
          </ScrollLink>
          {/* <li className="border-b text-lg text-center my-5">ABOUT US</li>
           */}
          <ScrollLink
            to="aboutUsSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="border-b text-center my-5 text-lg pb-4"
            onClick={closeNav}
          >
            ABOUT US
          </ScrollLink>
          {/* <li className="border-b text-lg text-center my-5">View</li> */}
          {/* <li className="border-b text-lg text-center my-5">Contact Us</li> */}
          <ScrollLink
            to="ContactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
            className="border-b text-center my-5 text-lg pb-4"
            onClick={closeNav}
          >
            CONTACT US
          </ScrollLink>

          <div className="flex flex-row w-15 justify-center my-5">
            {/* <button className="ml-4 capitalize md:hidden flex btn">
              Get The App Now
            </button> */}
            <GradientBtn title="Get the app now" className="capitalize" />
          </div>
          <div className="flex justify-between my-6 text-xl">
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
