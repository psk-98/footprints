export const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
  exit: {
    opacity: 0,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 1,
    },
  },
  tap: {
    scale: 0.95,
  },
}

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: [1, 0, 1],
    pathLength: [1, 0, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      staggerChildren: 0.4,
    },
  },
}
