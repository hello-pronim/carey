import React from "react";
import Link from "next/link";
import { Text, Button, Container } from "@components/common";
import { styled } from "@styles/stitches";

const QuickLinksMenu = ({ jumpToBlock }) => {
  const JumpTo = styled("div", {
    width: "auto",
    backgroundColor: "#FFFFFF",
    padding: "32px 24px 16px 24px",
    "@max768": {
      gridColumn: "1 / span 4",
    },
    "@min768": {
      p: "32px 32px 16px",
      gridColumn: "1 / span 4",
    },
    "@min1440": {
      gridColumn: "1 / span 3",
    },
    "@min1920": {
      p: "56px 56px 32px",
      gridColumn: "2 / span 3",
    },
  });

  const JumpToList = styled("ul", {
    listStyle: "none",
    paddingLeft: 0,
    mb: 0,
    mt: 0,
    "@min768": {
      mt: 16,
    },
    "@min1024": {
      mt: 16,
    },
    "@min1440": {
      mt: 16,
    },
    "@min1920": {
      mt: 24,
    },
  });

  const JumpToListItem = styled("li", {
    borderBottom: "1px solid #B3CBDE",
    padding: "16px 0",
    "> a": {
      paddingLeft: 0,
    },
    "> a, > button": {
      flexDirection: "row-reverse",
      px: 0,
      justifyContent: "start",
      height: "auto",
      lineHeight: 1,
    },
    "&:last-of-type": {
      borderBottom: "none",
    },
  });

  return (
    <Container>
      <JumpTo>
        <Text as="h3" variant="Heading-xSmall" css={{ fontWeight: "$medium" }}>
          Jump To
        </Text>
        <JumpToList>
          {jumpToBlock?.map((item, index) => {
            return (
              <JumpToListItem key={index}>
                <Link href={`#${item?.anchorSlug}`} passHref>
                  <Button
                    arrow
                    theme="transparent"
                    type="ghost"
                    scale="md"
                    label={item.title}
                  />
                </Link>
              </JumpToListItem>
            );
          })}
        </JumpToList>
      </JumpTo>
    </Container>
  );
};

export default QuickLinksMenu;
