import { Field, ErrorMessage } from "formik"

const TextArea = ({ name, label, placeholder, required, disabled, error }) => {
    return (
        <div className="flex flex-col mx-2">
            <Field
                as = "textarea"
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                className="h-20 ring-1 border rounded shadow focus:outline-none focus:ring-indigo-600"
            />
            <ErrorMessage name={name} component={() => (
                <span className="m-1 text-sm text-rose-500">{error}</span>
            )} />
        </div>
    )
}
export default TextArea