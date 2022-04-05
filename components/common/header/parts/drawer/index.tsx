import React, { useState, useEffect } from "react";
import { usePrevious } from "react-use";
import { Text } from "@components/common";
import {
  DrawerWrapper,
  NavItems,
  Primary,
  PrimaryItem,
  Secondary,
  Tertiary,
} from "./styles";
import { drawer, innerDrawers } from "./animations";
import Chevron from "@components/common/icons/chevron";
import { AnimatePresence } from "framer-motion";

const Drawer = ({ navigation }) => {
  const [secondaryNavigation, setSecondaryNavigation] = useState(null);
  const [tertiaryNavigation, setTertiaryNavigation] = useState(null);

  const [activePrimary, setActivePrimary] = useState("about-carey");
  const [activeSecondary, setActiveSecondary] = useState("");
  const [activeTertiary, setActiveTertiary] = useState("");

  const prevPrimary = usePrevious(activePrimary);
  const prevSecondary = usePrevious(activeSecondary);

  useEffect(() => {
    const hasSubItems = (navItems, activeItem) => {
      return !!navItems.find((item) => item.id === activeItem && item.subItems);
    };

    if (hasSubItems(navigation, activePrimary)) {
      setSecondaryNavigation(
        navigation.find((item) => item.id === activePrimary).subItems
      );
    } else if (!hasSubItems(navigation, activePrimary)) {
      setSecondaryNavigation(null);
    }
    if (activeSecondary && hasSubItems(secondaryNavigation, activeSecondary)) {
      setTertiaryNavigation(
        secondaryNavigation.find((item) => item.id === activeSecondary).subItems
      );
    } else if (
      activeSecondary &&
      !hasSubItems(secondaryNavigation, activeSecondary)
    ) {
      setTertiaryNavigation(null);
    }

    if (activePrimary && !hasSubItems(navigation, activePrimary)) {
      setActiveSecondary("");
      setActiveTertiary("");
      setTertiaryNavigation(null);
      setSecondaryNavigation(null);
    }
  }, [
    navigation,
    activePrimary,
    secondaryNavigation,
    activeSecondary,
    tertiaryNavigation,
    activeTertiary,
  ]);

  useEffect(() => {
    if (activePrimary !== prevPrimary) {
      setActiveSecondary(""), setTertiaryNavigation(null);
    }
    if (activeSecondary !== prevSecondary) {
      setActiveTertiary("");
    }
  }, [activePrimary, activeSecondary, prevPrimary, prevSecondary]);

  return (
    <DrawerWrapper
      variants={drawer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Primary variants={innerDrawers}>
        <NavItems>
          {navigation.map((item) => {
            return (
              <PrimaryItem
                key={`primary-${item.id}`}
                active={item.id === activePrimary}
                onMouseOver={() => setActivePrimary(item.id)}
              >
                <Text variant="Button-Large">{item.label}</Text>
                {item.subItems && <Chevron />}
              </PrimaryItem>
            );
          })}
        </NavItems>
      </Primary>
      <AnimatePresence>
        {secondaryNavigation && (
          <Secondary custom={1} variants={innerDrawers}>
            {secondaryNavigation.map((item) => {
              return (
                <PrimaryItem
                  key={`secondary-${item.id}`}
                  active={item.id === activeSecondary}
                  onMouseOver={() => setActiveSecondary(item.id)}
                >
                  <Text variant="Button-Large">{item.label}</Text>
                  {item.subItems && <Chevron />}
                </PrimaryItem>
              );
            })}
          </Secondary>
        )}
      </AnimatePresence>
      {/* <AnimatePresence> */}
      {tertiaryNavigation && (
        <Tertiary variants={innerDrawers} exit="hidden">
          {tertiaryNavigation.map((item) => {
            return (
              <PrimaryItem
                key={`tertiary-${item.id}`}
                active={item.id === activeTertiary}
                onMouseOver={() => setActiveTertiary(item.id)}
              >
                <Text variant="Button-Large">{item.label}</Text>
                {item.subItems && <Chevron />}
              </PrimaryItem>
            );
          })}
        </Tertiary>
      )}
      {/* </AnimatePresence> */}
    </DrawerWrapper>
  );
};

export default Drawer;
