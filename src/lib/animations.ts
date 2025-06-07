import { Variants } from "framer-motion";

// Loading state variants
export const loadingVariants: Variants = {
  loading: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  loaded: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

// Fade in variants for content
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Staggered container variants
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Staggered item variants
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale in variants for images
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Blur to sharp variants
export const blurToSharpVariants: Variants = {
  blurred: {
    filter: "blur(10px)",
    scale: 1.1,
    opacity: 0.7,
  },
  sharp: {
    filter: "blur(0px)",
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Skeleton shimmer animation
export const shimmerVariants: Variants = {
  shimmer: {
    x: ["-100%", "100%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Progress bar variants
export const progressVariants: Variants = {
  initial: {
    width: "0%",
  },
  loading: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }),
  complete: {
    width: "100%",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Video loading variants
export const videoLoadingVariants: Variants = {
  loading: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  loaded: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Slide up variants for content reveal
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Transition presets
export const transitionPresets = {
  smooth: {
    duration: 0.4,
    ease: "easeOut",
  },
  quick: {
    duration: 0.2,
    ease: "easeOut",
  },
  slow: {
    duration: 0.8,
    ease: "easeOut",
  },
  bounce: {
    duration: 0.6,
    ease: "easeOut",
    type: "spring",
    stiffness: 100,
  },
} as const;
