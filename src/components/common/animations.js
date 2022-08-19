export const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: 'easeOut'
        }
      }
    }
  }
export const hoverButtonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: .5,
      yoyo: Infinity
    }
  }
}
  


export const alertVariants = {
  hidden: {
    x: '100vw'
  },
  visible: {
    x: 0,
    transition: {type: 'spring', delay: 0.5}
  },
  exit: {
    x: '100vw'
  }
}