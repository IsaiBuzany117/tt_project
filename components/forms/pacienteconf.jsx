import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import TextField from "../inputs/textfield";
import DateField from "../inputs/datefield";
import SelectField from "../inputs/select";
import Buttomsubmit from "../inputs/buttonsubmit";
import ChangePassword from '../ChangePassword'
import { estados } from "utils/estados";
import { pacientevalues, pacienteValidate } from "utils/paciente.config";

const PacienteConf = ({ data }) => {
  console.log(data)
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log('paciente')
    await fetch(`http://localhost:3000/api/paciente`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/paciente")
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Formik
        initialValues={data}
        // validate={(values) => }
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form>
            {/* <TextField name="a" label='A'/> */}
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
              <TextField
                name="loc"
                label="Localidad de residencia"
                placeholder="Escribe tu localidad"
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Información de contacto</legend>
              <TextField
                name="tel"
                label="Teléfono"
                placeholder="Escribe tu numero de teléfono o celular"
              />
              <TextField
                name="email"
                label="Correo Electrónico"
                placeholder="Escribe la direccion de correo electrónico"
              />
            </fieldset>
            <fieldset className="w-full px-24 mb-8 border-0 border-t-2 border-indigo-700">
              <legend className="text-2xl">Cambiar contraseña</legend>
              <ChangePassword id={data._id} />
            </fieldset>
            <Buttomsubmit value="Aceptar cambios" name="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PacienteConf;
