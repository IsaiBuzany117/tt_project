import TextArea from "./inputs/textarea"
import TextField from "./inputs/textfield"
import { Formik, Form } from "formik"

const ExpedienteNEForm = () => {
    return (
        <>
            <Formik>
                <Form>
                    <div className="flex flex-col w-full">
                        <p className="my-3 mx-2">Evolución y actualización del cuadro clínico</p>
                        <TextArea name="evol_act" required={true} />
                        <p className="my-3 mx-2">Signos vitales(si se considera necesario)</p>
                        <TextField name="temperatura" label="Temperatura" required={true}/>
                        <TextField name="tens_art" label="Tensión arterial" required={true}/>
                        <TextField name="FR" label="Frecuencia respiratoria" required={true}/>
                        <TextField name="FC" label="Frecuencia cardiaca" required={true}/>
                        <TextField name="sat_ox" label="Saturación de oxígeno" required={true}/>
                        <p className="my-3 mx-2">Sintomatología</p>
                        <TextArea name="sintomas" required={true} />
                        <p className="my-3 mx-2">Resultados relevantes de estudios solicitados</p>
                        <TextArea name="res_est" required={true} />
                        <p className="my-3 mx-2">Diagnóstico y pronóstico</p>
                        <TextArea name="diag_pronostico" required={true} />
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default ExpedienteNEForm