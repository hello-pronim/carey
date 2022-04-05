import { Header } from "@components/common";

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header navigation={props.navigation} />
      {children}
    </>
  );
};

export default Layout;
