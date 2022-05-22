import { useRouter } from 'next/router'
import Link from 'next/link'
import { Formik, Form } from "formik"
import TextField from "./TextField"
import DateField from "./DateField"
import SelectField from "./SelectField"
import { estados } from "../utils/estados"
import {pacientevalues, pacienteValidate} from '../utils/paciente.config'

const PacienteConf = ({data, id}) => {

  const router = useRouter()

  const handleSubmit = async (values) => {
    await fetch(`http://localhost:3000/api/paciente/${id}`, {
      method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      router.push(`/inicio/${data.usertype}/${data.id}`)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Formik
        initialValues={data}
        validate={values => pacienteValidate(values) }
        onSubmit={values => {
          console.log(values)
          handleSubmit(values)
        }}
      >
        {({errors}) => (
          <Form>
            <TextField   name="nombre" label="Nombre" placeholder="Escribe tu nombre" disabled={true} />
            <div className="grid grid-cols-2">
              <TextField name="apaterno" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" disabled={true} />
              <TextField name="amaterno" label="Apellido Materno" placeholder="Escribe tu apellido materno" disabled={true}/>
            </div>      
            
            <div className="grid grid-cols-2">
                <DateField name="fecnac" label="Fecha de nacimiento" placeholder="Escribe tu edad" disabled={true}/>
                <TextField name="nac" label="Nacionalidad" placeholder="Escribe tu nacionalidad" />
            </div>
            
            <SelectField name="edo" label="Entidad federativa de residencia" placeholder="Escribe tu entidad federativa">
                  <option value="">Selecciona tu nacionalidad</option>
                  {
                    estados.map((estado, i)=> (
                      <option value={estado.codigo} key={i}>{estado.nombre}</option>
                    ))
                  }
                </SelectField>
            <TextField name="mun" label="Municipio de residencia" placeholder="Escribe tu municipio" />
            <TextField name="loc" label="Localidad de residencia" placeholder="Escribe tu localidad" />
            
            <TextField name="tel" label="Telefono" placeholder="Escribe tu numero de telefono o celular"/>
            <TextField name="email" label="Correo Electronico" placeholder="Escribe la direccion de correo electronico" />
            <Link href="/configCuenta/cambiar">
              <a className="text-indigo-500">Cambiar mi contraseña</a>
            </Link>

            <button type="submit" className="block m-2 bg-indigo-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-indigo-700">Aceptar</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PacienteConf