import TextArea from "./TextArea";
import { Formik, Form } from "formik"
import { expedienteIvalues, pacienteIValidate } from '../utils/expedientem.config'

//Modificar conforme a las observaciones

const ExpedienteMPForm = () => {
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
                            <p className="my-3 mx-2">Enfermedades Congénitas</p>
                            <TextArea name="enf_cong" required={true} error={errors.enf_cong} />
                            <p className="my-3 mx-2">Enfermedades Propias de la Infancia</p>
                            <TextArea name="enf_infancia" required={true} error={errors.enf_infancia} />
                            <p className="my-3 mx-2">Quirúrgicos</p>
                            <TextArea name="qx" required={true} error={errors.qx} />
                            <p className="my-3 mx-2">Traumáticos</p>
                            <TextArea name="trauma" required={true} error={errors.trauma} />
                            <p className="my-3 mx-2">Alérgicos</p>
                            <TextArea name="alergia" required={true} error={errors.alergia} />
                            <p className="my-3 mx-2">Transfusionales</p>
                            <TextArea name="trans" required={true} error={errors.trans} />
                            <p className="my-3 mx-2">Intoxicaciones</p>
                            <TextArea name="intox" required={true} error={errors.intox} />
                            <p className="my-3 mx-2">Hospitalizaciones</p>
                            <TextArea name="hosp" required={true} error={errors.hosp} />
                            <p className="my-3 mx-2">Estudios de Laboratorio y gabinete</p>
                            <TextArea name="est_lab_gab" required={true} error={errors.est_lab_gab} />
                            <p className="my-3 mx-2">Terapéutica Empleada</p>
                            <TextArea name="terap_emp" required={true} error={errors.terap_emp} />
                            <p className="my-3 mx-2">Otras enfermedades</p>
                            <TextArea name="enfermedad" required={true} error={errors.enfermedad} />
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default ExpedienteMPForm