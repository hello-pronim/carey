import { Header, Footer } from "@components/common";
import { styled } from "@styles/stitches";

const Content = styled("div", {
  flex: 1,
  bg: "$background",
  margin: "0 auto",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: 2560,
});

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header
        navigation={props.navigation}
        headerNav={props.headerNav}
        headerGlobals={props.headerGlobals}
      />
      <Content>{children}</Content>
      <Footer
        footerNav={props.footerNav}
        footerGlobals={props.footerGlobals}
        sitemap={props.sitemap}
      />
    </>
  );
};

export default Layout;
