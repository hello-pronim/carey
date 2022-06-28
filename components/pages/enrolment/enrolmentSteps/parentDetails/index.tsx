import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppContext } from "@contexts/AppContext";
import TextField from "@components/common/forms/fields/text";
import Select from "@components/common/forms/fields/select";
import RadioGroup from "@components/common/forms/fields/radio";
import { Text } from "@components/common";
import { Button } from "@components/common";
import { PlusIcon } from "@radix-ui/react-icons";

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

const ParentDetails = ({}) => {
  const [studentDetails, setStudentDetails] = useState(["std1"]);
  const [studentAccordianOpen, setStudentAccordianOpen] = useState([
    "studentDetails-std1",
    "admissionDetails-std1",
  ]);

  const {
    state: { enrolmentDetails },
    dispatch,
  } = useAppContext();
  const { activeStep } = enrolmentDetails;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    console.log("errors", errors);
    console.log(data);
    nextStep();
  };

  const addStudent = () => {
    const newStd = `std${studentDetails.length + 1}`;
    const studentDetailsOpen = `studentDetails-${newStd}`;
    const admissionDetailsOpen = `admissionDetails-${newStd}`;
    setStudentDetails([...studentDetails, newStd]);
    setStudentAccordianOpen([
      ...studentDetails,
      studentDetailsOpen,
      admissionDetailsOpen,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Accordion.Root type="multiple" defaultValue={studentAccordianOpen}>
        {studentDetails?.length > 0 &&
          studentDetails.map((item, index) => {
            const guardian = index + 1;
            return (
              <React.Fragment key={item}>
                <StyledItem value={`studentDetails-${item}`}>
                  <StyledHeader>
                    <StyledTrigger>
                      <Text as="h2" variant="Heading-Large">
                        Student Details
                      </Text>
                      <AccordionChevronWrapper aria-hidden />
                    </StyledTrigger>
                  </StyledHeader>
                  <StyledContent>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        required
                        error={
                          errors[`firstName${guardian}`] &&
                          "First name is required"
                        }
                        name={`firstName${guardian}`}
                        label="First Name"
                        placeholder="Enter your first name"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        name={`middleName${guardian}`}
                        label="Middle Name"
                        placeholder="Enter your middle name"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        required
                        error={
                          errors[`familyName${guardian}`] &&
                          "Last name is required"
                        }
                        name={`familyName${guardian}`}
                        label="Family Name"
                        placeholder="Enter your family name"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        required
                        error={
                          errors[`perferredName${guardian}`] &&
                          "Perferred name is required"
                        }
                        name={`perferredName${guardian}`}
                        label="Perferred name"
                        placeholder="Enter your perferred name"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        required
                        error={
                          errors[`dob${guardian}`] &&
                          "Date of birth is required"
                        }
                        name={`dob${guardian}`}
                        label="Date of birth"
                        placeholder="e.g. 15/12/2021"
                        type="date"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <Select
                        register={register}
                        required
                        error={
                          errors[`gender${guardian}`] && "Gender is required"
                        }
                        name={`gender${guardian}`}
                        label="Gender"
                        placeholder="Select"
                        items={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "others", label: "Others" },
                        ]}
                      />
                    </Div>
                    <Divider />
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <Select
                        register={register}
                        required
                        error={
                          errors[`religion${guardian}`] &&
                          "Religion is required"
                        }
                        name={`religion${guardian}`}
                        label="Religion"
                        placeholder="Select"
                        items={[
                          { value: "hindu", label: "Hindu" },
                          { value: "muslim", label: "Muslim" },
                          { value: "christian", label: "Christian" },
                        ]}
                      />
                      <Select
                        register={register}
                        required
                        error={
                          errors[`birthCountry${guardian}`] &&
                          "Country of birth is required"
                        }
                        name={`birthCountry${guardian}`}
                        label="Country of birth"
                        placeholder="Select"
                        items={[
                          { value: "australia", label: "Australia" },
                          { value: "canada", label: "Canada" },
                          { value: "usa", label: "USA" },
                        ]}
                      />
                    </Div>
                    <Divider />
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
                            name="isAustralianCitizen"
                            required
                            label="Is the student an Australian citizen?"
                            items={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                          />
                        </Div>
                        <Div>
                          <RadioGroup
                            name="languageOtherThanEnglish"
                            required
                            label="Does the student speak a language other the English at home?"
                            items={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                          />
                        </Div>
                      </Div>
                    </Div>
                    <Divider />
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
                            name="additionalRequirement"
                            required
                            label="Does the student have additional requirements (Medical, Learning or Language)?"
                            items={[
                              { value: "yes", label: "Yes" },
                              { value: "no", label: "No" },
                            ]}
                          />
                        </Div>
                      </Div>
                    </Div>
                    <Divider />
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <Select
                        register={register}
                        required
                        error={
                          errors[`isStudent${guardian}`] &&
                          "Is the student of Aboriginal or Torres Strait Islander origin is required"
                        }
                        name={`isStudent${guardian}`}
                        label="Is the student of Aboriginal or Torres Strait Islander origin?"
                        placeholder="Select"
                        items={[
                          { value: "test1", label: "Test 1" },
                          { value: "test2", label: "Test 2" },
                          { value: "test3", label: "Test 3" },
                        ]}
                      />
                    </Div>
                    <Divider />
                  </StyledContent>
                </StyledItem>
                <StyledItem value={`admissionDetails-${item}`}>
                  <StyledHeader>
                    <StyledTrigger>
                      <Text as="h2" variant="Heading-Large">
                        Admission Details
                      </Text>
                      <AccordionChevronWrapper aria-hidden />
                    </StyledTrigger>
                  </StyledHeader>
                  <StyledContent>
                    <Text
                      css={{ mb: 30, mt: 30 }}
                      as="h3"
                      variant="Heading-xSmall"
                    >
                      First Preference for Entry
                    </Text>
                    <Div
                      css={{
                        pb: 30,
                      }}
                    >
                      <RadioGroup
                        name={`campus${guardian}`}
                        label="Which campus do you prefer?"
                        items={[
                          {
                            value: "Kew Campus (ELC — Year 12)",
                            label: "Kew Campus (ELC — Year 12)",
                          },
                          {
                            value: "Donvale Campus (ELC — Year 6)",
                            label: "Donvale Campus (ELC — Year 6)",
                          },
                        ]}
                      />
                    </Div>
                    <Divider />
                    <Div
                      css={{
                        pb: 30,
                      }}
                    >
                      <RadioGroup
                        name={`appliedToOtherSchools${guardian}`}
                        label="Has the student applied to other schools?"
                        items={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                      />
                    </Div>
                    <Divider />
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        name={`currentSchool${guardian}`}
                        label="Current school (if applicable)"
                        placeholder="Enter your Current school"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <Select
                        register={register}
                        name={`currentYear${guardian}`}
                        label="Current year"
                        placeholder="Select"
                        items={[
                          { value: "2022", label: "2022" },
                          { value: "2021", label: "2021" },
                          { value: "2020", label: "2020" },
                        ]}
                      />
                    </Div>
                    <Divider />
                    <Text
                      css={{ mb: 30, mt: 30 }}
                      as="h3"
                      variant="Heading-xSmall"
                    >
                      Second Preference for Entry
                    </Text>
                    <Div
                      css={{
                        pb: 30,
                      }}
                    >
                      <RadioGroup
                        name={`secondCampus${guardian}`}
                        label="Which campus do you prefer?"
                        items={[
                          {
                            value: "Kew Campus (ELC — Year 12)",
                            label: "Kew Campus (ELC — Year 12)",
                          },
                          {
                            value: "Donvale Campus (ELC — Year 6)",
                            label: "Donvale Campus (ELC — Year 6)",
                          },
                        ]}
                      />
                    </Div>
                  </StyledContent>
                </StyledItem>
              </React.Fragment>
            );
          })}
      </Accordion.Root>
      {/* <Button
        plus
        label="Additional student"
        type="outline"
        theme="dark"
        variant="secondary"
        scale="xl"
        css={{
          borderColor: "$navy",
        }}
        onClick={() => addStudent()}
      /> */}
      <AddButton onClick={() => addStudent()}>
        <PlusIcon /> <span>Additional student</span>
      </AddButton>
      <Divider />
      <ButtonsContainer>
        <Div>
          <AddButton onClick={() => addStudent()}>
            <span>Save & Exit</span>
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
            <span>Back</span>
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

export default ParentDetails;
