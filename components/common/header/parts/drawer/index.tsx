import React, { useState, useEffect, useRef } from "react";
import { usePrevious } from "react-use";
import { Text } from "@components/common";
import ActiveIndicator from "./activeIndicator";
import {
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

const Drawer = ({ navigation, stuck }) => {
  const [secondaryNavigation, setSecondaryNavigation] = useState(null);
  const [tertiaryNavigation, setTertiaryNavigation] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePrimary, setActivePrimary] = useState("about-carey");
  const [activeSecondary, setActiveSecondary] = useState("");
  const [activeTertiary, setActiveTertiary] = useState("");

  const [activePriProps, setActivePriProps] = useState(null);
  const [activeScndProps, setActiveScndProps] = useState(null);
  const [activeTrtProps, setActiveTrtProps] = useState(null);

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
    if (tertiaryRef.current !== null) {
      setActiveTrtProps({
        top: tertiaryRef.current.offsetTop,
        left: tertiaryRef.current.offsetLeft,
        height: tertiaryRef.current.offsetHeight,
        width: tertiaryRef.current.offsetWidth,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTertiary]);

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
      stuck={stuck}
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
                  ref={item.id === activePrimary ? primaryRef : null}
                  key={`primary-${item.id}`}
                  active={item.id === activePrimary}
                  onMouseOver={(el) => (
                    setActivePrimary(item.id),
                    (primaryRef.current = el.currentTarget)
                  )}
                >
                  <Text variant="Button-Regular">{item.label}</Text>
                  {item.subItems && <Chevron />}
                </PrimaryItem>
              );
            })}
          </NavItems>
          {activePrimary && activePriProps && (
            <ActiveIndicator target={activePriProps} />
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
              <NavItems>
                {secondaryNavigation.map((item) => {
                  return (
                    <PrimaryItem
                      ref={item.id === activeSecondary ? secondaryRef : null}
                      key={`secondary-${item.id}`}
                      active={item.id === activeSecondary}
                      onMouseOver={(el) => (
                        setActiveSecondary(item.id),
                        (secondaryRef.current = el.currentTarget)
                      )}
                    >
                      <Text variant="Button-Regular">{item.label}</Text>
                      {item.subItems && <Chevron />}
                    </PrimaryItem>
                  );
                })}
              </NavItems>
              {activeSecondary && activeScndProps && (
                <ActiveIndicator target={activeScndProps} />
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
              <NavItems>
                {tertiaryNavigation.map((item) => {
                  return (
                    <PrimaryItem
                      key={`tertiary-${item.id}`}
                      ref={item.id === activeTertiary ? tertiaryRef : null}
                      active={item.id === activeTertiary}
                      onMouseOver={(el) => (
                        setActiveTertiary(item.id),
                        (tertiaryRef.current = el.currentTarget)
                      )}
                    >
                      <Text variant="Button-Regular">{item.label}</Text>
                      {item.subItems && <Chevron />}
                    </PrimaryItem>
                  );
                })}
              </NavItems>
              {activeTertiary && activeTrtProps && (
                <ActiveIndicator target={activeTrtProps} />
              )}
            </Tertiary>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </DrawerWrapper>
  );
};

export default Drawer;
