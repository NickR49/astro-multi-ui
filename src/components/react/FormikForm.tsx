import { useFormikContext } from "formik";
import { validationSchema, type FormData } from "./FormikExample";
import FormikTextField from "./FormikTextField";

const FormikForm = () => {
  const { values, handleSubmit, setFieldValue, isValid, errors, touched } =
    useFormikContext<FormData>();

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement>,
    fieldName: string
  ) {
    console.log(`Run business logic here for: `, fieldName);
    if (values.amount_excl) {
      const amount_excl = parseFloat(values.amount_excl);
      setFieldValue("amount_incl", amount_excl / 1.15);
    }
  }

  function handleSave() {
    console.log(`handleSave - values: ${JSON.stringify(values, null, 2)}`);
    // The standard way
    // handleSubmit();

    // The way we're doing it
    console.log(`handleSave - validating`);
    validationSchema
      .validate(values)
      .then(() => {
        console.log(`handleSave - validated`);
        handleSubmit();
      })
      .catch((err) => {
        console.log(`handleSave - Caught validation error`);
      });
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      console.log(
        `handleKeyUp - intercepted enter key - values: ${JSON.stringify(
          values
        )}`
      );

      // First ensure that the active field get its onBlur event executed first
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && typeof activeElement.blur === "function") {
        activeElement.blur();
      }
      setTimeout(() => {
        handleSave();
      }, 3000);
    }
  }

  function handleCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(`handleCancel`);
    setFieldValue("description", "");
    setFieldValue("amount_incl", "");
    setFieldValue("amount_excl", "");
  }

  return (
    <div onKeyUp={handleKeyUp} className="flex flex-col gap-4">
      <div className="flex gap-8">
        <FormikTextField name="description" label="Description" />
        <FormikTextField
          name="amount_excl"
          label="Amount"
          onBlur={handleBlur}
        />
      </div>

      <div className="flex gap-8">
        <button
          type="button"
          className="btn-outline"
          onClick={handleSave}
          disabled={!isValid}
        >
          Save
        </button>
        <button type="button" className="btn-outline" onClick={handleCancel}>
          Cancel
        </button>
      </div>

      <span>isValid: {isValid ? "true" : "false"}</span>
      <span>values: {JSON.stringify(values)}</span>
      <span>errors: {JSON.stringify(errors)}</span>
      <span>touched: {JSON.stringify(touched)}</span>
    </div>
  );
};

export default FormikForm;
