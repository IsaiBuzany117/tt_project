import TextArea from "./inputs/textarea"
import { Formik, Form } from "formik"
import { expedienteIvalues, pacienteIValidate } from 'utils/expedientem.config'

const ExpedienteMIPAYSForm = () => {
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
                            <p className="my-3">Síntomas generales</p>
                            <TextArea name="sint_gral" required={true} error={errors} />
                            <p className="my-3 font-bold">Órganos de los sentidos</p>
                            <p className="my-2 mx-3">Ojos</p>
                            <TextArea name="ojos" required={true} error={errors} />
                            <p className="my-2 mx-2">Oídos</p>
                            <TextArea name="oidos" required={true} error={errors} />
                            <p className="my-2 mx-2">Nariz</p>
                            <TextArea name="nariz" required={true} error={errors} />
                            <p className="my-2 mx-2">Garganta</p>
                            <TextArea name="garganta" required={true} error={errors} />
                            <p className="my-2 mx-2">Gusto</p>
                            <TextArea name="gusto" required={true} error={errors} />
                            <p className="my-6">Cardio Respiratorio</p>
                            <TextArea name="CR" required={true} error={errors} />
                            <p className="my-3">Vascular</p>
                            <TextArea name="vascular" required={true} error={errors} />
                            <p className="my-3">Urinario</p>
                            <TextArea name="urinario" required={true} error={errors} />
                            <p className="my-3">Genital</p>
                            <TextArea name="genital" required={true} error={errors} />
                            <p className="my-3">Digestivo</p>
                            <TextArea name="digestivo" required={true} error={errors} />
                            <p className="my-3">Hemolinfático</p>
                            <TextArea name="hemolin" required={true} error={errors} />
                            <p className="my-3">Endócrino</p>
                            <TextArea name="endo" required={true} error={errors} />
                            <p className="my-3">Nervioso</p>
                            <TextArea name="nervioso" required={true} error={errors} />
                            <p className="my-3">Psiquiátrico</p>
                            <TextArea name="Psiq" required={true} error={errors} />
                            <p className="my-3">Musculo-esquelético</p>
                            <TextArea name="mus_esq" required={true} error={errors} />
                            <p className="my-3">Interrogatorios especiales</p>
                            <TextArea name="int_esp" required={true} error={errors} />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ExpedienteMIPAYSForm