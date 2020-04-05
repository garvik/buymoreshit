import React from "react";
import TextField from "@material-ui/core/TextField";
import { useForm, OnSubmit } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { string, object, setLocale } from "yup";
import Grid from "@material-ui/core/Grid";
import { Container, makeStyles } from "@material-ui/core";

type CreatePage = {
  name: string;
};

setLocale({
  mixed: {
    required: ({ label }): string => `${label} is required`,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const createPageSchema = object<CreatePage>({
  name: string().required().label("Name"),
});

const Create: React.FC = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm<CreatePage>({
    mode: "onChange",
    reValidateMode: "onChange",
    validationSchema: createPageSchema,
  });

  const onSubmit: OnSubmit<CreatePage> = (data: CreatePage, e) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.paper}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <TextField
              inputRef={register}
              name="name"
              label="Name"
              error={errors.name ? true : false}
              helperText={errors.name?.message}
            />
            <Button type="submit" className={classes.submit}>
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Create;
