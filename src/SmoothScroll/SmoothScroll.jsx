import PropTypes from "prop-types";
import ReactLenis from "@studio-freight/react-lenis";

const SmoothScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.5,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

SmoothScroll.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children is provided and is a valid React node
};

export default SmoothScroll;
