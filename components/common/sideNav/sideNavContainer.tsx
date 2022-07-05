import Container from "../container/container";

const SideNavContainer = ({ children }) => {
  return (
    <Container
      outerCSS={{
        position: "sticky",
        zIndex: 90,
        top: 80,
        transition: "ease all 0.3s",
        "@min1024": {
          top: 104,
        },
        "@min1440": {
          top: "unset",
          display: "flex",
          position: "absolute",
          zIndex: 2,
        },
        pointerEvents: "none",
      }}
      innerCSS={{
        "@max1440": {
          mx: "unset",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default SideNavContainer;
