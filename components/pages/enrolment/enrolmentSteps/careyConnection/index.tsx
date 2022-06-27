import React from "react";
import { useAppContext } from "@contexts/AppContext";
import { Button } from "@components/common";

const CareyConnection = ({}) => {
  const {
    state: { enrolmentDetails },
    dispatch,
  } = useAppContext();
  const { activeStep } = enrolmentDetails;
  const prevStep = () => {
    const value = {
      activeStep: activeStep - 1,
    };
    dispatch({
      type: "SET_ENROLMENT_DETAILS",
      value,
    });
  };
  const nextStep = () => {
    const value = {
      activeStep: activeStep + 1,
    };
    dispatch({
      type: "SET_ENROLMENT_DETAILS",
      value,
    });
  };
  return (
    <>
      <h2>Cary Connection</h2>
      <Button
        onClick={() => prevStep()}
        arrow
        label="Back"
        color="$crestYellow"
        type="solid"
        theme="transparent"
        variant="secondary"
        scale="xl"
      />
      <Button
        onClick={() => nextStep()}
        arrow
        label="Save & Continue"
        color="$crestYellow"
        type="solid"
        theme="transparent"
        variant="secondary"
        scale="xl"
      />
    </>
  );
};

export default CareyConnection;
