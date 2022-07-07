import React from "react";
import Container from "@components/common/container/container";

import DefaultCard from "./default/Card";
import LandscapeCard from "./landscape/Card";

const EnrolmentCard = ({
  href = "#",
  panelVariant,
  featuredPanel,
}: CardPropsType) => {
  const [panel] = featuredPanel;

  return (
    <Container>
      {panelVariant === "small" ? (
        <div style={{ gridColumn: "2 / span 4" }}>
          <DefaultCard
            title={panel.title}
            description={panel.panelContent}
            backgroundImage={panel.backgroundGradient?.[0]?.url}
            studentImage={panel.imageOfStudent?.[0]?.url}
            href={href}
            size="small"
          />
        </div>
      ) : panelVariant === "large" ? (
        <div style={{ gridColumn: "2 / span 6" }}>
          <DefaultCard
            title={panel.title}
            description={panel.panelContent}
            backgroundImage={panel.backgroundGradient?.[0]?.url}
            studentImage={panel.imageOfStudent?.[0]?.url}
            href={href}
            size="large"
          />
        </div>
      ) : panelVariant === "landscape" ? (
        <div style={{ gridColumn: "1 / span 12" }}>
          <LandscapeCard
            title={panel.title}
            description={panel.panelContent}
            backgroundImage={panel.backgroundGradient?.[0].url}
            studentImage={panel.imageOfStudent?.[0].url}
            href={href}
          />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

type CardPropsType = {
  href?: string | Object;
  featuredPanel: any;
  panelVariant?: "small" | "large" | "landscape" | any;
};

export default EnrolmentCard;
