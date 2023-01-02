import { useState } from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";
import {FieldArray} from 'formik'

const DisabledButtons = ({ isDisabled, enabledButton, disabledButton }) => {
    return (
        <>
            {
                isDisabled && (
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="my-1 mx-2 py-1 px-4 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                            onClick={enabledButton}
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="my-1 mx-2 py-1 px-4 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                            onClick={disabledButton}
                        >
                            Guardar
                        </button>
                    </div>
                )
            }
        </>
    )
}

const Notaevolucion = ({ values, isDisabled, index }) => {
    const { ne } = values;
    const disabledFields = {
        sv: isDisabled,
        nota: isDisabled,
    }
    const [deshabilitado, setDeshabilitado] = useState(disabledFields)

    const enabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: false })
    const disabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: true })

    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de Evolución</h2>
            <Accordion label="Signos vitales">
                <Textfield label="Temperatura" name={`ne.aux.sv.temperatura`} disabled={deshabilitado.sv} />
                <Textfield
                    label="Tension arterial"
                    name={`ne.aux.sv.tensionarterial`}
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Frecuancia respiratoria"
                    name={`ne.aux.sv.frecresp`}
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Frecuancia cardiaca"
                    name={`ne.aux.sv.freccardi`}
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Saturación de oxígeno"
                    name={`ne.aux.sv.satuoxigeno`}
                    disabled={deshabilitado.sv}
                />
                <Textfield label="Otro" name={`ne.aux.sv.otro`} disabled={deshabilitado.sv} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("sv")} disabledButton={() => disabledField("sv")} />
            </Accordion>
            <Accordion label="Nota">
                <Textfield
                    label="Fecha"
                    name={`ne.aux.fecha`}
                    disabled={true}
                />
                <Textarea
                    label="Evolución y actualización del cuadro clínico"
                    name={`ne.aux.eyadcc`}
                    disabled={deshabilitado.nota}
                />
                <Textarea label="Sintomatología" name={`ne.aux.sintomatologia`} disabled={deshabilitado.nota} />
                <Textarea label="Diagnóstico y pronóstico" name={`ne.aux.dyp`} disabled={deshabilitado.nota} />
                <Textarea
                    label="Resultados relevantes de estudios solicitados"
                    name={`ne.aux.rrdes`}
                    disabled={deshabilitado.nota}
                />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("nota")} disabledButton={() => disabledField("nota")} />
            </Accordion>
            {/* <FieldArray name="ne">
                {
                    ({push}) => (
                        <>
                        {
                            ne.length > 0 && ne.map((n, i) => (
                                <div key={i}>
                                    <Accordion label="Signos vitales">
                                        <Textfield label="Temperatura" name={`ne.${index}.sv.temperatura`} disabled={deshabilitado.sv} />
                                        <Textfield
                                            label="Tension arterial"
                                            name={`ne.${index}.sv.tensionarterial`}
                                            disabled={deshabilitado.sv}
                                        />
                                        <Textfield
                                            label="Frecuancia respiratoria"
                                            name={`ne.${index}.sv.frecresp`}
                                            disabled={deshabilitado.sv}
                                        />
                                        <Textfield
                                            label="Frecuancia cardiaca"
                                            name={`ne.${index}.sv.freccardi`}
                                            disabled={deshabilitado.sv}
                                        />
                                        <Textfield
                                            label="Saturación de oxígeno"
                                            name={`ne.${index}.sv.satuoxigeno`}
                                            disabled={deshabilitado.sv}
                                        />
                                        <Textfield label="Otro" name={`ne.${index}.sv.otro`} disabled={deshabilitado.sv} />
                                        <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("sv")} disabledButton={() => disabledField("sv")} />
                                    </Accordion>
                                    <Accordion label="Nota">
                                        <Textfield
                                            label="Fecha"
                                            name={`ne.${index}.fecha`}
                                            disabled={true}
                                        />
                                        <Textarea
                                            label="Evolución y actualización del cuadro clínico"
                                            name={`ne.${index}.eyadcc`}
                                            disabled={deshabilitado.nota}
                                        />
                                        <Textarea label="Sintomatología" name={`ne.${i}.sitomatologia`} disabled={deshabilitado.nota} />
                                        <Textarea label="Diagnóstico y pronóstico" name={`ne.${i}.dyp`} disabled={deshabilitado.nota} />
                                        <Textarea
                                            label="Resultados relevantes de estudios solicitados"
                                            name={`ne.${index}.rrdes`}
                                            disabled={deshabilitado.nota}
                                        />
                                        <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("nota")} disabledButton={() => disabledField("nota")} />
                                    </Accordion>
                                </div>
                            ))
                        }
                        </>
                    )
                }
            </FieldArray> */}
            
        </div>
    );
};

export default Notaevolucion;
