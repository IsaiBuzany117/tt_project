import { Field } from 'formik'

const ButtonSubmit = ({value, name}) => {
  return (
    <div>
        <Field 
            type="submit"
            value={value}
            name={name}
            className='w-full p-1 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800 cursor-pointer'
        />
    </div>
  )
}

export default ButtonSubmit