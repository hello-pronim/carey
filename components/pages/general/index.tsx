import React from "react";
import { v4 as uuid } from "uuid";
import InvokeElement from "./utils/invokeElement";
import { Container } from "@components/common";
import SideNav from "@components/common/sideNav";
import Hero from "@components/Hero";
import Content from "./components/Content";
// import ELCTable from "./components/ELCTable";
import Accordion from "./components/Accordion";

const General = ({ pageData }) => {
  // Mostly just to make the Module Map look cleaner.
  const ModuleType = (type) => `generalComponents_${type}_BlockType`;

  //Assigns type name from content data to appropriate modules.
  const Modules = new Map([
    // [ModuleType("learningCentre"), ELCTable],
    [ModuleType("contentBlock"), Content],
    [ModuleType("accordionsSet"), Accordion],
  ]);

  return (
    <>
      <Hero type="general" />
      <Container innerCSS={{ rowGap: 56, py: 56 }}>
        {pageData?.map((module) => (
          <InvokeElement
            key={uuid()}
            el={module}
            type={module.__typename}
            map={Modules}
          />
        ))}
        <SideNav />
      </Container>
    </>
  );
};

export default General;
