export const imgVariants = {
  appear: {
    scale: 1,
    transiton: {
      type: "spring",
      duration: 0.3,
    },
  },
  dis: {
    scale: 0,
    transiton: {
      type: "spring",
      duration: 0.3,
    },
  },
}

export const selectorVariants = {
  active: {
    //background: "none",
    //border: "#000 1px solid",
    //color: "#000",
    rotateZ: 135,
    transiton: {
      type: "spring",
    },
  },
  not: {
    //background: "#000",
    //border: "none",
    //color: "#f5f5f5",
    rotateZ: 0,
    transiton: {
      type: "spring",
    },
  },
}

export const activeImageVariants = {
  active: {
    scale: [1, 0, 1],
    opacity: 0.4,
    border: "1px solid rgba(5,5,5,1)",
    transiton: {
      type: "spring",
      duration: 0.3,
    },
  },
  not: { opacity: 1, border: "1px solid rgba(255,255,255,1)" },
}

export const sizeSelectorVariants = {
  active: {
    background: "#fff",
    color: "#050505",
    transiton: {
      type: "linear",
    },
  },
  not: {
    background: "#050505",
    color: "#eee",
    transiton: {
      type: "spring",
    },
  },
}
