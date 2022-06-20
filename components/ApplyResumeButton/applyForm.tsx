import React from "react";
import { useForm } from "react-hook-form";
import Text from "@components/common/forms/fields/text";
import Submit from "@components/common/forms/fields/submit";
import { Div } from "./styles";

const ApplyForm = ({}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Div css={{ mt: 80, mb: 80 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          {...register("email")}
          label="Email address"
          placeholder="Enter your email address"
          required
          type="email"
          outerCSS={{ mb: 24 }}
        />
        <Text
          {...register("firstName")}
          label="Name"
          placeholder="Enter your first name"
          required
          type="text"
          outerCSS={{ mb: 24 }}
        />
        <Submit value="Submit" />
      </form>
    </Div>
  );
};

export default ApplyForm;
