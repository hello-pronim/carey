import * as React from "react";
const OperatorIcon = ({ width = 24, ...props }) => (
  <>
    {props.type === "plus" ? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: width, height: "auto" }}
        {...props}
      >
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#051C3F" />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="-5 -11 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H0V0H14V2Z" fill="#323232" />
      </svg>
    )}
  </>
);
export default OperatorIcon;
