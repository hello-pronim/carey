import { styled } from "@styles/stitches";
import React, { useMemo } from "react";
import type * as Stitches from "@stitches/react";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  maxWidth: "2560px",
  mx: "auto",
  position: "relative",
  width: "100%",
});

const Grid = styled("div", {
  boxSizing: "border-box",
  columnGap: "16px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  maxWidth: 1920,
  mx: "24px",
  position: "relative",
  width: "100%",
  "@min600": {
    columnGap: "24px",
  },
  "@min768": {
    columnGap: "16px",
    gridTemplateColumns: "repeat(6, 1fr)",
    mx: "32px",
  },
  "@min1024": {
    columnGap: "16px",
    gridTemplateColumns: "repeat(12, 1fr)",
    mx: "40px",
  },
  "@min1440": {
    columnGap: "24px",
    mx: "56px",
  },
  "@min1660": {
    columnGap: "32px",
  },
  "@min1920": {
    columnGap: 40,
    mx: "80px",
  },
});

const Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  maxWidth: 1920,
  mx: "24px",
  position: "relative",
  width: "100%",
  "@min768": {
    mx: "32px",
  },
  "@min1024": {
    mx: "40px",
  },
  "@min1440": {
    mx: "56px",
  },
  "@min1920": {
    mx: "80px",
  },
});

const Unbound = styled("div", {
  width: "100%",
});

export const container = {
  outer: Wrapper,
  grid: Grid,
  flex: Flex,
};

const Container = ({
  children,
  outerCSS,
  innerCSS,
  type = "grid",
}: ContainerTypes) => {
  const Inner = useMemo(() => {
    if (type === "flex") return Flex;
    if (type === "grid") return Grid;
    if (type === "unbound") return Unbound;
    return Grid;
  }, [type]);

  return (
    <Wrapper css={outerCSS}>
      {
        //@ts-ignore
        <Inner type={type} css={type !== "unbound" && innerCSS}>
          {children}
        </Inner>
      }
    </Wrapper>
  );
};

/*
Container can either be used as a bundled component, 
which includes the inner wrapper as well as the outer container.

OR

By importing the container object, which will let you separate
the individual pieces of the container. This can be useful in the
case that you have content that needs to adhere to the maximum content width, 
but also have elements that sit outside of this grid and are designed to extend 
to the maximum width of the container.

Container Examples;

return (
  <Container>
    {...}
  </Container>
);

You may also specify the type of container, it accepts one of the following;
"grid", "flex", and "unbound".
Using the container with the grid is recommended in a majority of cases.
In the event that the element you're creating does not follow the rules of
the grid outlined in the design, providing <Container> the type="flex", will
maintain the margins and max width of the grid, but allow content to be arranged
freely with flex.

return (
  <Container type="flex">
    {...}
  </Container>
);

setting the type to unbound replaces the inner container with a React Fragment, this means
that the children of the container will have no width limit and is useful in the case of something
like a full width image.

Container also accepts props for outer, and inner css so if any modifications are needed,
you can target the intended element directly.

return (
  <Container outerCSS={{...}} innerCSS={{...}}>
    {...}
  </Container>
);

The container object also has access to the different types of inner container, just in a destructured
nature. As the object allows you to render the styled objects individually, outerCSS and innerCSS are not needed,
you can simply pass any overriding styles as css={{...}}, note: the css prop is not required, merely an option.

Container Object Examples;

return (
  <container.outer css={{...}}>
    <container.grid css={{...}}>
      {...}
    </container.grid>
  </container.outer>
);

return (
  <container.outer>
    <container.flex>
      {...}
    </container.flex>
  </container.outer>
)

the container object can also be used to create new styled components,
using the parts of the container as a baseline like this;

const NewContainer = styled(container.grid, {
...styles
});

When placing items in the grid, you use gridColumn to dictate where
the Element starts. i.e. The column that the left of the element is aligned to,
and how many columns that element is to cover / span.

Ex;

return (
  <Container>
    <Card css={{gridColumn: '2 / span 3'}}>
    {...}
    </Card>
  </Container>
);

In this example, the left side of the Card Component starts on column 2 and spans across 3 columns.
This results in the card starting at column 2, and ending on column 4.

*/

type ContainerTypes = {
  type?: "grid" | "flex" | "unbound";
  outerCSS?: Stitches.CSS;
  innerCSS?: Stitches.CSS;
  children: React.ReactNode;
};

export default Container;
