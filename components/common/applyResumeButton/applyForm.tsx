import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import appProcessorClient from "@utils/appProcessorClient";
import Text from "@components/common/forms/fields/text";
import { Button } from "@components/common";
import { Div } from "./styles";

const ApplyForm = ({}) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await appProcessorClient.newApplication(data);
      console.log(result);
      // set application Id
      router.push("/application-form");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Div css={{ mt: 80, mb: 80 }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Text
          required
          control={control}
          error={
            errors.email?.type === "required"
              ? "Email address is required"
              : errors.email?.type === "pattern"
              ? "Enter valid email format"
              : ""
          }
          name="email"
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
