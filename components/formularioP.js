import { Formik, Form } from "formik"
import InputField from "./inputfield"
import RadioButton from "./radiobutton"
import {pacientevalues, pacienteValidate} from '../utils/formconfig'



const FormularioP = () => {
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
            <InputField name="nombre" label="Nombre" type="text" placeholder="Escribe tu nombre" error={errors.nombre}/>
            <div className="grid grid-cols-2">
              <InputField name="apaterno" label="Apellido Paterno" type="text" placeholder="Escribe tu apellido paterno" error={errors.apaterno}/>
              <InputField name="amaterno" label="Apellido Materno" type="text" placeholder="Escribe tu apellido materno" error={errors.amaterno}/>
            </div>
            <div className="grid grid-cols-2">
              <InputField name="edad" label="Edad" type="text" placeholder="Escribe tu edad" error={errors.edad}/>
              <div className="flex flex-col my-2 mx-2">
                <label>Sexo<span className="text-red-500">*</span></label>
                <div className="flex m-1">
                  <RadioButton type="radio" name="sexo" value="Masculino"/>
                  <RadioButton type="radio" name="sexo" value="Femenino"/>
                </div>
              </div>
            </div>
            <InputField name="curp" label="CURP" type="text" placeholder="Escribe tu CURP" error={errors.curp}/>
            <InputField name="tel" label="Telefono" type="text" placeholder="Escribe tu numero de telefono o celular" error={errors.tel}/>
            <InputField name="direc" label="Direccion" type="text" placeholder="Escribe la direccion de tu domicilio" error={errors.direc}/>
            <InputField name="email" label="Correo Electronico" type="email" placeholder="Escribe la direccion de correo electronico" error={errors.email}/>

            <small className="m-2 text-slate-700">Al registrarte aceptas nuestras <a className="text-purple-500">politicas de privacidad</a></small>
            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Registrarse</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FormularioP