import { Formik, FormikProps } from "formik";
import * as Yup from "yup";

import FormikForm from "./FormikForm";

export const validationSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  amount_incl: Yup.number().required("Amount incl is required"),
  amount_excl: Yup.number().required("Amount excl is required"),
});

export interface FormData {
  description: string;
  amount_incl: string;
  amount_excl: string;
}

const initialValues = {
  description: "",
  amount_incl: "",
  amount_excl: "",
};

const FormikExample = () => {
  const onSubmit = (values: FormData) => {
    console.log(`Submitted values: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur
      validateOnChange={false}
      validationSchema={validationSchema}
    >
      {(props: FormikProps<FormData>): React.ReactElement => {
        const { dirty, values, handleSubmit } = props;
        return (
          <form
            onSubmit={handleSubmit}
            className="w-2/3 flex flex-col gap-3 ml-10"
          >
            <FormikForm />
          </form>
        );
      }}
    </Formik>
  );
};

export default FormikExample;
