import React from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, OnSubmit } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";

type FormData = {
  name: string;
};

const Create: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const onSubmit: OnSubmit<FormData> = (data: FormData, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        inputRef={register({ required: true })}
        name="name"
        label={
          <FormattedMessage
            id="Create.name"
            defaultMessage="Name"
          ></FormattedMessage>
        }
        error={errors.name ? true : false}
        helperText={
          errors.name ? (
            <FormattedMessage
              id="Validation.required"
              defaultMessage="{name} is required"
              values={{ name: "Name" }}
            ></FormattedMessage>
          ) : (
            ""
          )
        }
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Create;
