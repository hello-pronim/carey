import { Text } from "@components/common";
import { useState } from "react";
import { Input, PassToggle } from "./styles";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const TextField = ({
  label,
  placeholder,
  required,
  color = "white",
  error,
  disabled,
  type = "text",
  hint,
  outerCSS,
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
    <Wrapper css={outerCSS}>
      <Label required={required} disabled={disabled}>
        {label && (
          <Text style={{ color: color }} variant="Body-xSmall">
            {label}
          </Text>
        )}
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
  color?: string;
  type?: "text" | "tel" | "email" | "number" | "password";
  hint?: string;
  outerCSS?: any;
};

export default TextField;
