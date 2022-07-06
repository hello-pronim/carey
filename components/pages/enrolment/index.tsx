import React from "react";
// import { styled } from "@stitches/react";
// import { blackA } from "@radix-ui/colors";
import Hero from "@components/Hero";
// import { Wrapper } from "./styles";
import { Container } from "@components/common";
// import { Text, Accordians } from "@components/common";
// import ApplyResumeButton from "@components/common/applyResumeButton";
import EnrolmentSideNav from "@components/common/enrolmentSideNav";
import { useAppContext } from "@contexts/AppContext";
import { LeftContent } from "./styles";
//import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

import {
  StudentDetails,
  ParentDetails,
  CareyConnection,
  TermsConditions,
  ReviewPayment,
  Confirm,
} from "./enrolmentSteps";

//export const AspectRatio = AspectRatioPrimitive;

interface EnrolmentProps {
  dataGender: Array<any>;
  dataReligion: Array<any>;
  dataLanguage: Array<any>;
  dataRelationToStudent: Array<any>;
  dataCountry: Array<any>;
}

const Enrolment = ({
  dataGender,
  dataReligion,
  dataLanguage,
  dataRelationToStudent,
  dataCountry,
}: EnrolmentProps) => {
  const {
    state: { enrolmentDetails },
  } = useAppContext();
  const { activeStep } = enrolmentDetails;
  return (
    <>
      <Hero
        type="applyOnline"
        overHeadline="ENROLMENT"
        headline="Carey Baptist Grammar SchoolApplication for Admission"
        enableCta={false}
        overHeadlineBottom="YOUR UNIQUE IDENTITY NUMBER"
        idNumber="ID 2345"
        applicationSupport={{
          title: "Application Support",
          paragraphOne:
            " If you require assistance with your application, please contact us.",
          paragraphTwo:
            "Carey Baptist Grammar School349 Barkers Road, Kew VIC 3101 +61 3 9816 1222 or via email.",
        }}
      />
      <Container
        outerCSS={{
          background: "$background",
        }}
        innerCSS={{ rowGap: 56, py: 56 }}
      >
        <LeftContent>
          {activeStep === 1 && (
            <StudentDetails
              country={dataCountry}
              gender={dataGender}
              religion={dataReligion}
            />
          )}
          {activeStep === 2 && (
            <ParentDetails
              gender={dataGender}
              relationToStudent={dataRelationToStudent}
              language={dataLanguage}
              country={dataCountry}
            />
          )}
          {activeStep === 3 && <CareyConnection />}
          {activeStep === 4 && <TermsConditions />}
          {activeStep === 5 && <ReviewPayment />}
          {activeStep === 6 && <Confirm />}
        </LeftContent>
        <EnrolmentSideNav activeStep={activeStep} />
      </Container>
    </>
  );
};

export default Enrolment;
