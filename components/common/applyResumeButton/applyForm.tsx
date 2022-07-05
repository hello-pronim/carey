import React from "react";
import { useForm } from "react-hook-form";
import Text from "@components/common/forms/fields/text";
import { Button } from "@components/common";
import { Div } from "./styles";

const ApplyForm = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Div css={{ mt: 80, mb: 80 }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Text
          required
          control={control}
          error={
            errors.emailAddress?.type === "required"
              ? "Email address is required"
              : errors.emailAddress?.type === "pattern"
              ? "Enter valid email format"
              : ""
          }
          name="emailAddress"
          label="Email address"
          placeholder="Enter your email address"
          type="email"
          outerCSS={{ mb: 24 }}
        />
        <Text
          required
          control={control}
          error={errors.name && "First name is required"}
          name="name"
          label="Name"
          placeholder="Enter your first name"
          type="text"
          outerCSS={{ mb: 24 }}
        />
        <Button
          arrow
          label="Submit"
          color="$crestYellow"
          type="solid"
          theme="transparent"
          variant="secondary"
          scale="xl"
        />
      </form>
    </Div>
  );
};

export default ApplyForm;
