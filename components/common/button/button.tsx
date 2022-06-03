import { useMemo, useState, Fragment } from "react";
import Link from "next/link";
import Root from "./styles";
import { Text } from "@components/common";
import MorphArrow from "@components/common/icons/morphArrow";
import Plus from "@components/common/icons/plus";

const Button = ({
  label,
  color,
  scale,
  type,
  theme,
  arrow = false,
  plus = false,
  disabled,
  fullWidth = false,
  href,
  onClick,
}: buttonTypes) => {
  const [hovered, setHovered] = useState(false);

  const labelType = useMemo(() => {
    if (scale === "xl") return "Button-Large";
    if (scale === "lg") return "Button-Regular";
    if (scale === "md") return "Button-Regular";
    if (scale === "sm") return "Body-Small";
    if (scale === "xs") return "Body-Small";
  }, [scale]);

  const Wrapper = useMemo(() => {
    if (href) return Link;
    if (!href) return Fragment;
  }, [href]);

  return (
    <Wrapper {...(href && { href: href, passHref: true })}>
      <Root
        as={href ? "a" : "button"}
        scale={scale}
        type={type}
        theme={theme}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        disabled={disabled}
        fullWidth={fullWidth}
        style={{ backgroundColor: color }}
      >
        {plus && <Plus />}
        <Text variant={labelType}>{label}</Text>
        {arrow && <MorphArrow hovered={hovered} />}
      </Root>
    </Wrapper>
  );
};

type buttonTypes = {
  label: string;
  scale?: "xl" | "lg" | "md" | "sm" | "xs";
  type?: "solid" | "outline" | "ghost";
  theme?: "light" | "dark" | "transparent";
  color?: string;
  plus?: boolean;
  arrow?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string | Object;
  onClick?: any;
};
export default Button;
