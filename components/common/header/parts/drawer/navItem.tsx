import React, { SetStateAction } from "react";
import Link from "next/link";
import { Text } from "@components/common";
import { PrimaryItem } from "./styles";
import Chevron from "@components/common/icons/chevron";

interface itemTypes {
  href?: string;
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
  ({ item, href, activeItem, setActiveItem }: itemTypes, ref) => {
    return (
      <PrimaryItem
        {...ref}
        href={href}
        tabIndex={0}
        data-key={item.id}
        active={item.id === activeItem?.dataset?.key}
        onFocus={(el) => setActiveItem(el.currentTarget)}
        onMouseOver={(el) => setActiveItem(el.currentTarget)}
        onClick={(e) => {
          e.preventDefault(), console.log("yeet");
        }}
      >
        <Text variant="Button-Regular">{item.label}</Text>
        {item.subItems && <Chevron />}
      </PrimaryItem>
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
