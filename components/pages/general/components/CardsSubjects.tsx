import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { Container } from "@components/common";

const CardsSubjects = (props) => {
  const ContentContainer = styled("div", {
    display: "grid",
    gap: "24px",
    "@max480": {
      gap: "16px",
      gridTemplateColumns: "1fr 1fr",
      gridColumn: "1 / span 6",
    },
    "@min480": {
      gap: "16px",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridColumn: "1 / span 6",
    },
    "@min1024": {
      gridColumn: "2 / span 6",
    },
    "@min1440": {
      gridColumn: "1 / span 6",
    },
    "@min1920": {
      gridColumn: "2 / span 5",
    },

    [`> ${Text}`]: {
      backgroundColor: "#FFFFFF",
      borderRadius: "6px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "148px",
      color: "black",
    },
  });

  return (
    <Container type="grid">
      <ContentContainer>
        {props?.cardsetSubject?.map((item, index) => {
          return (
            <Text variant={"Body-Large"} key={index}>
              {item?.subjectTitle}
            </Text>
          );
        })}
      </ContentContainer>
    </Container>
  );
};
export default CardsSubjects;
