import React from "react";
import Link from "next/link";
import {
  ActiveLinkText,
  BottomBarInner,
  DotSeparator,
  EllipsisDots,
  LinkWrapper,
} from "./styles";

const Breadcrumb = ({ crumbs, pt = 130, pb = 0, pl = 0 }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  const renderCrumbSeparator = (crumbs: any, index: number) => {
    return index !== crumbs.length - 1 ? (
      <DotSeparator> • </DotSeparator>
    ) : (
      <></>
    );
  };

  return (
    <BottomBarInner css={{ pt, pb, pl }}>
      {crumbs.map(({ name, path }, index: number) => {
        if (path) {
          return (
            <LinkWrapper key={`crumb-${index}`}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
              {renderCrumbSeparator(crumbs, index)}
            </LinkWrapper>
          );
        }
        return (
          <>
            <EllipsisDots>•••</EllipsisDots>
            <LinkWrapper key={`crumb-${index}`}>
              <ActiveLinkText>
                {name} {renderCrumbSeparator(crumbs, index)}
              </ActiveLinkText>
            </LinkWrapper>
          </>
        );
      })}
    </BottomBarInner>
  );
};

export default Breadcrumb;
