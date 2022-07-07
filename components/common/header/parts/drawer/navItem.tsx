import React from "react";
import { useHover } from "@react-aria/interactions";
import Link from "next/link";
import { Text } from "@components/common";
import { NavItem as NavItemCore } from "./styles";
import Chevron from "@components/common/icons/chevron";

// Will remove correctly in the future,
// only commenting out for now in case of run on side effects.

// interface itemTypes {
//   href?: string;
//   variants?: {};
//   item: {
//     id: string;
//     label: string;
//     newTab: boolean;
//     subItems: [itemTypes];
//     url: string;
//   };
//   activeItem: HTMLElement | null;
//   setActiveItem: React.Dispatch<SetStateAction<itemTypes["activeItem"]>>;
// }

// const Core = React.forwardRef(
//   (
//     { item, href, activeItem, setActiveItem, variants, ...props }: itemTypes,
//     ref
//   ) => {
//     const { hoverProps } = useHover({
//       onHoverStart: (el) => setActiveItem(el.target),
//     });
//     console.log(ref);
//     return (
//       <NavItemCore
//         {...ref}
//         href={href}
//         tabIndex={0}
//         data-key={item.id}
//         active={item.id === activeItem?.dataset?.key}
//         onFocus={(el) => setActiveItem(el.currentTarget)}
//         {...hoverProps}
//         {...variants}
//       >
//         <Text variant="Button-Regular">{item.label}</Text>
//         {item.subItems?.length > 0 && <Chevron />}
//       </NavItemCore>
//     );
//   }
// );

// Core.displayName = "Core";

const NavItem = (props) => {
  const { url } = props;
  const { hoverProps } = useHover({
    onHoverStart: (el) => props.setActiveItem(el.target),
  });

  return (
    <Link href={url} passHref>
      <NavItemCore
        tabIndex={0}
        data-key={props.item.id}
        active={props.item.id === props.activeItem?.dataset?.key}
        onFocus={(el) => props.setActiveItem(el.currentTarget)}
        {...hoverProps}
        {...props.variants}
      >
        <Text variant="Button-Regular">{props.item.label}</Text>
        {props.item.subItems?.length > 0 && <Chevron />}
      </NavItemCore>
    </Link>
  );
};

export default NavItem;
