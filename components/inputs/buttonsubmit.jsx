import { Field } from 'formik'

const ButtonSubmit = ({value, name}) => {
  return (
    <div className='flex justify-center'>
        <Field 
            type="submit"
            value={value}
            name={name}
            className='w-4/5 p-1.5 mt-2 mb-4 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800 cursor-pointer'
        />
    </div>
  )
}

export default ButtonSubmit