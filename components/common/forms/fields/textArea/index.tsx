import { Controller } from "react-hook-form";
import { Text } from "@components/common";
import { AreaInput } from "./styles";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const TextArea = ({
  label,
  name,
  placeholder,
  required,
  error,
  disabled,
  hint,
  control,
  outerCSS,
}: TATypes) => {
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
        {label && <Text variant="Body-xSmall">{label}</Text>}
        <InputWrapper>
          <Controller
            control={control}
            name={name}
            rules={{ required: required }}
            render={({ field }) => (
              <AreaInput
                {...field}
                as="textarea"
                placeholder={!!placeholder ? placeholder : null}
                error={!!error}
                disabled={disabled}
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

type TATypes = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  outerCSS?: any;
  control?: any;
};

export default TextArea;
