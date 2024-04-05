import { delay } from "framer-motion";

// eslint-disable-next-line no-unused-vars
export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

// eslint-disable-next-line no-unused-vars
export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 1.5,
      },
    },
  };
}

// eslint-disable-next-line no-unused-vars
export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1.5,
    },
  },
};
