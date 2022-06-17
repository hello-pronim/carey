import React from "react";

const HeroIcons = ({ type }) => {
  return (
    <>
      {type === "video" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM20 33V15L32 24L20 33Z"
            fill="#FFCC00"
          />
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 28 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 12H20V0H8V12H0L14 26L28 12ZM12 16V4H16V16H18.34L14 20.34L9.66 16H12ZM0 30H28V34H0V30Z"
            fill="#FFCC00"
          />
        </svg>
      )}
    </>
  );
};
export default HeroIcons;
