import React, { useMemo } from "react";
import Plain from "./plain";
import General from "./general";

const Hero = ({ type, ...props }) => {
  const Component = useMemo(() => {
    if (type === "plain") return Plain;
    if (type === "general") return General;
    return null;
  }, [type]);

  return <Component {...props} />;
};

export default Hero;
