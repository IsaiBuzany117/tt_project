import { Formik, Form } from "formik"
import TextField from "./TextField"
import {passwordvalues, passwordValidate} from '../utils/password'

const ChangePassword = () => {
  return (
    <>
      <Formik
        initialValues={passwordvalues}
        validate={values => passwordValidate(values) }
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({errors}) => (
          <Form>
          <TextField name="oldPassword" label="Contraseña anterior" placeholder="Introduce tu antigua Contraseña" error={errors.oldPassword} />
          <TextField name="newPassword" label="Nueva contraseña" placeholder="Introduce tu nueva Contraseña" error={errors.newPassword}/>
          <TextField name="confirNewPassword" label="Confirmar contraseña" placeholder="Confirma tu nueva Contraseña" error={errors.confirNewPassword} />
        
          <div className="flex justify-center">
            <button type="submit" className="w-1/3 m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-indigo-700">Aceptar</button>
          </div>
        </Form>
      )}
    </Formik>
  </>
  )
}

export default ChangePassword