import React from "react";
import { styled, keyframes } from "@stitches/react";
import { blackA, mauve } from "@radix-ui/colors";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Text } from "@components/common";
import ApplyForm from "./applyForm";
import ResumeForm from "./resumeForm";
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
  zIndex: 9999,
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
export const StartApplicationCancel = AlertDialogPrimitive.Cancel;

export const ResumeApplication = AlertDialogPrimitive.Root;
export const ResumeApplicationTrigger = AlertDialogPrimitive.Trigger;
export const ResumeApplicationContent = Content;
export const ResumeApplicationTitle = StyledTitle;
export const ResumeApplicationDescription = StyledDescription;
export const ResumeApplicationCancel = AlertDialogPrimitive.Cancel;

const CloseButtonStyled = styled("button", {
  all: "unset",
  position: "absolute",
  right: 85,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 500,
  color: "$white",
  cursor: "pointer",
});

const ApplyResumeButton = ({
  resumeBttnTheme = "transparent",
}: ApplyResumeButtonTypes) => {
  return (
    <Div
      css={{
        display: "flex",
        mt: 80,
        justifyContent: "space-between",
        maxWidth: 560,
      }}
    >
      <StartApplication>
        <StartApplicationTrigger asChild>
          <Button
            arrow
            label="Start Application"
            color="$crestYellow"
            type="solid"
            theme="transparent"
            variant="secondary"
            scale="xl"
          />
        </StartApplicationTrigger>
        <StartApplicationContent>
          <StartApplicationCancel asChild>
            <CloseButtonStyled>
              Close{" "}
              <Cross2Icon style={{ marginLeft: 13 }} width={14} height={14} />
            </CloseButtonStyled>
          </StartApplicationCancel>
          <StartApplicationDescription>
            <Text as="h6" variant="Heading-Overline" style={{ color: "#fff" }}>
              APPLY ONLINE
            </Text>
            <Text
              as="h2"
              variant="Heading-Small"
              style={{ color: "#fff", paddingTop: "32px" }}
            >
              Start application
            </Text>
            <Text
              as="p"
              variant="Body-Regular"
              style={{ color: "#fff", paddingTop: "32px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscingaliquam, purus
              sit amet luctus venenatis, lecs magna.
            </Text>
          </StartApplicationDescription>
          <ApplyForm />
          <Button
            arrow
            label="Resume Application"
            color="transparent"
            type="solid"
            theme="light"
            variant="secondary"
            scale="xl"
          />
        </StartApplicationContent>
      </StartApplication>
      <ResumeApplication>
        <ResumeApplicationTrigger asChild>
          <Button
            arrow
            label="Resume Application"
            type="outline"
            theme={resumeBttnTheme}
            variant="secondary"
            scale="xl"
          />
        </ResumeApplicationTrigger>
        <ResumeApplicationContent>
          <ResumeApplicationCancel asChild>
            <CloseButtonStyled>
              Close{" "}
              <Cross2Icon style={{ marginLeft: 13 }} width={14} height={14} />
            </CloseButtonStyled>
          </ResumeApplicationCancel>
          <ResumeApplicationDescription>
            <Text as="h6" variant="Heading-Overline" style={{ color: "#fff" }}>
              APPLY ONLINE
            </Text>
            <Text
              as="h2"
              variant="Heading-Small"
              style={{ color: "#fff", paddingTop: "32px" }}
            >
              Resume application
            </Text>
            <Text
              as="p"
              variant="Body-Regular"
              style={{ color: "#fff", paddingTop: "32px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscingaliquam, purus
              sit amet luctus venenatis, lecs magna.
            </Text>
          </ResumeApplicationDescription>
          <ResumeForm />
          <Div
            css={{
              color: "$white",
              display: "inline-flex",
              alignItems: "center",
              fontSize: 20,
            }}
          >
            Forgot
            <Button
              label="email address"
              color="transparent"
              type="solid"
              theme="light"
              variant="secondary"
              scale="xl"
              css={{
                pt: 0,
                pb: 0,
                pl: 10,
                pr: 10,
                textDecoration: "underline",
                color: "$white",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            />
            or
            <Button
              arrow
              label="Unique ID"
              color="transparent"
              type="solid"
              theme="light"
              variant="secondary"
              scale="xl"
              css={{
                pt: 0,
                pb: 0,
                pl: 10,
                textDecoration: "underline",
                color: "$white",
                fontFamily: "$poppins",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
            />
          </Div>
        </ResumeApplicationContent>
      </ResumeApplication>
    </Div>
  );
};

type ApplyResumeButtonTypes = {
  resumeBttnTheme?: "light" | "dark" | "transparent";
};

export default ApplyResumeButton;
