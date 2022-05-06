import TextArea from "./TextArea"
import { Formik, Form } from "formik"

const ExpedienteNEForm = () => {
    return (
        <>
            <Formik>
                <Form>
                    <div className="flex flex-col w-full">
                        <p className="my-3 mx-2">Evolución y actualización del cuadro clínico</p>
                        <TextArea name="evol_act" required={true} />
                        <p className="my-3 mx-2">Signos vitales(si se considera necesaio)</p>
                        <TextArea name="sig_vit" required={true} />
                        <p className="my-3 mx-2">Resultados relevantes de estudios solicitados</p>
                        <TextArea name="res_est" required={true} />
                        <p className="my-3 mx-2">Diagnóstico o problema clínico</p>
                        <TextArea name="diag_cli" required={true} />
                        <p className="my-3 mx-2">Pronóstico</p>
                        <TextArea name="pronostico" required={true} />
                        <p className="my-3 mx-2">Tratamiento e indicaciones médicas</p>
                        <TextArea name="tratamiento_med" required={true} />
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default ExpedienteNEForm