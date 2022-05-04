import TextField from "./TextField"
import { Formik, Form } from "formik"
import { expedienteIvalues, pacienteIValidate } from '../utils/expedientem.config'

const ExpedienteMForm = () => {
    return (
        <>
            <Formik
                initialValues={expedienteIvalues}
                validate={values => pacienteIValidate(values)}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ errors }) => (
                    <Form>

                        <div className="flex flex-col w-full">
                            
                            <p className='italic'>Ficha de identificación</p>
                            
                            <TextField name="nombre" label="Nombre" required={true} error={errors.nombre} />
                            <TextField name="apaterno" label="Apellido Paterno" required={true} error={errors.apaterno} />
                            <TextField name="amaterno" label="Apellido Materno" required={true} error={errors.amaterno} />
                            <TextField name="edad" label="Edad" required={true} error={errors.edad} />
                            <TextField name="fecnac" label="Fecha de nacimiento" required={true} error={errors.fecnac}  />
                            <TextField name="sexo" label="Sexo" required={true} error={errors.sexo}  />
                            <TextField name="edo" label="Entidad federativa de residencia" required={true} error={errors.edo} />
                            <TextField name="mun" label="Municipio de residencia" required={true} error={errors.mun} />
                            <TextField name="loc" label="Localidad de residencia" required={true} error={errors.loc} />
                            <TextField name="tel" label="Teléfono" required={true} error={errors.tel}  />
                            <TextField name="edonac" label="Lugar de nacimiento" required={true} error={errors.edonac}  />
                            <TextField name="edoC" label="Estado Civil" required={true} error={errors.edoC}  />
                            <TextField name="escol" label="Escolaridad" required={true} error={errors.escol}  />
                            <TextField name="ocup" label="Ocupación" required={true} error={errors.ocup}  />
                            <TextField name="relig" label="Religión" required={true} error={errors.relig}  />
                            <TextField name="claseS" label="Clase socio-económica" required={true} error={errors.claseS}  />
                            <TextField name="famA" label="Familiar a quien avisar" required={true} error={errors.famA}  />                            

                            <p className='italic'>Ficha de identificación</p>
                            <textarea className="" placeholder="Bio"></textarea>
                        </div>

                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ExpedienteMForm