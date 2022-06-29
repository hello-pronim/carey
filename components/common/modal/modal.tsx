import { styled } from "@styles/stitches";
import { motion, AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { Root as Portal } from "@radix-ui/react-portal";
import { Container, Text } from "@components/common";
import Cross from "@components/common/icons/cross";

const ModalWrapper = styled(motion.div, {
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  py: 32,
  width: "100vw",
  height: "100vh",
  bg: "$navy",
  boxSizing: "border-box",
});

const CloseButton = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  gridColumn: 12,
  alignSelf: "start",
  p: 8,
  columnGap: 8,
  cursor: "pointer",
});

const Modal = ({ children, active, setModalActive, ...props }: ModalTypes) => {
  return (
    <AnimatePresence>
      {active && (
        <Portal>
          <ModalWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container
              outerCSS={{ height: "100%" }}
              innerCSS={{ alignItems: "center" }}
            >
              <CloseButton onClick={() => setModalActive(false)}>
                <Text
                  css={{
                    position: "relative",
                    top: "0.08em",
                    color: "$crestBlue600",
                  }}
                  variant="Button-Large"
                >
                  close
                </Text>
                <Cross />
              </CloseButton>
              {children}
            </Container>
          </ModalWrapper>
        </Portal>
      )}
    </AnimatePresence>
  );
};

type ModalTypes = {
  children: React.ReactNode;
  active: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;
};

export default Modal;
