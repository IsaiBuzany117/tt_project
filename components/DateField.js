import { Field, ErrorMessage } from "formik"

const DateField = ({name, label, placeholder, disabled, error}) => {
  return (
    <div className="flex flex-col my-2 mx-2">
        <label htmlFor="">{label}<span className="text-red-500">*</span></label>
        <Field 
            type="date"
            id={name}
            name={name}
            placeholder={placeholder}
            disabled = {disabled}
            className="p-1 ring-1 border rounded outline-none shadow focus:outline-none focus:ring-purple-600"
        />
        <ErrorMessage name={name} component={() => (
        <span className="m-1 text-sm text-rose-500">{error}</span>
      )}/>
    </div>
  )
}

export default DateField