export const collapse = {
  hidden: {
    height: 0,
    transition: {
      when: "after-children",
      ease: "easeInOut",
      duration: 0.7,
    },
  },
  visible: {
    height: "auto",
    transition: {
      when: "before-children",
      ease: "easeInOut",
      duration: 0.7,
    },
  },
};

export const collapseInner = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
