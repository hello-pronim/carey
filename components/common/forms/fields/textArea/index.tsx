import { Text } from "@components/common";
import { AreaInput } from "./styles";

import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const TextArea = ({
  label,
  placeholder,
  required,
  error,
  disabled,
  hint,
}: TATypes) => {
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
          <AreaInput
            as="textarea"
            placeholder={!!placeholder ? placeholder : null}
            error={!!error}
            disabled={disabled}
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
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
};

export default TextArea;
