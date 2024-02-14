export const wrapperVariants = {
  loading: {
    transition: {
      type: "spring",
      staggerChildren: 0.4,
      //delayChildren: .,
    },
  },
}

export const loaderVariants = {
  loading: {
    y: [0, -100, 0],
    opacity: [100, 0],
    rotate: [45, 405, 45],
    transition: {
      opacity: {
        type: "linear",
        duration: 3.2,
        repeat: Infinity,
        repeatType: "loop",
      },
      duration: 3.2,
      type: "spring",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
}
