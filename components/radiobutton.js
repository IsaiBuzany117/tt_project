import { Field } from "formik"

const RadioButton = ({name, type, value}) => {
    return (
        <label className="mx-2 text-base">
            <Field type={type} name={name} value={value}/>{value}
        </label>
    )
}

export default RadioButton