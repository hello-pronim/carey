import Hero from "@components/Hero";
import React from "react";

const WhyCarey = ({ pageData, applyNow }) => {
  return (
    <Hero type="display" props={pageData?.whyCareyBanner} applyNow={applyNow} />
  );
};

export default WhyCarey;
