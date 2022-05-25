import { AnimatePresence } from "framer-motion";
import { ActvIndicator } from "./styles";

interface indicatorProps {
  target: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

const ActiveIndicator = ({ target }: indicatorProps) => {
  return (
    <AnimatePresence>
      <ActvIndicator
        initial={{
          opacity: 0,
          top: target.top,
          left: 0,
          width: "calc(100% - 8px)",
          height: target.height,
        }}
        animate={
          target && {
            opacity: 1,
            top: target.top,
            left: target.left,
            width: target.width,
            height: target.height,
          }
        }
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          bounce: 0.275,
          duration: 0.25,
          delay: 0.025,
        }}
      />
    </AnimatePresence>
  );
};

export default ActiveIndicator;
