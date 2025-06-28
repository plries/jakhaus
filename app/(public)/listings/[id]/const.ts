import { easeInOut } from "motion/react";

export const MOTION_CONFIG = {
  DEFAULT: {
    INITIAL: {
      opacity: 0,
      y: 32,
    },
    WHILE_IN_VIEW: {
      opacity: 1,
      y: 0,
    },
  },
  RIGHT: {
    INITIAL: {
      opacity: 0,
      x: 32,
    },
    WHILE_IN_VIEW: {
      opacity: 1,
      x: 0,
    },
  },
  LEFT: {
    INITIAL: {
      opacity: 0,
      x: -32,
    },
    WHILE_IN_VIEW: {
      opacity: 1,
      x: 0,
    },
  },
  HEADER: {
    INITIAL: {
      y: -32,
      opacity: 0,
    },
    ANIMATE: {
      y: 0,
      opacity: 1,
    },
  },
  TRANSITION: {
    duration: 0.3,
    easeInOut,
    delay: 0.1,
  }
}