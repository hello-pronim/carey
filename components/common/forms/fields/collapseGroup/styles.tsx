import * as Collapsible from "@radix-ui/react-collapsible";
import { styled, keyframes } from "@styles/stitches";

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 },
});

const Container = styled(Collapsible.Root, {
  width: "100%",
});

const Header = styled(Collapsible.Trigger, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  cursor: "pointer",
});

const Content = styled(Collapsible.Content, {
  overflow: "hidden",
  '&[data-state="open"]': { animation: `${open} 200ms ease-in-out forwards` },
  '&[data-state="closed"]': {
    animation: `${close} 200ms ease-in-out forwards`,
  },
});

const Toggle = styled("div", {
  bg: "$white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  border: "1px solid $darkBlue400",
  borderRadius: "50%",
  svg: {},
});

const ToggleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: 16,
});

export { Container, Header, Content, Toggle, ToggleWrapper };
