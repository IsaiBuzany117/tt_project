import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import TextField from "../inputs/textfield";
import DateField from "../inputs/datefield";
import SelectField from "../inputs/select";
import Buttomsubmit from "../inputs/buttonsubmit";
import ChangePassword from '../ChangePassword'
import { estados } from "utils/estados";
import { especialidades } from "utils/especialidades";
import { medicovalues, medicoValidate } from "utils/medico.config";

const MedicoConf = ({ data, id }) => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    await fetch(`http://localhost:3000/api/medico`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // router.push(`/inicio/${data.usertype}/${data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Formik
        initialValues={data}
        // validate={(values) => medicoValidate(values)}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Datos personales</legend>
              <TextField
                name="nombre"
                label="Nombre"
                placeholder="Escribe tu nombre"
                disabled
              />
              <div className="grid grid-cols-2">
                <TextField
                  name="apaterno"
                  label="Apellido Paterno"
                  placeholder="Escribe tu apellido paterno"
                  disabled
                />
                <TextField
                  name="amaterno"
                  label="Apellido Materno"
                  placeholder="Escribe tu apellido materno"
                  disabled
                />
              </div>
              <div className="grid grid-cols-2">
                <DateField
                  name="fecnac"
                  label="Fecha de nacimiento"
                  placeholder="Escribe tu edad"
                  disabled
                />
                <TextField
                  name="nac"
                  label="Nacionalidad"
                  placeholder="Escribe tu nacionalidad"
                />
              </div>
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Domicilio</legend>
              <div className="grid grid-cols-2">
                <SelectField
                  name="edo"
                  label="Entidad federativa de residencia"
                  placeholder="Escribe tu entidad federativa"
                >
                  <option value="">Selecciona tu nacionalidad</option>
                  {estados.map((estado, i) => (
                    <option value={estado.codigo} key={i}>
                      {estado.nombre}
                    </option>
                  ))}
                </SelectField>
                <TextField
                  name="mun"
                  label="Municipio de residencia"
                  placeholder="Escribe tu municipio"
                />
              </div>
              <TextField
                name="loc"
                label="Localidad de residencia"
                placeholder="Escribe tu localidad"
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Informacion preofesional</legend>
              <div className="grid grid-cols-2">
                <SelectField
                  name="especialidad"
                  label="Especialidad"
                  placeholder="Escribe tu especialidad"
                  required={true}
                  error={errors.especialidad}
                >
                  <option value="">Selecciona tu especialidad</option>
                  {especialidades.map((especialidad, i) => (
                    <option value={especialidad} key={i}>
                      {especialidad}
                    </option>
                  ))}
                </SelectField>
                {/* <TextField name="especialidad" label="Especialidad" placeholder="Escribe tu especialidad" /> */}
                <TextField
                  name="experiencia"
                  label="Experiencia"
                  placeholder="Escribe tus años de experiencia"
                />
              </div>
              <TextField
                name="cedula"
                label="Cedula profesional"
                placeholder="Escribe tus años de experiencia"
                disabled
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Informacion del consultorio</legend>
              <TextField
                name="dirconsul"
                label="Dirección del Consultorio"
                placeholder="Escribe la dirección de tu consultorio"
              />
              <TextField
                name="precio"
                label="Precio por consulta (pesos mexicanos)"
                placeholder="Escribe el precio por cconsulta"
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Informacion de contacto</legend>
              <TextField
                name="tel"
                label="Teléfono"
                placeholder="Escribe tu numero de telefono o celular"
              />
              <TextField
                name="email"
                label="Correo Electrónico"
                placeholder="Escribe la dirección de correo electronico"
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Cambiar contraseña</legend>
              {/* <button onClick={() => alert('asdas')}>click</button> */}
              <ChangePassword id={data._id} />
            </fieldset>
            <Buttomsubmit value="Aceptar cambios" name="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MedicoConf;
