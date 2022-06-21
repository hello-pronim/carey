import { styled } from "@styles/stitches";
import React from "react";
import { Root as Portal } from "@radix-ui/react-portal";

const ModalWrapper = styled("div", {
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  width: "100vw",
  height: "100vh",
  bg: "$navy",
});

const Modal = ({ ...props }: ModalTypes) => {
  return (
    <Portal>
      <ModalWrapper>
        <p>boop</p>
      </ModalWrapper>
    </Portal>
  );
};

type ModalTypes = {};

export default Modal;
