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
          <TextField name="oldPassword" label="OldPassword" placeholder="Introduce tu antigua Contraseña" error={errors.oldPassword} />
          <TextField name="newPassword" label="NewPassword" placeholder="Introduce tu nueva Contraseña" error={errors.newPassword}/>
          <TextField name="confirNewPassword" label="ConfirNewPassword" placeholder="Confirma tu nueva Contraseña" error={errors.confirNewPassword} />
        
            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Aceptar</button>
        </Form>
      )}
    </Formik>
  </>
  )
}

export default ChangePassword