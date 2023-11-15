import PropTypes from "prop-types";

const GradientBtn = ({ title, className }) => {
  return (
    <button
      className={`bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-7 py-2 text-xl rounded-3xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate ${className}`}
    >
      {title}
    </button>
  );
};

GradientBtn.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default GradientBtn;

// `bg-gradient-to-r from-thOrannge to-thBlue py-2 px-6 text-black rounded-lg duration-300 hover:scale-110 ${
//   className || ""
// }`;

// 1
// <a
// href="#_"
// className={`relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group ${className}`}
// >
// <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
//   <svg
//     className="w-6 h-6"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M14 5l7 7m0 0l-7 7m7-7H3"
//     ></path>
//   </svg>
// </span>
// <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
//   download
// </span>
// <span className="relative invisible">{title}</span>
// </a>

{
  /* <a
        href="#_"
        className={`relative  items-center justify-center inline-block p-4 px- py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group ${className}`}
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
        </span>
        <span className="relative text-white">{title}</span>
      </a> */
}
