import { Text } from "@components/common";
import { useState } from "react";
import { Input, PassToggle } from "./styles";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const TextField = ({
  label,
  placeholder,
  required,
  error,
  disabled,
  type = "text",
  hint,
}: TFTypes) => {
  const [passVisible, setPassVisible] = useState(false);

  const handleType = (type) => {
    if (type === "password" && passVisible === false) {
      return "password";
    }
    if (type === "password" && passVisible === true) {
      return "text";
    }
    return type;
  };

  const subtext = () => {
    let values = { text: undefined, color: undefined };
    (!!error && !!hint) || (!!error && !hint)
      ? (values = { text: error, color: "$warning" })
      : (values = { text: hint, color: "$navy300" });
    return values;
  };

  return (
    <Wrapper>
      <Label required={required} disabled={disabled}>
        {label && <Text variant="Body-xSmall">{label}</Text>}
        <InputWrapper>
          <Input
            type={handleType(type)}
            placeholder={!!placeholder ? placeholder : null}
            error={!!error}
            disabled={disabled}
          />
          {type === "password" && (
            <PassToggle
              onClick={(e) => {
                e.preventDefault(), setPassVisible(!passVisible);
              }}
            >
              <Text>{passVisible ? "Hide" : "Show"}</Text>
            </PassToggle>
          )}
        </InputWrapper>
      </Label>
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Wrapper>
  );
};

type TFTypes = {
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  type?: "text" | "tel" | "email" | "number" | "password";
  hint?: string;
};

export default TextField;
