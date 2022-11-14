import { Field, ErrorMessage } from "formik";

const TextArea = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col mx-2">
      <label className="flex flex-col py-1 mx-1.5">
        <span className="px-2.5 py-0.5">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </span>
        <Field
          as="textarea"
          className="h-48 ring-1 border rounded shadow focus:outline-none focus:ring-indigo-600"
          {...props}
        />
      </label>
      <ErrorMessage
        name={props.name}
        component={() => (
          <span className="m-1 text-sm text-rose-500">{error}</span>
        )}
      />
    </div>
  );
};
export default TextArea;
