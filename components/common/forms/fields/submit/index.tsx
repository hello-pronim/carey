import React from "react";
import { Input } from "./styles";

const Submit = ({ disabled, value }: SubmitTypes) => {
  return <Input type="submit" disabled={disabled} value={value} />;
};

type SubmitTypes = {
  value: string;
  disabled?: boolean;
};

export default Submit;
