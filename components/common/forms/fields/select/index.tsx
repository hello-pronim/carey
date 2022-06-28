import React from "react";
import Input from "react-select";
import customStyles from "./styles";
import { Text } from "@components/common";
import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const Select = ({
  label,
  name,
  required,
  placeholder,
  error,
  disabled,
  hint,
  items,
  register,
}: SelTypes) => {
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
        {label && (
          <Text variant="Body-xSmall">
            {label} {!required && <span>(optional)</span>}
          </Text>
        )}
        <InputWrapper>
          <Input
            isSearchable={false}
            placeholder={
              placeholder ? placeholder : "choose from the following"
            }
            styles={customStyles}
            options={items}
            isDisabled={disabled}
            {...register(name, {
              required: required,
              message: `${name} is required`,
            })}
          />
        </InputWrapper>
      </Label>
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Wrapper>
  );
};

type SelTypes = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  items: Array<object>;
  register?: any;
};

export default Select;
