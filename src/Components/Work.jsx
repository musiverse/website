// import React from 'react';
// import { motion } from "framer-motion";

// import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import CardImage from "../assets/CardImage.png";

const Work = () => {
  return (
    <section id="work" className="">
      <div className="container mx-auto bg-[#030014] p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            // variants={fadeIn("right", 0.3)}
            // variants={slideInFromLeft(0.5)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <h2 className="h2 leading-tight text-accent">
              My Latest <br /> Work
            </h2>
            <p className="max-w-sm mb-16 lg:mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              illum dicta eum corrupti? Soluta itaque dolor, totam harum
              necessitatibus tempora!
            </p>
            <div>
              <button className="btn btn-sm">View all projects</button>
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
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
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
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
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
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

// import "../styles/styles.css";

// const Work = () => {
//   return (
//     <section className="section bg-[#030014] text-white" id="work">
//       <div className=" max-w-full   grid lg:grid-cols-2 gap-10 ">
//         <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
//           {/* text */}
//           <div className="flex flex-col lg:flex-row gap-x-10">
//             <h2 className="h2 leading-tight text-accent">
//               My Latest <br /> Work.
//             </h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
//               unde obcaecati vel neque ullam fugit magnam a laudantium nostrum
//               porro{" "}
//             </p>
//             <button className="btn btn-sm">View All Services</button>
//           </div>
//           {/* image */}
//           <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
//             {/* overlay */}
//             <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//             {/* img */}
//             <img
//               className="group-hover:scale-125 transition-all duration-500"
//               src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt=""
//             />
//             {/* pretite */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//               <span className="text-gradient">UI/UX Design</span>
//             </div>
//             {/* title */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
//               <span className="text-3xl text-white">Project title</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 flex flex-col gap-y-10">
//           {" "}
//           <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
//             {/* overlay */}
//             <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//             {/* img */}
//             <img
//               className="group-hover:scale-125 transition-all duration-500"
//               src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt=""
//             />
//             {/* pretite */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//               <span className="text-gradient">UI/UX Design</span>
//             </div>
//             {/* title */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
//               <span className="text-3xl text-white">Project title</span>
//             </div>
//           </div>
//           {/* image */}
//           <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
//             {/* overlay */}
//             <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//             {/* img */}
//             <img
//               className="group-hover:scale-125 transition-all duration-500"
//               src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//               alt=""
//             />
//             {/* pretite */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//               <span className="text-gradient">UI/UX Design</span>
//             </div>
//             {/* title */}
//             <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
//               <span className="text-3xl text-white">Project title</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;
