import React from "react";
// import ReactDatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { Text } from "@components/common";
import { DateInput } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const Date = ({
  label,
  name,
  placeholder,
  required,
  color = "white",
  error,
  disabled,
  hint,
  outerCSS,
  control,
}: DateTypes) => {
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
          <Controller
            control={control}
            name={name}
            rules={{ required: required }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateInput
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                error={!!error}
                placeholderText={placeholder}
                isClearable
                shouldCloseOnSelect
              />
            )}
          />
        </InputWrapper>
      </Label>
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Wrapper>
  );
};

type DateTypes = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  color?: string;
  hint?: string;
  outerCSS?: any;
  control?: any;
};

export default Date;
