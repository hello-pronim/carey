import React from "react";
import DefaultCard from "./default/Card";
import LandscapeCard from "./landscape/Card";
import ApplicationFormCard from "./applicationForm/Card";

const EnrolmentCard = ({
  title,
  description,
  backgroundImage,
  studentImage,
  href = "#",
  type = "default",
  size = "small",
}: CardPropsType) => {
  return type === "default" ? (
    <DefaultCard
      title={title}
      description={description}
      backgroundImage={backgroundImage}
      studentImage={studentImage}
      href={href}
      size={size}
    />
  ) : type === "landscape" ? (
    <LandscapeCard
      title={title}
      description={description}
      backgroundImage={backgroundImage}
      studentImage={studentImage}
      href={href}
      size={size}
    />
  ) : type === "application-form" ? (
    <ApplicationFormCard
      title={title}
      description={description}
      backgroundImage={backgroundImage}
      studentImage={studentImage}
      href={href}
      size={size}
    />
  ) : (
    <></>
  );
};

type CardPropsType = {
  title: string;
  description: string;
  href?: string | Object;
  backgroundImage: string;
  studentImage: string;
  type?: "default" | "landscape" | "application-form" | any;
  size?: "small" | "large";
  landscape?: boolean;
};

export default EnrolmentCard;
