// MODULES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK

import React from "react";
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

const General = ({ pageData, slug, navigation, applyNow }) => {
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

  //Assigns type name from content data to appropriate modules.
  const Modules = new Map([
    [ModuleType("contentBlock"), Content],
    [ModuleType("breakoutContent"), Content],
    [ModuleType("accordionsSet"), Accordion],
    [ModuleType("contentTextFeature"), TextContent],
    [ModuleType("ctaButton"), CtaButton],
    [ModuleType("featureTextBlock"), FeatureTextBlock],
    [ModuleType("contentTextImage"), TextImageContent],
    [ModuleType("mapBlock"), MapView],
    [ModuleType("threeColumnTable"), ThreeColTable],
    [ModuleType("twoColumnTable"), TwoColTable],
    [ModuleType("oneColumnTable"), OneColTable],
    [ModuleType("sessionTimeTable"), SessionTimes],
    [ModuleType("images2up"), TwoUpModule],
    [ModuleType("images2upVideo"), TwoUpModule],
    [ModuleType("inlineGallery3up"), ThreeUpModule],
  ]);
  const crumbs = [{ path: "/", name: "Home" }, { name: "Life at Carey" }];
  return (
    <>
      {heroData && getHeroType(heroData.__typename) && (
        <Hero
          type={getHeroType(heroData.__typename)}
          props={heroData}
          applyNow={applyNow}
        />
      )}
      <Container type="flex">
        <BreadCrumbWrapper>
          <BreadCrumb crumbs={crumbs} pt={0} />
        </BreadCrumbWrapper>
      </Container>
      <Container innerCSS={{ rowGap: 56, py: 56 }}>
        {pageData?.map((module: any) => (
          <InvokeElement
            key={uuid()}
            el={module}
            type={module.__typename}
            map={Modules}
          />
        ))}
        <SideNav activeSlug={slug} navigation={navigation} />
      </Container>
    </>
  );
};

export default General;
