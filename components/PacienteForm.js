import { Formik, Form } from "formik"
import TextField from "./TextField"
import DateField from "./DateField"
import SelectField from "./SelectField"
import PasswordField from "./PasswordField"
import {pacientevalues, pacienteValidate} from '../utils/paciente.config'

const PacienteForm = () => {
  return (
    <>
      <Formik
        initialValues={pacientevalues}
        validate={values => pacienteValidate(values) }
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({errors}) => (
          <Form>
            <TextField name="nombre" label="Nombre" placeholder="Escribe tu nombre" required={true} error={errors.nombre}/>
            <div className="grid grid-cols-2">
              <TextField name="apaterno" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" required={true} error={errors.apaterno}/>
              <TextField name="amaterno" label="Apellido Materno" placeholder="Escribe tu apellido materno" error={errors.amaterno}/>
            </div>
            <div className="grid grid-cols-2">
              <DateField name="fecnac" label="Fecha de nacimiento" placeholder="Escribe tu edad" required={true} error={errors.fecnac}/>
              <TextField name="edonac" label="Estado de nacimiento" placeholder="Escribe el estado de nacimiento" required={true} error={errors.edonac}/>
            </div>
            <div className="grid grid-cols-2">
              <SelectField name="sexo" label="Sexo" placeholder="Selecciona tu sexo" required={true} error={errors.sexo}>
                <option value="">Selecciona tu sexo</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </SelectField>
              <TextField name="nac" label="Nacionalidad" placeholder="Escribe tu nacionalidad" required={true} error={errors.nac}/>
            </div>
            <TextField name="curp" label="CURP" placeholder="Escribe tu CURP" required={true} error={errors.curp}/>
            <TextField name="edo" label="Entidad federativa de residencia" placeholder="Escribe tu entidad federativa" required={true} error={errors.edo}/>
            <TextField name="mun" label="Municipio de residencia" placeholder="Escribe tu municipio" required={true} error={errors.mun}/>
            <TextField name="loc" label="Localidad de residencia" placeholder="Escribe tu localidad" required={true} error={errors.loc}/>
            <TextField name="tel" label="Telefono" placeholder="Escribe tu numero de telefono o celular" required={true} error={errors.tel}/>
            <TextField name="email" label="Correo Electronico" placeholder="Escribe la direccion de correo electronico" required={true} error={errors.email}/>
            <PasswordField name="password" label="Contraseña" placeholder="Escribe una contraseña" required={true} error={errors.password}/>

            <small className="m-2 text-slate-700">Al registrarte aceptas nuestras <a className="text-purple-500">politicas de privacidad</a></small>
            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Registrarse</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PacienteForm