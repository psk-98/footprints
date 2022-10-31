export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    opacity: 1,
    x: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
}
