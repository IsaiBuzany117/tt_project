import { Formik, Form } from "formik"
import TextField from "./TextField"
import DateField from "./DateField"
import SelectField from "./SelectField"
import PasswordField from "./PasswordField"
import {medicovalues, medicoValidate} from '../utils/medico.config'

const MedicoForm = () => {

    return (
        <>
      <Formik
        initialValues={medicovalues}
        validate={values => medicoValidate(values) }
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({errors}) => (
          <Form>
            <TextField name="nombre" label="Nombre" placeholder="Escribe tu nombre" error={errors.nombre}/>
            <div className="grid grid-cols-2">
              <TextField name="apaterno" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" error={errors.apaterno}/>
              <TextField name="amaterno" label="Apellido Materno" placeholder="Escribe tu apellido materno" error={errors.amaterno}/>
            </div>
            <div className="grid grid-cols-2">
              <DateField name="fecnac" label="Fecha de nacimiento" placeholder="Escribe tu edad" error={errors.fecnac}/>
              <SelectField name="edonac" label="Estado de nacimiento" placeholder="Escribe el estado de nacimiento" error={errors.edonac}>
                <option value="">Selecciona tu estado de nacimiento</option>
                <option value="AS">Aguascalientes</option>
                <option value="BC">Baja California</option>
                <option value="BS">Baja California Sur</option>
                <option value="CC">Campeche</option>
                <option value="CL">Coahuila de Zaragoza</option>
                <option value="CM">Colima</option>
                <option value="CS">Chiapas</option>
                <option value="CH">Chihuahua</option>
                <option value="DF">Ciudad de México</option>
                <option value="DG">Durango</option>
                <option value="GT">Guanajuato</option>
                <option value="GR">Guerrero</option>
                <option value="HG">Hidalgo</option>
                <option value="JC">Jalisco</option>
                <option value="MC">México</option>
                <option value="MN">Michoacán de Ocampo</option>
                <option value="MS">Morelos</option>
                <option value="NT">Nayarit</option>
                <option value="NL">Nuevo León</option>
                <option value="OC">Oaxaca</option>
                <option value="PL">Puebla</option>
                <option value="QT">Querétaro</option>
                <option value="QR">Quintana Roo</option>
                <option value="SP">San Luis Potosí</option>
                <option value="SL">Sinaloa</option>
                <option value="SR">Sonora</option>
                <option value="TC">Tabasco</option>
                <option value="TS">Tamaulipas</option>
                <option value="TL">Tlaxcala</option>
                <option value="VZ">Veracruz de Ignacio de la Llave</option>
                <option value="YN">Yucátan</option>
                <option value="ZS">Zacatecas</option>
                <option value="NE">Extranjero</option>
                <option value="00">Se ignora</option>
              </SelectField>
            </div>
            <div className="grid grid-cols-2">
              <SelectField name="sexo" label="Sexo" placeholder="Selecciona tu sexo" error={errors.sexo}>
                <option value="">Selecciona tu sexo</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </SelectField>
              <TextField name="nac" label="Nacionalidad" placeholder="Escribe tu nacionalidad" error={errors.nac}/>
            </div>
            
            <TextField name="curp" label="CURP" placeholder="Escribe tu CURP" error={errors.curp}/>

            <div className="grid grid-cols-2">
                <SelectField name="edo" label="Entidad federativa de residencia" placeholder="Escribe tu entidad federativa" error={errors.edo}>
                  <option value="">Selecciona tu nacionalidad</option>
                  <option value="AS">Aguascalientes</option>
                  <option value="BC">Baja California</option>
                  <option value="BS">Baja California Sur</option>
                  <option value="CC">Campeche</option>
                  <option value="CL">Coahuila de Zaragoza</option>
                  <option value="CM">Colima</option>
                  <option value="CS">Chiapas</option>
                  <option value="CH">Chihuahua</option>
                  <option value="DF">Ciudad de México</option>
                 <option value="DG">Durango</option>
                  <option value="GT">Guanajuato</option>
                  <option value="GR">Guerrero</option>
                  <option value="HG">Hidalgo</option>
                  <option value="JC">Jalisco</option>
                  <option value="MC">México</option>
                  <option value="MN">Michoacán de Ocampo</option>
                  <option value="MS">Morelos</option>
                  <option value="NT">Nayarit</option>
                  <option value="NL">Nuevo León</option>
                  <option value="OC">Oaxaca</option>
                  <option value="PL">Puebla</option>
                  <option value="QT">Querétaro</option>
                  <option value="QR">Quintana Roo</option>
                  <option value="SP">San Luis Potosí</option>
                  <option value="SL">Sinaloa</option>
                  <option value="SR">Sonora</option>
                  <option value="TC">Tabasco</option>
                  <option value="TS">Tamaulipas</option>
                  <option value="TL">Tlaxcala</option>
                  <option value="VZ">Veracruz de Ignacio de la Llave</option>
                  <option value="YN">Yucátan</option>
                  <option value="ZS">Zacatecas</option>
                  <option value="NND">Se ignora</option>
                </SelectField>
                <TextField name="mun" label="Municipio de residencia" placeholder="Escribe tu municipio" error={errors.mun}/>
            </div>

            <TextField name="loc" label="Localidad de residencia" placeholder="Escribe tu localidad" error={errors.loc}/>
            <TextField name="cedula" label="Cedula profesional" placeholder="Escribe tu cédula profesional" error={errors.cedula}/>

            <div className="grid grid-cols-2">
              <TextField name="especialidad" label="Especialidad" placeholder="Escribe tu especialidad" error={errors.especialidad}/>
              <TextField name="experiencia" label="Experiencia" placeholder="Escribe tus años de experiencia" error={errors.experiencia}/>
            </div>

            <TextField name="dirConsul" label="Dirección del Consultorio" placeholder="Escribe la dirección de tu consultorio"/>
            <TextField name="precio" label="Precio por consulta (pesos mexicanos)" placeholder="Escribe el precio por cconsulta" />
            <TextField name="tel" label="Teléfono" placeholder="Escribe tu numero de telefono o celular" error={errors.tel}/>
            <TextField name="email" label="Correo Electrónico" placeholder="Escribe la dirección de correo electronico" error={errors.email}/>
            <PasswordField name="password" label="Contraseña" placeholder="Escribe una contraseña" error={errors.password}/>

            <small className="m-2 text-slate-700">Al registrarte aceptas nuestras <a className="text-purple-500">politicas de privacidad</a></small>
            <button type="submit" className="block m-2 bg-purple-600 border rounded-md p-2 mt-2 text-slate-100 hover:bg-purple-700">Registrarse</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default MedicoForm