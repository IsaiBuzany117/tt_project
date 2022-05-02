import { Field, ErrorMessage } from "formik"

const TextField = ({name, label, placeholder, required, disabled,error}) =>{

  return(
    <div className="flex flex-col my-2 mx-2">
      <label htmlFor="">{label}{required && <span className="text-red-500">*</span>}</label>
      <Field 
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        disabled = {disabled}
        className="p-2 text-sm ring-1 border rounded shadow focus:outline-none focus:ring-purple-600"
      />
      <ErrorMessage name={name} component={() => (
        <span className="m-1 text-sm text-rose-500">{error}</span>
      )}/>
    </div>
  )
}

export default TextField