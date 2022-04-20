import { Field, ErrorMessage } from "formik"
const PasswordField = ({name, label, placeholder, required, error}) => {
    return (
        <div className="flex flex-col my-2 mx-2">
            <label htmlFor="">{label}{required && <span className="text-red-500">*</span>}</label>
            <Field 
                type="password"
                id={name}
                name={name}
                placeholder={placeholder}
                className="p-2 ring-1 border rounded shadow focus:outline-none focus:ring-purple-600"
            />
            <ErrorMessage name={name} component={() => (
                <span className="m-1 text-sm text-rose-500">{error}</span>
            )}/>
        </div>
    )
}

export default PasswordField