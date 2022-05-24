import React, { useState, useEffect } from "react";
import NavItem from "./navItem";
import { useWindowSize } from "react-use";
import { usePrevious } from "react-use";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import ActiveIndicator from "./activeIndicator";
import { conditionalDrawer, drawer, primaryDrawer } from "./animations";
import { getSubItems, getActiveProps } from "./utils";
import {
  DrawerWrapper,
  NavItems,
  Primary,
  Secondary,
  Tertiary,
} from "./styles";
import MobileDrawer from "./mobile";

const Drawer = ({ navigation, stuck }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [secondaryNavigation, setSecondaryNavigation] = useState(null);
  const [tertiaryNavigation, setTertiaryNavigation] = useState(null);

  const [activePrimary, setActivePrimary] = useState(null);
  const [activeSecondary, setActiveSecondary] = useState(null);
  const [activeTertiary, setActiveTertiary] = useState(null);

  const prevPrimary = usePrevious(activePrimary);
  const prevSecondary = usePrevious(activeSecondary);

  //makes the indicator resize on breakpoints
  useWindowSize();

  useEffect(() => {
    const initActiveItem = document?.querySelector("[data-key='about-carey']");
    setActivePrimary(initActiveItem);
  }, []);

  useEffect(() => {
    setSecondaryNavigation(getSubItems(navigation, activePrimary));
    setTertiaryNavigation(getSubItems(secondaryNavigation, activeSecondary));
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
                <NavItem
                  key={`primary-${item.id}`}
                  item={item}
                  activeItem={activePrimary}
                  setActiveItem={setActivePrimary}
                />
              );
            })}
          </NavItems>
          {getActiveProps(activePrimary) && (
            <ActiveIndicator target={getActiveProps(activePrimary)} />
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
                    <NavItem
                      key={`secondary-${item.id}`}
                      item={item}
                      activeItem={activeSecondary}
                      setActiveItem={setActiveSecondary}
                      variants={{ subItem: true }}
                    />
                  );
                })}
              </NavItems>
              {getActiveProps(activeSecondary) && (
                <ActiveIndicator target={getActiveProps(activeSecondary)} />
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
                    <NavItem
                      key={`tertiary-${item.id}`}
                      item={item}
                      activeItem={activeTertiary}
                      setActiveItem={setActiveTertiary}
                      variants={{ subItem: true }}
                    />
                  );
                })}
              </NavItems>
              {getActiveProps(activeTertiary) && (
                <ActiveIndicator target={getActiveProps(activeTertiary)} />
              )}
            </Tertiary>
          )}
        </AnimatePresence>
      </LayoutGroup>
      <MobileDrawer navigation={navigation} />
    </DrawerWrapper>
  );
};

export default Drawer;
