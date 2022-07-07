import React from "react";
import { useForm } from "react-hook-form";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppContext } from "@contexts/AppContext";
import RadioGroup from "@components/common/forms/fields/radio";
import { Text } from "@components/common";
import { Button } from "@components/common";
import { Cross1Icon, CaretLeftIcon } from "@radix-ui/react-icons";

import {
  AddButton,
  ButtonsContainer,
  Div,
  AccordionChevronWrapper,
  StyledHeader,
  StyledItem,
  StyledContent,
  StyledTrigger,
  Divider,
} from "../sharedStyles";

const CareyConnection = ({}) => {
  const {
    state: { enrolmentDetails },
    dispatch,
  } = useAppContext();
  const { activeStep } = enrolmentDetails;

  const { handleSubmit, control } = useForm();

  const prevStep = () => {
    const value = {
      activeStep: activeStep - 1,
    };
    dispatch({
      type: "SET_ENROLMENT_DETAILS",
      value,
    });
  };

  const nextStep = () => {
    const value = {
      activeStep: activeStep + 1,
    };
    dispatch({
      type: "SET_ENROLMENT_DETAILS",
      value,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Accordion.Root type="single" defaultValue="careyconnection-1">
        <StyledItem value="careyconnection-1">
          <StyledHeader>
            <StyledTrigger>
              <Text as="h2" variant="Heading-Large">
                Carey Connections
              </Text>
              <AccordionChevronWrapper aria-hidden />
            </StyledTrigger>
          </StyledHeader>
          <StyledContent>
            <Text css={{ mb: 30, mt: 30 }} as="h3" variant="Heading-xSmall">
              Family Connections
            </Text>
            <Div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                columnGap: 15,
              }}
            >
              <Div>
                <Div
                  css={{
                    pb: 30,
                  }}
                >
                  <RadioGroup
                    control={control}
                    name="previouslyAppliedAnotherChildForCary"
                    label="Have you previously applied for another Child to attend Carey?"
                    outerCSS={{ flexDirection: "row", columnGap: 20 }}
                    items={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </Div>
                <Div
                  css={{
                    pb: 30,
                  }}
                >
                  <RadioGroup
                    control={control}
                    name="haveChildrenCurrentStudentsAtCarey"
                    label="Do you have other children who are current students at Carey?"
                    outerCSS={{ flexDirection: "row", columnGap: 20 }}
                    items={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </Div>
                <Div
                  css={{
                    pb: 30,
                  }}
                >
                  <RadioGroup
                    control={control}
                    name="haveChildrenPreviouslyAttendingCarey"
                    label="Have you had children previously attending Carey?"
                    outerCSS={{ flexDirection: "row", columnGap: 20 }}
                    items={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </Div>
              </Div>
            </Div>
            <Divider />
            <Text css={{ mb: 30, mt: 30 }} as="h3" variant="Heading-xSmall">
              Past Student
            </Text>
            <Div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                columnGap: 15,
              }}
            >
              <Div>
                <Div
                  css={{
                    pb: 30,
                  }}
                >
                  <RadioGroup
                    control={control}
                    name="areYouPastStudentOfCarey"
                    label="Are you a past student of Carey?"
                    outerCSS={{ flexDirection: "row", columnGap: 20 }}
                    items={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </Div>
              </Div>
            </Div>
            <Divider />
            <Text css={{ mb: 30, mt: 30 }} as="h3" variant="Heading-xSmall">
              Current Staff
            </Text>
            <Div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                columnGap: 15,
              }}
            >
              <Div
                css={{
                  pb: 30,
                }}
              >
                <RadioGroup
                  control={control}
                  name="areYouCurrentStaffMemberAtCarey"
                  label="Are you a current staff member at Carey?"
                  outerCSS={{ flexDirection: "row", columnGap: 20 }}
                  items={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                />
              </Div>
              <Div
                css={{
                  pb: 30,
                }}
              >
                <RadioGroup
                  control={control}
                  name="permanentFulltimeContract"
                  label="Permanent Fulltime or Contract / Casual?"
                  outerCSS={{ flexDirection: "row", columnGap: 20 }}
                  items={[
                    { value: "permanent", label: "Permanent" },
                    {
                      value: "contractCasual",
                      label: "Contract / Casual",
                    },
                    {
                      value: "new",
                      label: "New staff not commenced yet*",
                    },
                  ]}
                />
              </Div>
            </Div>
            <Divider />
          </StyledContent>
        </StyledItem>
      </Accordion.Root>

      <ButtonsContainer>
        <Div>
          <AddButton>
            <Cross1Icon /> <span>Save & Exit</span>
          </AddButton>
        </Div>
        <Div
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <AddButton onClick={() => prevStep()}>
            <CaretLeftIcon /> <span>Back</span>
          </AddButton>
          <Button
            arrow
            label="Save & Continue"
            color="$crestYellow"
            type="solid"
            theme="transparent"
            variant="secondary"
            scale="xl"
          />
        </Div>
      </ButtonsContainer>
    </form>
  );
};

export default CareyConnection;
