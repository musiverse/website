// import React from 'react';
// import { motion } from "framer-motion";

// import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import CardImage from "../assets/CardImage.png";

const Work = () => {
  return (
    <section id="work" className="">
      <div className="container mx-auto bg-[#030014] p-6 md:p-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <h2 className="font-medium text-[24px] md:text-[32px] mb-6 ml-0  md:ml-6 tracking-[50%] uppercase leading-tight text-accent">
              Elevate your Events <br /> With us!
            </h2>
            <p className="max-w-sm ml-0 md:ml-6 text-xl mb-16 lg:mb-0">
              We provide the best and instant services in your budget at your
              doorstep .
            </p>
            <div>
              <button className="ml-0 md:ml-4 capitalize px-[4px] py-[3px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white">
                <span className="text-base md:text-lg  flex items-center gradient-bg-services hover:bg-fuchsia-500 rounded-3xl px-5 py-[7px]">
                  View Our Services
                </span>
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={CardImage}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Stagesplash</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Artists</span>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={CardImage}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Stagesplash</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">LED</span>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={CardImage}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* pre-title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Stagesplash</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Sound Equipments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
