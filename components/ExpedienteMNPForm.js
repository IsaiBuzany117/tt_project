import TextField from "./TextField"
import TextArea from "./TextArea"
import { Formik, Form } from "formik"
import { expedienteIvalues, pacienteIValidate } from '../utils/expedientem.config'

const ExpedienteMNPForm = () => {
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
                            <TextField name="tabaco" label="Tabaquismo" required={true} error={errors.tabaco} />
                            <TextField name="alc" label="Alcoholismo" required={true} error={errors.alc} />
                            <p className="my-3 mx-2">Toxicomanías</p>
                            <TextArea name="toxi" required={true} error={errors.toxi} />
                            <p className="my-3 mx-2">Deporte y Ejercicio</p>
                            <TextArea name="dep_ej" required={true} error={errors.dep_ej} />
                            <p className="my-3 mx-2">Higiene</p>
                            <TextArea name="hig" required={true} error={errors.hig} />
                            <p className="my-3 mx-2">Habitación</p>
                            <TextArea name="hab" required={true} error={errors.hab} />
                            <p className="my-3 mx-2">Alimentación</p>
                            <TextArea name="alim" required={true} error={errors.alim} />
                            <p className="my-3 mx-2">Imnunizaciones y Sueros</p>
                            <TextArea name="inmu_suero" required={true} error={errors.inmu_suero} />
                            <p className="my-3 mx-2">Trabajo, Descanso y sueño</p>
                            <TextArea name="trab_dcso_s" required={true} error={errors.trab_dcso_s} />
                            <p className="my-3 mx-2">Prótesis</p>
                            <TextArea name="prot" required={true} error={errors.prot} />
                            <p className="my-3 mx-2">Pasatiempos y Hobbies</p>
                            <TextArea name="hobby" required={true} error={errors.hobby} />
                            <p className="my-3 mx-2">Integración Familiar</p>
                            <TextArea name="int_fam" required={true} error={errors.int_fam} />
                            <p className="my-3 mx-2">Actitud ante la Vida</p>
                            <TextArea name="att" required={true} error={errors.att} />
                            <p className="my-3 mx-2">Otros problemas</p>
                            <TextArea name="problema" required={true} error={errors.problema} />

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ExpedienteMNPForm