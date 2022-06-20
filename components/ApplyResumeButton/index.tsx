import React from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, red, mauve } from "@radix-ui/colors";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Button, Text } from "@components/common";
import { Div } from "./styles";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: "$navy",
  borderRadius: 0,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "850px",
  maxHeight: "85vh",
  padding: 80,
  zIndex: 9999,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 17,
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

export const StartApplication = AlertDialogPrimitive.Root;
export const StartApplicationTrigger = AlertDialogPrimitive.Trigger;
export const StartApplicationContent = Content;
export const StartApplicationTitle = StyledTitle;
export const StartApplicationDescription = StyledDescription;
export const StartApplicationAction = AlertDialogPrimitive.Action;
export const StartApplicationCancel = AlertDialogPrimitive.Cancel;

export const ResumeApplication = AlertDialogPrimitive.Root;
export const ResumeApplicationTrigger = AlertDialogPrimitive.Trigger;
export const ResumeApplicationContent = Content;
export const ResumeApplicationTitle = StyledTitle;
export const ResumeApplicationDescription = StyledDescription;
export const ResumeApplicationAction = AlertDialogPrimitive.Action;
export const ResumeApplicationCancel = AlertDialogPrimitive.Cancel;

const ButtonStyled = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: red.red4,
        color: red.red11,
        "&:hover": { backgroundColor: red.red5 },
        "&:focus": { boxShadow: `0 0 0 2px ${red.red7}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        "&:hover": { backgroundColor: mauve.mauve5 },
        "&:focus": { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
    },
  },

  defaultVariants: {
    variant: "violet",
  },
});

const ApplyResumeButton = ({}) => {
  return (
    <Div css={{ display: "flex", mt: 80 }}>
      <StartApplication>
        <StartApplicationTrigger asChild>
          <Button
            arrow
            label="Start Application"
            color="$crestYellow"
            type="outline"
            theme="transparent"
            variant="secondary"
            scale="xl"
            href="#"
          />
        </StartApplicationTrigger>
        <StartApplicationContent>
          <StartApplicationCancel asChild>
            <ButtonStyled variant="mauve" css={{ marginRight: 25 }}>
              Close
            </ButtonStyled>
          </StartApplicationCancel>
          <StartApplicationDescription>
            <Text as="h6" variant="Heading-Overline" style={{ color: "#fff" }}>
              APPLY ONLINE
            </Text>
            <Text as="h2" variant="Heading-Small" style={{ color: "#fff" }}>
              Start application
            </Text>
            <Text as="p" variant="Body-Regular" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscingaliquam, purus
              sit amet luctus venenatis, lecs magna.
            </Text>
          </StartApplicationDescription>
        </StartApplicationContent>
      </StartApplication>
      <ResumeApplication>
        <ResumeApplicationTrigger asChild>
          <Button
            arrow
            label="Resume Application"
            type="outline"
            theme="transparent"
            variant="secondary"
            scale="xl"
            href="#"
          />
        </ResumeApplicationTrigger>
        <ResumeApplicationContent>
          <ResumeApplicationCancel asChild>
            <ButtonStyled variant="mauve" css={{ marginRight: 25 }}>
              Close
            </ButtonStyled>
          </ResumeApplicationCancel>
          <ResumeApplicationDescription>
            <Text as="h6" variant="Heading-Overline" style={{ color: "#fff" }}>
              APPLY ONLINE
            </Text>
            <Text as="h2" variant="Heading-Small" style={{ color: "#fff" }}>
              Resume application
            </Text>
            <Text as="p" variant="Body-Regular" style={{ color: "#fff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscingaliquam, purus
              sit amet luctus venenatis, lecs magna.
            </Text>
          </ResumeApplicationDescription>
        </ResumeApplicationContent>
      </ResumeApplication>
    </Div>
  );
};

export default ApplyResumeButton;
