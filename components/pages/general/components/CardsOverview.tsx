import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { Container, Image, Button } from "@components/common";

const CardsOverview = (props) => {
  const ContentContainer = styled("div", {
    display: "grid",
    gap: "24px",
    "@max480": {
      gridColumn: "1 / span 10",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@min480": {
      gridColumn: "1 / span 7",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@min1024": {
      gridColumn: "2 / span 10",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@min1440": {
      gridColumn: "1 / span 11",
    },
    "@min1920": {
      gridColumn: "2 / span 10",
    },
    "> div": {
      backgroundColor: "#FFFFFF",
      borderRadius: "4px",
      padding: "1.5rem",
      "@min1440": {
        padding: "2rem",
      },
    },
  });

  return (
    <Container type="grid">
      <ContentContainer
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
      >
        {props?.cardsetOverview?.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ marginBottom: "30px" }}>
                <Text variant="Heading-Overline" style={{ color: "#4D85B3" }}>
                  {item?.overheadline}
                </Text>
              </div>
              {item?.image?.length ? (
                <Image
                  alt={item?.image?.[0]?.title}
                  src={item?.image?.[0]?.url}
                  width={375}
                  height={375}
                  placeholder="empty"
                  layout="responsive"
                  fallback="random thing"
                  objectFit="cover"
                  priority
                  unoptimized
                />
              ) : null}
              {item?.linkToPage?.length ? (
                <>
                  <div style={{ marginTop: "24px", marginBottom: "48px" }}>
                    <Text
                      variant="Heading-Small"
                      style={{ color: "#051B3F", paddingTop: "24px" }}
                    >
                      {item?.linkToPage?.[0].title}
                    </Text>
                  </div>
                  <Button
                    arrow
                    label={item?.buttonLabel || "Read More"}
                    type="solid"
                    theme="light"
                    scale="md"
                    href={item?.linkToPage?.[0].uri}
                  />
                </>
              ) : null}
            </div>
          );
        })}
      </ContentContainer>
    </Container>
  );
};
export default CardsOverview;
