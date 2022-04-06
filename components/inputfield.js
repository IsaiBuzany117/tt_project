import { Field, ErrorMessage } from "formik"

const InputField = ({name, label, type, placeholder, error}) =>{
  return(
    <div className="flex flex-col my-2 mx-2">
      <label htmlFor={name}>{label}<span className="text-red-500">*</span></label>
      <Field 
        type={type} 
        id={name}
        name={name} 
        placeholder={placeholder} 
        className="p-1 ring-1 border rounded"
      />
      <ErrorMessage name={name} component={() => (
        <span className="m-1 text-sm text-rose-500">{error}</span>
      )}/>
    </div>
  )
}

export default InputField