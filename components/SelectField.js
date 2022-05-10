import { Field, ErrorMessage } from "formik"

const SelectField = ({name, label, placeholder, error, children}) => {
    return (
        <div className="flex flex-col my-2 mx-2">
            <label htmlFor="">{label}<span className="text-red-500">*</span></label>
            <Field 
                component="select"
                id={name}
                name={name}
                placeholder={placeholder}
                className="p-1 ring-1 border rounded shadow focus:outline-none focus:ring-indigo-600"
            >
                {children}
            </Field>
            <ErrorMessage name={name} component={() => (
                <span className="m-1 text-sm text-rose-500">{error}</span>
            )}/>
        </div>
    )
}

export default SelectField