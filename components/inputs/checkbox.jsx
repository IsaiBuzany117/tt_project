import { Field, ErrorMessage } from "formik";

const Checkbox = ({ label, ...props }) => {
  return (
    <label className="flex py-1 mx-1.5">
      <Field
        type="checkbox"
        className={`${props.disabled && `checked:bg-slate-400 checked:border-slate-600 text-slate-400`} h-4 w-4 border border-gray-300 rounded-full text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 mr-2 cursor-pointer`}
        {...props}
      />
      <p className="px-0.5 py-0.5">
        {label}
        {props.required && <span className="text-red-500">*</span>}
      </p>
    </label>
  );
};

export default Checkbox;
