import { Controller } from "react-hook-form";
import { Text } from "@components/common";
import { Subtext, Wrapper as Container, Label } from "../sharedStyles";
import { Wrapper, RadioGroupRadio, RadioGroupIndicator, Root } from "./styles";

const RadioGroup = ({
  label,
  name,
  required,
  error,
  disabled,
  hint,
  control,
  items,
  outerCSS,
}: RadioTypes) => {
  const subtext = () => {
    let values = { text: undefined, color: undefined };
    (!!error && !!hint) || (!!error && !hint)
      ? (values = { text: error, color: "$warning" })
      : (values = { text: hint, color: "$navy300" });
    return values;
  };
  return (
    <Container>
      <Label required={required} disabled={disabled}>
        {label && <Text variant="Body-xSmall">{label}</Text>}
      </Label>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field: { onChange, value, ref } }) => (
          <Root
            value={value}
            onValueChange={(val: string) => {
              onChange(val);
            }}
            ref={ref}
            required={required}
            aria-label={label}
            css={outerCSS}
          >
            {items.map((item: any) => {
              return (
                <Wrapper key={`${name}-${item.value}`} disabled={disabled}>
                  <RadioGroupRadio
                    value={item.value}
                    error={!!error}
                    disabled={disabled}
                  >
                    <RadioGroupIndicator />
                  </RadioGroupRadio>
                  <Text variant="Body-xSmall">{item.label}</Text>
                </Wrapper>
              );
            })}
          </Root>
        )}
      />
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Container>
  );
};

type RadioTypes = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  control?: any;
  items: Array<{
    value: string;
    label: string;
  }>;
  outerCSS?: any;
};

export default RadioGroup;
