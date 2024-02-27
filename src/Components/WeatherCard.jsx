import PropTypes from "prop-types";

const WeatherCard = ({ imageSrc, city }) => {
  return (
    <div className="cardContainer relative flex items-center justify-center">
      <div className="card w-56 h-64 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-30 bg-gray-800 border border-white cursor-pointer backdrop-filter backdrop-blur-md">
        <div className="font-bold text-white text-lg leading-tight">{city}</div>
        <div className="font-medium text-sm text-gray-400">
          <img src={imageSrc} alt="wait" className="w-20 h-20" />
        </div>
        <div className="text-3xl text-white">25°C</div>
        <div className="minmaxContainer w-full flex items-center justify-between">
          <div className="w-1/2 flex flex-col items-end justify-center pr-5 space-y-1">
            <div className="minHeading text-xs font-semibold text-white">
              Min
            </div>
            <div className="text-xs font-medium text-gray-400">15°C</div>
          </div>
          <div className="w-1/2 flex flex-col items-start justify-center pl-5 border-l border-white">
            <div className="maxHeading text-xs font-semibold text-white">
              Max
            </div>
            <div className="text-xs font-medium text-gray-400">30°C</div>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-32 h-32 bg-blue-500 rounded-full -left-16 top-16 transition-transform duration-1000 transform-gpu group-hover:translate-x-0 group-hover:translate-y-16"></div> */}
    </div>
  );
};

WeatherCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default WeatherCard;

// // const WeatherCard = () => {
// //   return (
// //     <div className="cardContainer relative flex items-center justify-center">
// //       <div className="card w-40 h-50 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-30 bg-gray-800 border border-white cursor-pointer backdrop-filter backdrop-blur-md">
// //         <img
// //           src="https://via.placeholder.com/150"
// //           alt="Weather Icon"
// //           className="w-20 h-20"
// //         />
// //         <div className="city font-bold text-white text-lg leading-tight">
// //           Artists
// //         </div>
// //         {/* <div className="weather font-medium text-sm text-gray-400">
// //           Weather Description
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WeatherCard;
// import PropTypes from "prop-types";
// // import WeatherContainer from "./WeatherContainer";

// const WeatherCard = ({ imageSrc, city }) => {
//   return (
//     <div className="cardContainer relative flex items-center justify-center">
//       <div className="card w-40 h-50 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-10  border border-gray-300 cursor-pointer backdrop-filter backdrop-blur-md">
//         <img src={imageSrc} alt="wait" className="w-20 h-20" />
//         <div className="city font-medium text-white text-base leading-tight">
//           {city}
//         </div>
//         {/* <div className="weather font-medium text-sm text-gray-400">
//             Weather Description
//           </div> */}
//       </div>
//     </div>
//   );
// };

// WeatherCard.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
// };

// export default WeatherCard;
