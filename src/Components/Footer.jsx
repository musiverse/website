import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import newLogo from "../assets/newLogo.png";
// import logoS from "../assets/logoS.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import { Link as ScrollLink } from "react-scroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_xtt44ep";
    const templateId = "template_o5gl63l";
    const publicKey = "v7bwjRGgPQhA6cI_D";

    const templateParams = {
      from_email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setEmail("");
      })
      .catch((error) => {
        console.error("error sending email:", error);
      });
  };
  return (
    <div id="ContactSection" className="font-sans gradient-bg-footer">
      <section className="mx-auto  max-w-[1300px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <div className="flex items-center space-x-2">
              <img src={newLogo} alt="LOGO" width={49} height={49} />
              <h1 className="overflow-y-hidden flex items-center mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
                <a
                  href="/#home"
                  className="mt-2 font-medium  font-custom overflow-y-hidden bg-gradient-to-r  from-sky-700 via-violet-600 to-pink-400 text-transparent bg-clip-text"
                >
                  StageSplash
                  {/* <span className="font-bold text-primary overflow-y-hidden">
                  Splash
                </span> */}
                </a>
              </h1>
            </div>
            <p className="mt-6 font-tertiary">
              Elevate your moments with STAGESPLASH your go-to destination for
              connecting with talented musicians,captivating singers, and
              cutting-edge music systems.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="mt-3 flex items-center gap-3 z-10 cursor-pointer">
              <FaMobileAlt />
              <p>+91 7985179107</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 space-y-8`}>
                  <ScrollLink
                    to="HeroSection" // Add the appropriate section ID
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed
                    duration={500}
                    className="pt-4 cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10"
                  >
                    Home
                  </ScrollLink>

                  <ScrollLink
                    to="aboutUsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10"
                  >
                    About
                  </ScrollLink>

                  <ScrollLink
                    to="singersSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10"
                  >
                    Services
                  </ScrollLink>
                  {/* <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Login
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 space-y-8 ml-[-18px]">
                  <li className="pt-4 cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10">
                    Privacy Policy
                  </li>
                  <ScrollLink
                    to="singersSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10"
                  >
                    Services
                  </ScrollLink>
                  <ScrollLink
                    to="aboutUsSection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer transition-all duration-300 hover:translate-x-[2px] z-10"
                  >
                    About
                  </ScrollLink>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div
                  className="flex flex-col gap-3"
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  action="POST"
                  onSubmit={handleSubmit}
                >
                  <h1 className="overflow-y-hidden">
                    Subscribe to our newsletter
                  </h1>

                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 z-10"
                    type="text"
                    id="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="bg-black px-[1px] py-[1px] rounded-xl">
                    Subscribe
                  </button>
                  <div className="mt-6 flex items-center gap-3 z-10">
                    <a
                      href="https://www.instagram.com/stagexsplash?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="duration-200 hover:scale-105"
                    >
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[70px] md:py-0 space-y-3 flex   items-center flex-col">
              <p className="text-xl underline underline-offset-2">
                Download Now!
              </p>
              <img
                src={GooglePlay}
                alt="playstore"
                width={140}
                className="z-10 cursor-pointer border-2 border-white rounded-xl"
              />
              <img
                src={AppStore}
                alt="appstore"
                width={140}
                className="z-10 cursor-pointer border-2 border-white rounded-xl"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2023 StageSplash
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
