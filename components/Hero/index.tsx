import React, { useMemo } from "react";
import Plain from "./plain";
import General from "./general";
import Display from "./display";

const Hero = ({ type, ...props }) => {
  const Component = useMemo(() => {
    if (type === "plain") return Plain;
    if (type === "general") return General;
    if (type === "display") return Display;

    return null;
  }, [type]);

  return <Component {...props} />;
};

export default Hero;
