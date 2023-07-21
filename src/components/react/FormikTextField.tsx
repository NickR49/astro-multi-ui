import { useField } from "formik";
import type { FC } from "react";

interface Props {
  name: string;
  label: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>, name: string) => void;
}

const FormikTextField: FC<Props> = (props) => {
  const { name, label, onBlur } = props;
  const [field, meta, helpers] = useField({ name });
  return (
    <>
      <label>
        {label}
        <input
          name={name}
          value={field.value}
          onBlur={(event) => {
            if (onBlur) {
              onBlur(event, name);
            }
            field.onBlur(event);
          }}
          onChange={field.onChange}
          className="border-2 border-gray-500"
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormikTextField;
