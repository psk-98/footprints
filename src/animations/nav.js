//animate burger lines
export const line1Variants = {
  open: {
    rotateZ: -405,
    translateX: -9,
    translateY: 7,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
export const line2Variants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
}
export const line3Variants = {
  open: {
    rotateZ: 405,
    translateX: -9,
    translateY: -7,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    width: "80%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
//transperant nav
export const navVariants = {
  transparent: {
    backgroundColor: "transparent",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  none: {
    backgroundColor: "#f5f5f5",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
}
export const sidebarVariants = {
  open: {
    left: 0,
    transition: {
      type: "spring",
      duration: 0.1,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
  closed: {
    left: "-100vw",
    transition: {
      type: "spring",
      duration: 0.1,
      delay: 0.5,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}
export const ulVariantss = {
  open: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.9,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}
export const navLinkVariants = {
  open: {
    //x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    //x: -300,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  hover: {
    scale: 1.05,
  },
}
export const navLinkVariantss = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  hover: {
    x: [0, 5, 0],
    //scale: 1.1,
    color: ["#f5f5f5", "#f2e529", "#f5f5f5"],
    transition: {
      repeat: Infinity,
      type: "spring",
      duration: 2,
      repeatDelay: 0,
      times: [0, 0.2, 0.5, 0.7, 1],
      color: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  tap: {
    scale: 0.95,
  },
}
