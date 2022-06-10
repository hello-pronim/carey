// MODULES COMMENTED OUT FOR NOW TILL WE CAN FIX THE CRAFT DB ROLLBACK

import React from "react";
import { v4 as uuid } from "uuid";
import InvokeElement from "@utils/invokeElement";
import { BreadCrumb, Container } from "@components/common";
import SideNav from "@components/common/sideNav";
import Hero from "@components/Hero";
import Content from "./components/Content";
// import ThreeColTable from "./components/ThreeColTable";
import Accordion from "./components/Accordion";
import { BreadCrumbWrapper } from "./styles";
// import SessionTimes from "./components/SessionTimes";

const General = ({ pageData, slug, navigation }) => {
  // Mostly just to make the Module Map look cleaner.
  const ModuleType = (type: string) => `generalComponents_${type}_BlockType`;

  //Assigns type name from content data to appropriate modules.
  const Modules = new Map([
    // [ModuleType("threeColumnTable"), ThreeColTable],
    [ModuleType("contentBlock"), Content],
    [ModuleType("breakoutContent"), Content],
    [ModuleType("accordionsSet"), Accordion],
    // [ModuleType("sessionTimes"), SessionTimes],
  ]);
  const crumbs = [{ path: "/", name: "Home" }, { name: "Life at Carey" }];

  return (
    <>
      <Hero type="general" />
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
