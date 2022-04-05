import React, { useState, useEffect, useRef } from "react";
import { usePrevious } from "react-use";
import { Text } from "@components/common";
import {
  ActiveIndicator,
  DrawerWrapper,
  NavItems,
  Primary,
  PrimaryItem,
  Secondary,
  Tertiary,
} from "./styles";

import { conditionalDrawer, drawer, primaryDrawer } from "./animations";
import Chevron from "@components/common/icons/chevron";
import { AnimatePresence, LayoutGroup } from "framer-motion";

const Drawer = ({ navigation }) => {
  const [secondaryNavigation, setSecondaryNavigation] = useState(null);
  const [tertiaryNavigation, setTertiaryNavigation] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePrimary, setActivePrimary] = useState("about-carey");
  const [activeSecondary, setActiveSecondary] = useState("");
  const [activeTertiary, setActiveTertiary] = useState("");

  const [activePriProps, setActivePriProps] = useState(null);
  const [activeScndProps, setActiveScndProps] = useState(null);
  // const [activeTrtProps, setActiveTrtProps] = useState(null);

  const prevPrimary = usePrevious(activePrimary);
  const prevSecondary = usePrevious(activeSecondary);

  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const tertiaryRef = useRef(null);

  useEffect(() => {
    if (primaryRef.current !== null) {
      setActivePriProps({
        top: primaryRef.current.offsetTop,
        left: primaryRef.current.offsetLeft,
        height: primaryRef.current.offsetHeight,
        width: primaryRef.current.offsetWidth,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryRef.current]);

  useEffect(() => {
    if (secondaryRef.current !== null) {
      setActiveScndProps({
        top: secondaryRef.current.offsetTop,
        left: secondaryRef.current.offsetLeft,
        height: secondaryRef.current.offsetHeight,
        width: secondaryRef.current.offsetWidth,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondaryRef.current]);

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

  const handleRefs = (id, active, ref) => {
    if (id === active) {
      return ref;
    }
    return null;
  };

  return (
    <DrawerWrapper
      variants={drawer}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onAnimationComplete={() => {
        setIsVisible(true);
      }}
    >
      <LayoutGroup>
        <Primary variants={primaryDrawer}>
          <NavItems>
            {navigation.map((item) => {
              return (
                <PrimaryItem
                  ref={handleRefs(item.id, activePrimary, primaryRef)}
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
          {activePriProps && (
            <ActiveIndicator
              initial={{
                opacity: 0,
                top: activePriProps.top,
                width: activePriProps.width,
                height: activePriProps.height,
              }}
              animate={
                isVisible && {
                  opacity: 1,
                  top: activePriProps.top,
                  width: activePriProps.width,
                  height: activePriProps.height,
                }
              }
            />
          )}
        </Primary>
        <AnimatePresence>
          {secondaryNavigation && (
            <Secondary
              custom={1}
              variants={conditionalDrawer}
              initial="hidden"
              animate={isVisible && "visible"}
              exit="exit"
            >
              {secondaryNavigation.map((item) => {
                return (
                  <PrimaryItem
                    ref={handleRefs(item.id, activeSecondary, secondaryRef)}
                    key={`secondary-${item.id}`}
                    active={item.id === activeSecondary}
                    onMouseOver={() => setActiveSecondary(item.id)}
                  >
                    <Text variant="Button-Large">{item.label}</Text>
                    {item.subItems && <Chevron />}
                  </PrimaryItem>
                );
              })}
              {activeScndProps && (
                <ActiveIndicator
                  initial={{
                    opacity: 0,
                    top: activeScndProps.top,
                    width: activeScndProps.width,
                    height: activeScndProps.height,
                  }}
                  animate={
                    activeSecondary && {
                      opacity: 1,
                      top: activeScndProps.top,
                      width: activeScndProps.width,
                      height: activeScndProps.height,
                    }
                  }
                />
              )}
            </Secondary>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {tertiaryNavigation && (
            <Tertiary
              variants={conditionalDrawer}
              initial="hidden"
              animate={isVisible && "visible"}
              exit="exit"
            >
              {tertiaryNavigation.map((item) => {
                return (
                  <PrimaryItem
                    key={`tertiary-${item.id}`}
                    ref={handleRefs(item.id, activeTertiary, tertiaryRef)}
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
        </AnimatePresence>
      </LayoutGroup>
    </DrawerWrapper>
  );
};

export default Drawer;
