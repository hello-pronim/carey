import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1280 : 0,
    height: isSSR ? 800 : 0,
  });

  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    // Handler to call on window resize

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
