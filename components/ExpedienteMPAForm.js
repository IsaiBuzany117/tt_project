import TextField from "./TextField"
import TextArea from "./TextArea"
import { Formik, Form } from "formik"
import { expedienteIvalues, pacienteIValidate } from '../utils/expedientem.config'

const ExpedienteMPAForm = () => {
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
                            <TextField name="mot_cons" label="Motivo de consulta" required={true} error={errors.mot_cons} />
                            <p className="my-3 mx-2">Factores</p>
                            <TextArea name="factor" required={true} error={errors.factor} />
                            <p className="my-3 mx-2">Inicio</p>
                            <TextArea name="inicio" required={true} error={errors.inicio} />
                            <p className="my-3 mx-2">Sintomatología</p>
                            <TextArea name="sintomas" required={true} error={errors.sintomas} />
                            <p className="my-3 mx-2">Evolución</p>
                            <TextArea name="evol" required={true} error={errors.evol} />
                            <p className="my-3 mx-2">Estado Actual</p>
                            <TextArea name="edo_act" required={true} error={errors.edo_act} />
                            <p className="my-3 mx-2">Lista de problemas</p>
                            <TextArea name="list_prob" required={true} error={errors.list_prob} />
                        </div>
                    </Form>
                )
                }

            </Formik>
        </>
    )
}

export default ExpedienteMPAForm