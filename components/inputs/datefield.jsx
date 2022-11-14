import { Field, ErrorMessage } from "formik";

const DateField = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="flex flex-col py-1 mx-1.5">
        <p className="px-2.5 py-0.5">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </p>
        <Field
          type="date"
          className={`${
            props.disabled && `bg-slate-200 text-black/60`
          } px-4 py-1 text-sm rounded-xl shadow shadow-indigo-200 border-[0.8px] border-indigo-400 focus:outline-indigo-700 focus:outline-2`}
          {...props}
        />
        <ErrorMessage
          name={props.name}
          component={() => (
            <span className="px-2 text-sm text-rose-500">{error}</span>
          )}
        />
      </label>
    </div>
  );
};

export default DateField;
