import React from "react";
// import Link from "next/link";
import { Text } from "@components/common";

import {
  Wrapper,
  NavHeader,
  Accordion,
  // AccordionItem,
  // AccordionTrigger,
  // AccordionContent,
  NavSubHeader,
  SingleItem,
} from "./styles";

const EnrolmentSideNav = ({ activeStep }: EnrolmentSideNavTypes) => {
  return (
    <Wrapper>
      <NavHeader>
        <Text variant="Heading-Overline" css={{ textTransform: "uppercase" }}>
          Enrolment
        </Text>
      </NavHeader>
      <Accordion type="multiple" defaultValue={["start"]}>
        <NavSubHeader>
          <Text css={{ fontWeight: 700 }} variant="Body-Regular">
            Start
          </Text>
        </NavSubHeader>
        <SingleItem className={activeStep === 1 && "active"}>
          <Text variant="Body-Regular">Step 1: Student Details</Text>
        </SingleItem>
        <SingleItem className={activeStep === 2 && "active"}>
          <Text variant="Body-Regular">Step 2: Parent/Guardian Details</Text>
        </SingleItem>
        <SingleItem className={activeStep === 3 && "active"}>
          <Text variant="Body-Regular">Step 3: Carey Connection</Text>
        </SingleItem>
        <SingleItem className={activeStep === 4 && "active"}>
          <Text variant="Body-Regular">Step 4: Terms and Conditions</Text>
        </SingleItem>
        <SingleItem className={activeStep === 5 && "active"}>
          <Text variant="Body-Regular">Step 5: Review &amp; Payment</Text>
        </SingleItem>
        <SingleItem className={activeStep === 6 && "active"}>
          <Text variant="Body-Regular">Step 6: Confirm</Text>
        </SingleItem>
      </Accordion>
    </Wrapper>
  );
};

type EnrolmentSideNavTypes = {
  activeStep: number;
};

export default EnrolmentSideNav;
