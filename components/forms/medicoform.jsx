import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import TextField from "../inputs/textfield";
import DateField from "../inputs/datefield";
import SelectField from "../inputs/select";
import PasswordField from "../inputs/passwordfield";
import ButtonSubmit from "../inputs/buttonsubmit";
import { medicovalues, medicoValidate } from "utils/medico.config";
import { estados } from "utils/estados";
import { especialidades } from "utils/especialidades";

const MedicoForm = () => {
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log(values)
    await fetch("http://localhost:3000/api/medico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Formik
        initialValues={medicovalues}
        validate={(values) => medicoValidate(values)}
        onSubmit={(values) => {
          const { experiencia, precio } = values;
          // values.fecnac = Number(fecnac.replace(/-/g, ''))
          values.experiencia = Number(experiencia);
          values.precio = Number(precio);
          // console.log(values);
          handleSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <TextField
              name="nombre"
              label="Nombre"
              placeholder="Escribe tu nombre"
              required
              error={errors.nombre}
            />
            <div className="grid grid-cols-2">
              <TextField
                name="apaterno"
                label="Apellido Paterno"
                placeholder="Escribe tu apellido paterno"
                required
                error={errors.apaterno}
              />
              <TextField
                name="amaterno"
                label="Apellido Materno"
                placeholder="Escribe tu apellido materno"
                required={false}
              />
            </div>
            <div className="grid grid-cols-2">
              <DateField
                name="fecnac"
                label="Fecha de nacimiento"
                placeholder="Escribe tu edad"
                required
                error={errors.fecnac}
              />
              <SelectField
                name="edonac"
                label="Estado de nacimiento"
                placeholder="Escribe el estado de nacimiento"
                error={errors.edonac}
              >
                <option value="">Selecciona tu estado de nacimiento</option>
                {estados.map((estado, i) => (
                  <option value={estado.codigo} key={i}>
                    {estado.nombre}
                  </option>
                ))}
              </SelectField>
            </div>
            <div className="grid grid-cols-2">
              <SelectField
                name="sexo"
                label="Sexo"
                placeholder="Selecciona tu sexo"
                required
                error={errors.sexo}
              >
                <option value="">Selecciona tu sexo</option>
                <option value="M">Femenino</option>
                <option value="H">Masculino</option>
              </SelectField>
              <TextField
                name="nac"
                label="Nacionalidad"
                placeholder="Escribe tu nacionalidad"
                required
                error={errors.nac}
              />
            </div>
            <TextField
              name="curp"
              label="CURP"
              placeholder="Escribe tu CURP"
              required
              error={errors.curp}
            />
            <div className="grid grid-cols-2">
              <SelectField
                name="edo"
                label="Entidad federativa de residencia"
                placeholder="Escribe tu entidad federativa"
                error={errors.edo}
              >
                <option value="">Selecciona tu estado de residencia</option>
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
                required
                error={errors.mun}
              />
            </div>

            <TextField
              name="loc"
              label="Localidad de residencia"
              placeholder="Escribe tu localidad"
              required
              error={errors.loc}
            />
            <TextField
              name="cedula"
              label="Cedula profesional"
              placeholder="Escribe tu cédula profesional"
              required
              error={errors.cedula}
            />

            <div className="grid grid-cols-2">
              <SelectField
                name="especialidad"
                label="Especialidad"
                placeholder="Escribe tu especialidad"
                required
                error={errors.especialidad}
              >
                <option value="">Selecciona tu especialidad</option>
                {especialidades.map((especialidad, i) => (
                  <option value={especialidad} key={i}>
                    {especialidad}
                  </option>
                ))}
              </SelectField>
              <TextField
                name="experiencia"
                label="Experiencia"
                placeholder="Escribe tus años de experiencia"
                required
                error={errors.experiencia}
              />
            </div>

            <TextField
              name="dirconsul"
              label="Dirección del Consultorio"
              placeholder="Escribe la dirección de tu consultorio"
              required={false}
            />
            <TextField
              name="precio"
              label="Precio por consulta (pesos mexicanos)"
              placeholder="Escribe el precio por consulta"
              required={false}
            />
            <TextField
              name="tel"
              label="Teléfono"
              placeholder="Escribe tu numero de telefono o celular"
              required={false}
            />
            <TextField
              name="email"
              label="Correo Electrónico"
              placeholder="Escribe la dirección de correo electronico"
              required
              error={errors.email}
            />
            <PasswordField
              name="password"
              label="Contraseña"
              placeholder="Escribe una contraseña"
              required
              error={errors.password}
            />

            <small className="m-2 text-slate-700">
              Al registrarte aceptas nuestras{" "}
              <a className="text-indigo-500">politicas de privacidad</a>
            </small>
            <ButtonSubmit value="Registrarse" name="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MedicoForm;
