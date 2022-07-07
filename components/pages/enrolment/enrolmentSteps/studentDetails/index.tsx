import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppContext } from "@contexts/AppContext";
import TextField from "@components/common/forms/fields/text";
import Select from "@components/common/forms/fields/select";
import RadioGroup from "@components/common/forms/fields/radio";
import Checkbox from "@components/common/forms/fields/checkbox";
import DateField from "@components/common/forms/fields/date";
import TextArea from "@components/common/forms/fields/textArea";
import { Text } from "@components/common";
import { Button } from "@components/common";
import { PlusIcon, Cross1Icon, CaretLeftIcon } from "@radix-ui/react-icons";

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
  ButtonWrap,
} from "../sharedStyles";

interface StudentDetailsProps {
  gender: Array<any>;
  religion: Array<any>;
  country: Array<any>;
}

const StudentDetails = ({ gender, religion, country }: StudentDetailsProps) => {
  const [studentDetails, setStudentDetails] = useState(["std1"]);

  const {
    state: { enrolmentDetails },
    dispatch,
  } = useAppContext();
  const { activeStep } = enrolmentDetails;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

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

  const addStudent = () => {
    const newStd = `std${studentDetails.length + 1}`;
    setStudentDetails([...studentDetails, newStd]);
  };

  const watchAllFields = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {studentDetails?.length > 0 &&
        studentDetails.map((item, index) => {
          const student = index + 1;
          return (
            <Accordion.Root
              type="multiple"
              defaultValue={[
                `studentDetails-${item}`,
                `admissionDetails-${item}`,
              ]}
              key={item}
            >
              {student > 1 && <Divider css={{ mb: 50 }} />}
              <StyledItem css={{ mb: 50 }} value={`studentDetails-${item}`}>
                <StyledHeader>
                  <StyledTrigger>
                    <Text as="h2" variant="Heading-Large">
                      Student Details {student}
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
                      control={control}
                      required
                      error={
                        errors[`firstName${student}`] &&
                        "First name is required"
                      }
                      name={`firstName${student}`}
                      label="First Name"
                      placeholder="Enter your first name"
                      type="text"
                      color="$navy"
                      outerCSS={{ mb: 24 }}
                    />
                    <TextField
                      control={control}
                      name={`middleName${student}`}
                      label="Middle Name"
                      placeholder="Enter your middle name"
                      type="text"
                      color="$navy"
                      outerCSS={{ mb: 24 }}
                    />
                    <TextField
                      control={control}
                      required
                      error={
                        errors[`familyName${student}`] &&
                        "Last name is required"
                      }
                      name={`familyName${student}`}
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
                      control={control}
                      required
                      error={
                        errors[`perferredName${student}`] &&
                        "Perferred name is required"
                      }
                      name={`perferredName${student}`}
                      label="Perferred name"
                      placeholder="Enter your perferred name"
                      type="text"
                      color="$navy"
                      outerCSS={{ mb: 24 }}
                    />
                    <DateField
                      control={control}
                      required
                      error={
                        errors[`dob${student}`] && "Date of birth is required"
                      }
                      placeholder="e.g. 15/12/2021"
                      name={`dob${student}`}
                      label="Date of birth"
                      color="$navy"
                      outerCSS={{ mb: 24 }}
                    />
                    {gender?.length > 0 && (
                      <Select
                        control={control}
                        required
                        error={
                          errors[`gender${student}`] && "Gender is required"
                        }
                        name={`gender${student}`}
                        label="Gender"
                        placeholder="Select"
                        items={gender}
                      />
                    )}
                    {watchAllFields[`gender${student}`] === "S" && (
                      <TextField
                        control={control}
                        required
                        error={
                          errors[`selfDescribe${student}`] &&
                          "Self-describe is required"
                        }
                        placeholder="|"
                        name={`selfDescribe${student}`}
                        label="Self-describe"
                        type="text"
                        color="$navy"
                        outerCSS={{
                          mb: 24,
                          gridColumn: "3",
                        }}
                      />
                    )}
                  </Div>
                  <Divider />
                  <Div
                    css={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      columnGap: 15,
                    }}
                  >
                    {religion.length > 0 && (
                      <Select
                        control={control}
                        required
                        error={
                          errors[`religion${student}`] && "Religion is required"
                        }
                        name={`religion${student}`}
                        label="Religion"
                        placeholder="Select"
                        items={religion}
                      />
                    )}
                    {country?.length > 0 && (
                      <Select
                        control={control}
                        searchable
                        required
                        error={
                          errors[`birthCountry${student}`] &&
                          "Country of birth is required"
                        }
                        name={`birthCountry${student}`}
                        label="Country of birth"
                        placeholder="Select"
                        items={country}
                      />
                    )}
                  </Div>
                  <Divider />
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
                        outerCSS={{ flexDirection: "row", columnGap: 20 }}
                        control={control}
                        name={`isAustralianCitizen${student}`}
                        required
                        error={
                          errors[`isAustralianCitizen${student}`] &&
                          "Is the student of Aboriginal or Torres Strait Islander origin is required"
                        }
                        label="Is the student an Australian citizen?"
                        items={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                      />
                    </Div>
                    <Div>
                      {watchAllFields[`isAustralianCitizen${student}`] ===
                        "yes" && (
                        <Select
                          outerCSS={{ mb: 30 }}
                          control={control}
                          searchable
                          required
                          error={
                            errors[`languageAtHome${student}`] &&
                            "Language at home is required"
                          }
                          name={`languageAtHome${student}`}
                          label="Language at home"
                          placeholder="Select"
                          items={[
                            { value: "language", label: "language" },
                            { value: "language", label: "language" },
                          ]}
                        />
                      )}
                    </Div>
                    <Div>
                      <RadioGroup
                        outerCSS={{ flexDirection: "row", columnGap: 20 }}
                        control={control}
                        name={`languageOtherThanEnglish${student}`}
                        required
                        error={
                          errors[`languageOtherThanEnglish${student}`] &&
                          "Is the student of Aboriginal or Torres Strait Islander origin is required"
                        }
                        label="Does the student speak a language other the English at home?"
                        items={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                      />
                    </Div>
                    <Div>
                      {watchAllFields[`languageOtherThanEnglish${student}`] ===
                        "yes" && (
                        <Select
                          control={control}
                          searchable
                          required
                          error={
                            errors[`nationality${student}`] &&
                            "Nationality is required"
                          }
                          name={`nationality${student}`}
                          label="Nationality"
                          placeholder="Select"
                          items={[
                            { value: "nationality", label: "nationality" },
                            { value: "nationality", label: "nationality" },
                          ]}
                        />
                      )}
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
                    <Div
                      css={{
                        pb: 30,
                      }}
                    >
                      <RadioGroup
                        outerCSS={{ flexDirection: "row", columnGap: 20 }}
                        control={control}
                        name={`additionalRequirement${student}`}
                        required
                        error={
                          errors[`additionalRequirement${student}`] &&
                          "Is the student of Aboriginal or Torres Strait Islander origin is required"
                        }
                        label="Does the student have additional requirements (Medical, Learning or Language)?"
                        items={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                      />
                    </Div>
                    {watchAllFields[`additionalRequirement${student}`] ===
                      "yes" && (
                      <Div>
                        <Div
                          css={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            columnGap: 15,
                          }}
                        >
                          <Text
                            css={{ mb: 10, gridColumn: "1 / span 2" }}
                            variant="Body-xSmall"
                          >
                            Select their requirements below
                          </Text>
                          <Checkbox
                            control={control}
                            name={`medicalSupport${student}`}
                            outerCSS={{ mb: 20 }}
                            label="Medical support"
                          />
                          <Checkbox
                            control={control}
                            name="learningSupport"
                            outerCSS={{ mb: 20 }}
                            label="Learning support"
                          />
                          <Checkbox
                            control={control}
                            name="englishAsSecondLanguage"
                            outerCSS={{ mb: 20 }}
                            label="English as second language"
                          />
                          <Checkbox
                            control={control}
                            name="other"
                            outerCSS={{ mb: 30 }}
                            label="Other"
                          />
                        </Div>
                        <Div>
                          <TextArea
                            control={control}
                            name={`studentAdditionalRequirements${student}`}
                            required
                            error={
                              errors[
                                `studentAdditionalRequirements${student}`
                              ] && "Details is required"
                            }
                            label="Please provide details"
                          />
                        </Div>
                      </Div>
                    )}
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
                      control={control}
                      required
                      error={
                        errors[`isStudentAboriginalOrTorres${student}`] &&
                        "Is the student of Aboriginal or Torres Strait Islander origin is required"
                      }
                      name={`isStudentAboriginalOrTorres${student}`}
                      label="Is the student of Aboriginal or Torres Strait Islander origin?"
                      placeholder="Select"
                      items={[
                        { value: "No", label: "No" },
                        {
                          value: "Yes, Aboriginal",
                          label: "Yes, Aboriginal",
                        },
                        {
                          value:
                            "Yes, both Aboriginal and Torres Strait Islander",
                          label:
                            "Yes, both Aboriginal and Torres Strait Islander",
                        },
                        {
                          value: "Yes, Torres Strait Islander",
                          label: "Yes, Torres Strait Islander",
                        },
                      ]}
                    />
                  </Div>
                  <Divider />
                </StyledContent>
              </StyledItem>
              <StyledItem css={{ mb: 50 }} value={`admissionDetails-${item}`}>
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
                    variant="Heading-Small"
                  >
                    First Preference for Entry
                  </Text>
                  <Div
                    css={{
                      pb: 30,
                    }}
                  >
                    <RadioGroup
                      control={control}
                      name={`campus${student}`}
                      label="Which campus do you prefer?"
                      outerCSS={{ flexDirection: "row", columnGap: 20 }}
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
                        outerCSS={{ flexDirection: "row", columnGap: 20 }}
                        control={control}
                        name={`appliedToOtherSchools${student}`}
                        label="Has the student applied to other schools?"
                        items={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                      />
                    </Div>
                    {watchAllFields[`appliedToOtherSchools${student}`] ===
                      "yes" && (
                      <Div>
                        <TextField
                          control={control}
                          required
                          error={
                            errors[`whichSchool${student}`] &&
                            "Which schools is required"
                          }
                          placeholder="|"
                          name={`whichSchool${student}`}
                          label="Which schools"
                          type="text"
                          color="$navy"
                          outerCSS={{
                            mb: 24,
                            gridColumn: "3",
                          }}
                        />
                      </Div>
                    )}
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
                      control={control}
                      name={`currentSchool${student}`}
                      label="Current school (if applicable)"
                      placeholder="Enter your Current school"
                      type="text"
                      color="$navy"
                      outerCSS={{ mb: 24 }}
                    />
                    <Select
                      control={control}
                      name={`currentYear${student}`}
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
                    variant="Heading-Small"
                  >
                    Second Preference for Entry
                  </Text>
                  <Div
                    css={{
                      pb: 30,
                    }}
                  >
                    <RadioGroup
                      control={control}
                      name={`secondCampus${student}`}
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
                      outerCSS={{ flexDirection: "row", columnGap: 20 }}
                    />
                  </Div>
                </StyledContent>
              </StyledItem>
            </Accordion.Root>
          );
        })}
      <ButtonWrap>
        <AddButton outlined onClick={() => addStudent()}>
          <PlusIcon /> <span>Additional student</span>
        </AddButton>
      </ButtonWrap>
      <Divider />
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
          <AddButton disabled>
            <CaretLeftIcon />
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

export default StudentDetails;
