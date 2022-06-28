import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Accordion from "@radix-ui/react-accordion";
import { useAppContext } from "@contexts/AppContext";
import TextField from "@components/common/forms/fields/text";
import Select from "@components/common/forms/fields/select";
import Checkbox from "@components/common/forms/fields/checkbox";
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
  const [parentDetails, setParentDetails] = useState(["parent1"]);
  const [parentAccordianOpen, setParentAccordianOpen] = useState([
    "parentDetails-parent1",
    "residentialDetails-parent1",
  ]);

  const {
    state: { enrolmentDetails },
    dispatch,
  } = useAppContext();
  const { activeStep } = enrolmentDetails;

  const {
    register,
    handleSubmit,
    control,
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

  const addParent = () => {
    const newParent = `parent${parentDetails.length + 1}`;
    const parentDetailsOpen = `parentDetails-${newParent}`;
    const residentialDetailsOpen = `residentialDetails-${newParent}`;
    setParentDetails([...parentDetails, newParent]);
    setParentAccordianOpen([
      ...parentAccordianOpen,
      parentDetailsOpen,
      residentialDetailsOpen,
    ]);
  };
  console.log("parentAccordianOpen", parentAccordianOpen);
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Accordion.Root type="multiple" defaultValue={parentAccordianOpen}>
        {parentDetails?.length > 0 &&
          parentDetails.map((item, index) => {
            const guardian = index + 1;
            return (
              <React.Fragment key={item}>
                <StyledItem css={{ mb: 50 }} value={`parentDetails-${item}`}>
                  <StyledHeader>
                    <StyledTrigger>
                      <Text as="h2" variant="Heading-Large">
                        Parent or Guardian {guardian}
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
                      <Select
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`title${guardian}`] && "Title is required"
                        }
                        name={`title${guardian}`}
                        label="Title"
                        placeholder="Select"
                        items={[
                          { value: "mr", label: "Mr" },
                          { value: "mrs", label: "Mrs" },
                        ]}
                      />
                      <TextField
                        register={register}
                        control={control}
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
                        control={control}
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
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        control={control}
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
                      <Select
                        register={register}
                        control={control}
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
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          (errors.emailAddress &&
                            errors.emailAddress?.type === "required" &&
                            "Email address is required") ||
                          (errors.emailAddress?.type === "pattern" &&
                            "Enter valid email format")
                        }
                        name={`email${guardian}`}
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`mobilePhone${guardian}`] &&
                          "Mobile phone is required"
                        }
                        name={`mobilePhone${guardian}`}
                        label="Mobile Phone"
                        placeholder="Enter your mobile phone"
                        type="tel"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        control={control}
                        name={`workPhone${guardian}`}
                        label="Work Phone"
                        placeholder="Enter your work phone"
                        type="tel"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        name={`homePhone${guardian}`}
                        label="Home Phone"
                        placeholder="Enter your home phone"
                        type="tel"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <Select
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`relationship${guardian}`] &&
                          "Relationship to the student (s) on application is required"
                        }
                        name={`relationship${guardian}`}
                        label="Relationship to the student (s) on application"
                        placeholder="Select"
                        items={[
                          { value: "relationship1", label: "Relationship 1" },
                          { value: "relationship2", label: "Relationship 2" },
                          { value: "relationship3", label: "Relationship 3" },
                        ]}
                      />
                      <Select
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`mainLanguage${guardian}`] &&
                          "Main language spoken is required"
                        }
                        name={`mainLanguage${guardian}`}
                        label="Main language spoken"
                        placeholder="Select"
                        items={[
                          { value: "language1", label: "Language 1" },
                          { value: "language2", label: "Language 2" },
                          { value: "language3", label: "Language 3" },
                        ]}
                      />
                    </Div>
                  </StyledContent>
                </StyledItem>
                <StyledItem
                  css={{ mb: 50 }}
                  value={`residentialDetails-${item}`}
                >
                  <StyledHeader>
                    <StyledTrigger>
                      <Text as="h2" variant="Heading-Large">
                        Residential Address
                      </Text>
                      <AccordionChevronWrapper aria-hidden />
                    </StyledTrigger>
                  </StyledHeader>
                  <StyledContent>
                    <Div>
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`streetAddress${guardian}`] &&
                          "Street address is required"
                        }
                        name={`streetAddress${guardian}`}
                        label="Street address"
                        placeholder="Enter your Street address"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        control={control}
                        name={`postBox${guardian}`}
                        label="Apartment, Suite, Unit, PO Box"
                        placeholder="Enter your Apartment, Suite, Unit, PO Box"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <Select
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`country${guardian}`] && "Country is required"
                        }
                        name={`country${guardian}`}
                        label="Country"
                        placeholder="Select"
                        items={[
                          { value: "AU", label: "Australia" },
                          { value: "NZ", label: "Newzealand" },
                        ]}
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
                        control={control}
                        required
                        error={
                          errors[`suburb${guardian}`] &&
                          "Suburb / Town is required"
                        }
                        name={`suburb${guardian}`}
                        label="Suburb / Town"
                        placeholder="Pascoe Vale"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`state${guardian}`] && "State is required"
                        }
                        name={`state${guardian}`}
                        label="State"
                        placeholder="VIC"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`postcode${guardian}`] &&
                          "Postcode is required"
                        }
                        name={`postcode${guardian}`}
                        label="Postcode"
                        placeholder="3044"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Divider />
                    <Div>
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`occupation${guardian}`] &&
                          "Occupation/Job Title is required"
                        }
                        name={`occupation${guardian}`}
                        label="Occupation/Job Title"
                        placeholder="Enter your Occupation/Job Title"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Divider />
                    <Div>
                      <Checkbox label="Postal Address (Same as Residential address)" />
                    </Div>
                    <Div>
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`postalStreetAddress${guardian}`] &&
                          "Street address is required"
                        }
                        name={`postalStreetAddress${guardian}`}
                        label="Street address"
                        placeholder="Enter your Street address"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                    </Div>
                    <Div
                      css={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: 15,
                      }}
                    >
                      <TextField
                        register={register}
                        control={control}
                        name={`postalPostBox${guardian}`}
                        label="Apartment, Suite, Unit, PO Box"
                        placeholder="Enter your Apartment, Suite, Unit, PO Box"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <Select
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`postalCountry${guardian}`] &&
                          "Country is required"
                        }
                        name={`postalCountry${guardian}`}
                        label="Country"
                        placeholder="Select"
                        items={[
                          { value: "AU", label: "Australia" },
                          { value: "NZ", label: "Newzealand" },
                        ]}
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
                        control={control}
                        required
                        error={
                          errors[`postalSuburb${guardian}`] &&
                          "Suburb / Town is required"
                        }
                        name={`postalSuburb${guardian}`}
                        label="Suburb / Town"
                        placeholder="Pascoe Vale"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`postalState${guardian}`] &&
                          "State is required"
                        }
                        name={`postalState${guardian}`}
                        label="State"
                        placeholder="VIC"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
                      />
                      <TextField
                        register={register}
                        control={control}
                        required
                        error={
                          errors[`postalPostcode${guardian}`] &&
                          "Postcode is required"
                        }
                        name={`postalPostcode${guardian}`}
                        label="Postcode"
                        placeholder="3044"
                        type="text"
                        color="$navy"
                        outerCSS={{ mb: 24 }}
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
        onClick={() => addParent()}
      /> */}
      <Div css={{ mb: 50 }}>
        <Checkbox label="I/We acknowledge that all legal guardians and carers for the student(s) have been entered into this application" />
      </Div>
      <AddButton onClick={() => addParent()}>
        <PlusIcon /> <span> Another Parent/Guardian</span>
      </AddButton>
      <Divider />
      <ButtonsContainer>
        <Div>
          <AddButton>
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
