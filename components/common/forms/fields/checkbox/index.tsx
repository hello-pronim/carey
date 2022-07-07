import { CheckIcon } from "@radix-ui/react-icons";
import { Controller } from "react-hook-form";
import { Text } from "@components/common";
import { theme } from "@styles/stitches";
import { Wrapper, Root, Indicator } from "./styles";
import { Subtext, Wrapper as Container } from "../sharedStyles";

const Checkbox = ({
  label,
  name,
  required,
  error,
  disabled,
  hint,
  control,
  outerCSS,
}: CheckboxTypes) => {
  const subtext = () => {
    let values = { text: undefined, color: undefined };
    (!!error && !!hint) || (!!error && !hint)
      ? (values = { text: error, color: "$warning" })
      : (values = { text: hint, color: "$navy300" });
    return values;
  };
  return (
    <Container css={outerCSS}>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field }) => (
          <Wrapper {...field} required={required} disabled={disabled}>
            <Root disabled={disabled} error={!!error}>
              <Indicator>
                <CheckIcon color={`${theme.colors.success}`} />
              </Indicator>
            </Root>
            <Text variant="Body-xSmall">{label}</Text>
          </Wrapper>
        )}
      />
      {(error || hint) && (
        <Subtext css={{ color: subtext().color }}>{subtext().text}</Subtext>
      )}
    </Container>
  );
};

type CheckboxTypes = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  hint?: string;
  outerCSS?: any;
  control?: any;
};

export default Checkbox;
