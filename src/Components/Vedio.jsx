// import { useEffect, useState } from "react";

const Video = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const singersSection = document.getElementById("singersSection");
  //     if (singersSection) {
  //       const top = singersSection.getBoundingClientRect().top;
  //       setIsVisible(top < window.innerHeight - 100);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="bg-gradient-to-l from-slate-700 to-gray-900 border border-black border-y-4 py-6">
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around">
          <h3 className="text-center md:text-left text-xl md:text-2xl font-tertiary font-medium mb-8 text-gray-300 lg:mb-0 w-[380px] md:w-[800px] pl-3 pr-3">
            Surprise Moments, Unforgettable Memories - Hire a Singer in Just 5
            Minutes!
          </h3>
          <div className="cursor-pointer">
            <div className="overflow-hidden bg-videoBg1 bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center">
              {/* Image Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

// const Vedio = () => {
//   return (
//     <div className="bg-gradient-to-l from-slate-700 to-gray-900 border border-black border-y-4 py-6">
//       <div className="container mx-auto ">
//         <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-around">
//           <h3 className="text-center md:text-left text-xl md:text-2xl font-tertiary font-medium mb-8 text-gray-300 lg:mb-0 w-[380px] md:w-[800px] pl-3 pr-3">
//             Surprise Moments, Unforgettable Memories - Hire a Singer in Just 5
//             Minutes!
//           </h3>
//           <div>
//             <div className="overflow-hidden cursor-pointer bg-vedioBg1 bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vedio;
