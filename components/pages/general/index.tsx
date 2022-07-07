import React, { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import InvokeElement from "@utils/invokeElement";
import { BreadCrumb, Container } from "@components/common";
import SideNav from "@components/common/sideNav";
import Hero from "@components/Hero";
import Content from "./components/Content";
import ThreeColTable from "./components/ThreeColTable";
import TwoColTable from "./components/twoColTable";
import OneColTable from "./components/oneColTable";
import Accordion from "./components/Accordion";
import { BreadCrumbWrapper } from "./styles";
import TextContent from "./components/FeatureTextContent";
import CtaButton from "./components/CtaButton";
import FeatureTextBlock from "./components/FeatureTextBlock";
import TextImageContent from "./components/TextImageContent";
import MapView from "./components/MapView";
import SessionTimes from "./components/SessionTimes";
import TwoUpModule from "./components/TwoUpModule";
import ThreeUpModule from "./components/ThreeUpModule";
import OpenMorningsCard from "@components/common/cards/openMornings/Card";
import TextBlock from "@components/common/textBlock";
import OneUpImage from "./components/OneUpImage";
import SideNavContainer from "@components/common/sideNav/sideNavContainer";
import CardsSubjects from "./components/CardsSubjects";
import CardsOverview from "./components/CardsOverview";
import CardsCampuses from "./components/CardsCampuses";
import QuickLinksMenu from "./components/JumpTo";

const General = ({ pageData, slug, navigation, applyNow }) => {
  const router = useRouter();
  const [minHeight, setMinHeight] = useState(0);
  // Mostly just to make the Module Map look cleaner.
  const ModuleType = (type: string) => `generalComponents_${type}_BlockType`;

  const heroTypes = [
    "generalComponents_generalSideImage_BlockType",
    "generalComponents_generalSideCareyBrand_BlockType",
    "generalComponents_whyCarey_BlockType",
  ];

  const getHeroType = (type) => {
    switch (type) {
      case "generalComponents_generalSideImage_BlockType":
        return "general";
      case "generalComponents_generalSideCareyBrand_BlockType":
        return "plain";
      case "generalComponents_whyCarey_BlockType":
        return "display";
      default:
        return null;
    }
  };

  const heroData = pageData?.find((item) =>
    heroTypes.includes(item.__typename)
  );

  //remove hyphens from string and capitalize
  const getTitle = (str) => {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  //Assigns type name from content data to appropriate modules.
  const Modules = new Map([
    [ModuleType("contentBlock"), Content],
    [ModuleType("breakoutContent"), Content],
    [ModuleType("accordionsSet"), Accordion],
    [ModuleType("contentTextFeature"), TextContent],
    [ModuleType("ctaButton"), CtaButton],
    [ModuleType("featureTextBlock"), FeatureTextBlock],
    [ModuleType("contentTextImage"), TextImageContent],
    [ModuleType("contentTextFullBleedImage"), TextBlock],
    [ModuleType("mapBlock"), MapView],
    [ModuleType("threeColumnTable"), ThreeColTable],
    [ModuleType("twoColumnTable"), TwoColTable],
    [ModuleType("oneColumnTable"), OneColTable],
    [ModuleType("sessionTimeTable"), SessionTimes],
    [ModuleType("images1up"), OneUpImage],
    [ModuleType("images2up"), TwoUpModule],
    [ModuleType("images2upVideo"), TwoUpModule],
    [ModuleType("inlineGallery3up"), ThreeUpModule],
    [ModuleType("featuredPanel"), OpenMorningsCard],
    [ModuleType("cardsSubjects"), CardsSubjects],
    [ModuleType("cardsSectionOverview"), CardsOverview],
    [ModuleType("cardsCampuses"), CardsCampuses],
    [ModuleType("jumpTo"), QuickLinksMenu],
  ]);
  // Ignoring ts error on map for now as I couldn't find
  // an instance where the pageUri was ever not in an array
  // will revisit this later.
  const crumbs = [
    { path: "/", name: "Home" },
    // @ts-ignore
    ...router.query.pageUri?.map((item, idx) => {
      // Same deal as above
      // @ts-ignore
      const path = `/${router.query.pageUri.slice(0, idx + 1).join("/")}`;

      return { path: path, name: item && getTitle(item) };
    }),
  ];

  return (
    <>
      {heroData && getHeroType(heroData.__typename) && (
        <Hero
          type={getHeroType(heroData.__typename)}
          {...heroData}
          applyNow={applyNow}
        />
      )}
      <SideNavContainer>
        <SideNav
          minHeight={minHeight}
          setMinHeight={setMinHeight}
          activeSlug={slug}
          navigation={navigation}
        />
      </SideNavContainer>
      <Container>
        <BreadCrumbWrapper>
          <BreadCrumb crumbs={crumbs} pt={0} />
        </BreadCrumbWrapper>
      </Container>
      <Container
        type="unbound-flex"
        innerCSS={{ rowGap: 56, py: 56, minHeight: minHeight }}
      >
        {pageData?.map((module: any) => (
          <InvokeElement
            key={uuid()}
            el={module}
            type={module.__typename}
            map={Modules}
          />
        ))}
      </Container>
    </>
  );
};

export default General;
