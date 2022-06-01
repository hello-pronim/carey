import { motion } from "framer-motion";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";

const Column = styled("div", {
  width: "100%",
  "@min768": {
    flex: "0 0 33.3%",
  },
  "@min1024": {
    flex: 1,
  },
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "10px 20px",
});

const Container = styled(motion.div, {
  boxSizing: "border-box",
  overflow: "hidden",
});

const HeadingText = styled(Text, {
  color: "$white",
  cursor: "pointer",
  "&:hover": {
    color: "$crestBlue400",
  },
});

const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  gap: 20,
});

const ListItemText = styled(Text, {
  color: "$crestBlue200",
  fontSize: "12px",
});

const ListItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  gap: 20,
  "&:hover": {
    span: {
      color: "$crestBlue400",
    },
  },
  ul: {
    paddingLeft: 8,
    li: {
      ":hover": {
        a: {
          color: "$crest400",
        },
      },
      a: {
        color: "$white",
      },
    },
  },
  a: {
    textDecoration: "none",
  },
});

const Wrapper = styled(motion.div, {
  display: "flex",
  flexWrap: "wrap",
  padding: "48px 0",
  rowGap: 40,
});

export {
  Column,
  ColumnContainer,
  Container,
  HeadingText,
  List,
  ListItem,
  ListItemText,
  Wrapper,
};
