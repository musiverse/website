import PropTypes from "prop-types";

const GradientBtn = ({ title, className }) => {
  return (
    <button
      className={` bg-gradient-to-r  from-sky-700 via-violet-600 to-pink-400 text-gray-300 px-7 py-2 text-xl rounded-2xl font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate ${className}`}
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
