import Chevron from "@components/common/icons/chevron";
import { Text } from "@components/common";
import { ReactNode, useState } from "react";
import { Container, Header, Content, Toggle, ToggleWrapper } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

const CollapseGroup = ({
  label,
  defaultOpen = false,
  children,
}: CheckboxTypes) => {
  const [toggled, setToggled] = useState(defaultOpen);

  return (
    <>
      <Container
        id={label}
        aria-label={label}
        defaultOpen={defaultOpen}
        onOpenChange={() => setToggled(!toggled)}
      >
        <Header>
          <Text as="h3" variant="Heading-Large">
            {label}
          </Text>
          <ToggleWrapper>
            <AnimatePresence>
              {!toggled && (
                <Text
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  as={motion.span}
                  variant="Body-xSmall"
                >
                  Edit details
                </Text>
              )}
            </AnimatePresence>
            <Toggle>
              <Chevron direction="down" toggleState={toggled} />
            </Toggle>
          </ToggleWrapper>
        </Header>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

type CheckboxTypes = {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default CollapseGroup;
