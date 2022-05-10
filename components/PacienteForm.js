import { useRouter } from "next/router"
import { Formik, Form } from "formik"
import TextField from "./TextField"
import DateField from "./DateField"
import SelectField from "./SelectField"
import PasswordField from "./PasswordField"
import ButtonSubmit from "./ButtonSubmit"
import {pacientevalues, pacienteValidate} from '../utils/paciente.config'
import {estados} from '../utils/estados'

const PacienteForm = () => {

  const router = useRouter()

  const handleSubmit = async (values) => {
    await fetch('http://localhost:3000/api/paciente', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      router.push('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Formik
        initialValues={pacientevalues}
        validate={values => pacienteValidate(values) }
        onSubmit={values => {
          const {fecnac} = values
          // values.fecnac = Number(fecnac.replace(/-/g, ''))
          console.log(values)
          handleSubmit(values)
        }}
      >
        {({errors}) => (
          <Form>
            <TextField name="nombre" label="Nombre" placeholder="Escribe tu nombre" required={true} error={errors.nombre}/>
            <div className="grid grid-cols-2">
              <TextField name="apaterno" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" required={true} error={errors.apaterno}/>
              <TextField name="amaterno" label="Apellido Materno" placeholder="Escribe tu apellido materno" required={false}/>
            </div>
            <div className="grid grid-cols-2">
              <DateField name="fecnac" label="Fecha de nacimiento" placeholder="Escribe tu edad" required={true} error={errors.fecnac}/>
              <SelectField name="edonac" label="Estado de nacimiento" placeholder="Escribe el estado de nacimiento" error={errors.edonac}>
                <option value="">Selecciona tu estado de nacimiento</option>
                {
                  estados.map((estado, i)=> (
                    <option value={estado.codigo} key={i}>{estado.nombre}</option>
                  ))
                }
              </SelectField>
            </div>
            <div className="grid grid-cols-2">
              <SelectField name="sexo" label="Sexo" placeholder="Selecciona tu sexo" required={true} error={errors.sexo}>
                <option value="">Selecciona tu sexo</option>
                <option value="M">Femenino</option>
                <option value="H">Masculino</option>
              </SelectField>
              <TextField name="nac" label="Nacionalidad" placeholder="Escribe tu nacionalidad" required={true} error={errors.nac}/>
            </div>
            <TextField name="curp" label="CURP" placeholder="Escribe tu CURP" required={true} error={errors.curp}/>
            <SelectField name="edo" label="Entidad federativa de residencia" placeholder="Escribe tu entidad federativa" error={errors.edo}>
              <option value="">Selecciona tu estado de residencia</option>
              {
                estados.map((estado, i)=> (
                  <option value={estado.codigo} key={i}>{estado.nombre}</option>
                ))
              }
            </SelectField>
            <TextField name="mun" label="Municipio de residencia" placeholder="Escribe tu municipio" required={true} error={errors.mun}/>
            <TextField name="loc" label="Localidad de residencia" placeholder="Escribe tu localidad" required={true} error={errors.loc}/>
            <TextField name="tel" label="Telefono" placeholder="Escribe tu numero de telefono o celular" required={false} error={errors.tel}/>
            <TextField name="email" label="Correo Electronico" placeholder="Escribe la direccion de correo electronico" required={true} error={errors.email}/>
            <PasswordField name="password" label="Contraseña" placeholder="Escribe una contraseña" required={true} error={errors.password}/>

            <small className="m-2 text-slate-700">Al registrarte aceptas nuestras <a className="text-indigo-500">politicas de privacidad</a></small>
            {/* <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Registrarse</button> */}
            <ButtonSubmit value="Registrarse" name="submit"/>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PacienteForm