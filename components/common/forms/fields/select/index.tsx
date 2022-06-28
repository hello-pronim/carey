import React from "react";
import ReactSelect from "react-select";
import { Controller } from "react-hook-form";
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
  control,
  searchable = false,
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
          {/* <ReactSelect
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
          /> */}
          <Controller
            control={control}
            name={name}
            rules={{ required: required }}
            render={({ field: { onChange, value, ref } }) => (
              <ReactSelect
                isSearchable={searchable}
                placeholder={
                  placeholder ? placeholder : "choose from the following"
                }
                styles={customStyles}
                className={error ? "error" : ""}
                ref={ref}
                options={items}
                value={items.find((c: any) => c.value === value)}
                onChange={(val: any) => onChange(val.value)}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 20,
                })}
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

type SelTypes = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  searchable?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  items: Array<object>;
  control?: any;
};

export default Select;
