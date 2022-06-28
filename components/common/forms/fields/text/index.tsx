import { useState } from "react";
import { Text } from "@components/common";
import { Controller } from "react-hook-form";
import { Input, PassToggle } from "./styles";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const TextField = ({
  label,
  name,
  placeholder,
  required,
  color = "white",
  error,
  disabled,
  type = "text",
  hint,
  outerCSS,
  register,
  control,
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
            {label} {!required && <span>(optional)</span>}
          </Text>
        )}
        <InputWrapper>
          {type === "email" && (
            <Input
              type={handleType(type)}
              placeholder={!!placeholder ? placeholder : null}
              error={!!error}
              disabled={disabled}
              {...register(name, {
                required: required,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
            />
          )}
          {type !== "email" && (
            // <Input
            //   type={handleType(type)}
            //   placeholder={!!placeholder ? placeholder : null}
            //   error={!!error}
            //   disabled={disabled}
            //   {...register(name, {
            //     required: required,
            //     message: `${name} is required`,
            //   })}
            // />
            <Controller
              control={control}
              name={name}
              rules={{ required: required }}
              render={({ field }) => (
                <Input
                  {...field}
                  type={handleType(type)}
                  placeholder={
                    placeholder ? placeholder : "choose from the following"
                  }
                />
              )}
            />
          )}
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
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  color?: string;
  type?: "text" | "tel" | "email" | "number" | "password" | "date";
  hint?: string;
  outerCSS?: any;
  register?: any;
  control?: any;
};

export default TextField;
