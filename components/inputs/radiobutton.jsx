import { Field, ErrorMessage } from "formik";

const Radio = ({ label, ...props }) => {
  return (
    <div>
      <label className="flex py-1 mx-1.5">
        <Field
          type="radio"
          className={`${props.disabled && `bg-slate-200 text-black/60 checked:bg-slate-600 checked:border-slate-600 `} h-4 w-4 border border-gray-300 rounded-full text-indigo-600 checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 mr-2 cursor-pointer`}
          {...props}
        />
        <p className="px-0.5 py-0.5">
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </p>
      </label>
    </div>
  );
};

export default Radio;
