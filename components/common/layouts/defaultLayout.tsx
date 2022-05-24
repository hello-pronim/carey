import { Header, Footer } from "@components/common";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header navigation={props.navigation} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
