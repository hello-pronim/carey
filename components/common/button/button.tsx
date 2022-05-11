import { useMemo, useState, Fragment } from "react";
import Link from "next/link";
import Root from "./styles";
import { Text } from "@components/common";
import MorphArrow from "../icons/morphArrow";
import Plus from "../icons/plus";

const Button = ({
  label,
  scale,
  type,
  theme,
  arrow = false,
  plus = false,
  disabled,
  href,
  onClick,
}: buttonTypes) => {
  const [hovered, setHovered] = useState(false);

  const labelType = useMemo(() => {
    if (scale === "xl") return "Button-Large";
    if (scale === "lg") return "Button-Regular";
    if (scale === "md") return "Button-Regular";
    if (scale === "sm") return "Body-Small";
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
  theme?: "light" | "dark";
  plus?: boolean;
  arrow?: boolean;
  disabled?: boolean;
  href?: string | Object;
  onClick?: any;
};
export default Button;
