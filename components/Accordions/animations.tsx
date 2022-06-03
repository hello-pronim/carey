export const accordion = {
  hidden: {
    height: 0,
    overflow: "hidden",
    transition: {
      when: "after-children",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  visible: {
    height: "auto",
    transition: {
      when: "before-children",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

export const accordionInner = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
