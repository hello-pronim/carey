import React, { SetStateAction } from "react";
import { useHover } from "@react-aria/interactions";
import Link from "next/link";
import { Text } from "@components/common";
import { NavItem as NavItemCore } from "./styles";
import Chevron from "@components/common/icons/chevron";

interface itemTypes {
  href?: string;
  variants?: {};
  item: {
    id: string;
    label: string;
    newTab: boolean;
    subItems: [itemTypes];
    url: string;
  };
  activeItem: HTMLElement | null;
  setActiveItem: React.Dispatch<SetStateAction<itemTypes["activeItem"]>>;
}

const Core = React.forwardRef(
  ({ item, href, activeItem, setActiveItem, variants }: itemTypes, ref) => {
    const { hoverProps } = useHover({
      onHoverStart: (el) => setActiveItem(el.target),
    });
    return (
      <NavItemCore
        {...ref}
        href={href}
        tabIndex={0}
        data-key={item.id}
        active={item.id === activeItem?.dataset?.key}
        onFocus={(el) => setActiveItem(el.currentTarget)}
        {...hoverProps}
        {...variants}
      >
        <Text variant="Button-Regular">{item.label}</Text>
        {item.subItems && <Chevron />}
      </NavItemCore>
    );
  }
);

Core.displayName = "Core";

const NavItem = (props) => {
  const { item } = props;
  if (item.url) {
    return (
      <Link href={item.url} passHref>
        <Core {...props} />
      </Link>
    );
  } else return <Core {...props} />;
};

export default NavItem;
