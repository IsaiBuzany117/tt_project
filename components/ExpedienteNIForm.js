import TextArea from "./TextArea"
import { Formik, Form } from "formik"

const ExpedienteNIForm = () => {
    return (
        <>
            <Formik>
                <Form>
                    <div className="flex flex-col w-full">
                        <p className="my-3 mx-2">Criterios de diagnóstico</p>
                        <TextArea name="criteriosD" required={true} />
                        <p className="my-3 mx-2">Plan de estudios</p>
                        <TextArea name="planE" required={true} />
                        <p className="my-3 mx-2">Sugerencias diagnósticas y tratamiento</p>
                        <TextArea name="sugD" required={true} />
                        <p className="my-3 mx-2">Otros datos</p>
                        <TextArea name="otrosD" required={true} />
                        <p className="my-3 mx-2">Otras revisiones</p>
                        <TextArea name="otrasR" required={true} />
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default ExpedienteNIForm