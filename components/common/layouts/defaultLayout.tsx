import { Header, Footer } from "@components/common";
import { styled } from "@styles/stitches";

const Content = styled("div", {
  flex: 1,
  bg: "$background",
});

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header navigation={props.navigation} />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
