import Input from "react-select";
import customStyles from "./styles";
import { Text } from "@components/common";
import { Wrapper, Label, Subtext, InputWrapper } from "../sharedStyles";

const Select = ({
  label,
  required,
  error,
  disabled,
  hint,
  items,
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
        {label && <Text variant="Body-xSmall">{label}</Text>}
        <InputWrapper>
          <Input
            isSearchable={false}
            placeholder="choose from the following"
            styles={customStyles}
            options={items}
            isDisabled={disabled}
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
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  items: Array<object>;
};

export default Select;
