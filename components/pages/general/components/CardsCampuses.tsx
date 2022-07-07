import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { Container, Image, Button } from "@components/common";

const CardsCampuses = (props) => {
  const ContentContainer = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumn: "1 / span 10",
    rowGap: "56px",
    "@min768": {
      gridColumn: "1 / span 7",
    },
    "@min1024": {
      gridColumn: "2 / span 10",
    },
    "@min1440": {
      gridColumn: "1 / span 7",
    },
    "@min1920": {
      gridColumn: "2 / span 10",
    },
    "> div": {
      backgroundColor: "#FFFFFF",
    },
  });

  const ContentWrapper = styled("div", {
    display: "flex",
    "@max768": {
      flexDirection: "column",
    },
    gridColumn: "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
  });

  const ImageWrapper = styled("div", {
    height: "100%",
    span: {
      height: "100% !important",
      width: "100% !important",
    },
  });

  const LeftSection = styled("div", {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s all",
    "&:hover": {
      backgroundColor: "#F6F6F6",
    },
  });
  const RightSection = styled("div", {
    width: "100%",
    height: "100%",
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
        {props?.cardsetCampuses?.map((item, index) => {
          return (
            <ContentWrapper key={index}>
              <LeftSection>
                <div style={{ padding: "32px" }}>
                  <Text variant="Heading-Small">{item?.cardTitle}</Text>
                  <br />
                  <br />
                  <Text variant="Body-Regular">{item?.cardContent}</Text>
                </div>
                {item?.buttonLink?.length ? (
                  <div style={{ padding: "32px" }}>
                    <Button
                      arrow
                      label={item?.buttonLabel}
                      type="outline"
                      theme="light"
                      scale="md"
                      href={item?.buttonLink?.[0].uri}
                    />
                  </div>
                ) : null}
              </LeftSection>

              {item?.campusImage?.length ? (
                <RightSection>
                  <ImageWrapper>
                    <Image
                      alt="principal"
                      width={item?.campusImage?.[0]?.width}
                      height={item?.campusImage?.[0]?.height}
                      layout="responsive"
                      objectFit="cover"
                      priority
                      src={item?.campusImage?.[0]?.url}
                    />
                  </ImageWrapper>
                </RightSection>
              ) : null}
            </ContentWrapper>
          );
        })}
      </ContentContainer>
    </Container>
  );
};
export default CardsCampuses;
