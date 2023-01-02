import { useState } from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";
import { FieldArray } from 'formik'

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

const Notaevolucion = ({ values, isDisabled }) => {
    const { ne } = values;
    const tam = ne.length
    const disabledFields = {
        sv: isDisabled,
        nota: isDisabled,
    }
    const neObj = {
        fecha: new Date(Date.now()).toLocaleDateString(),
        sv: {
            temperatura: "",
            tensionarterial: "",
            frecresp: "",
            freccardi: "",
            satuoxigeno: "",
            otro: "",
        },
        eyadcc: "",
        sintomatologia: "",
        dyp: "",
        rrdes: "",
    }
    const [deshabilitado, setDeshabilitado] = useState(disabledFields)
    const [enabled, setEnabled] = useState(false)

    const enabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: false })
    const disabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: true })

    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de Evolución</h2>

            <FieldArray name="ne">
                {
                    ({ insert }) => (
                        <>
                            {/* <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                                    onClick={() =>
                                        {
                                        insert(ne.length, neObj)
                                        setEnabled(true)
                                        }
                                    }
                                >
                                    Agregar Nota
                                </button>
                            </div> */}
                            
                            { (<div>
                                <Accordion label="Signos vitales">
                                    <Textfield label="Temperatura" name={`ne.${tam}.sv.temperatura`} disabled={deshabilitado.sv} />
                                    <Textfield
                                        label="Tension arterial"
                                        name={`ne.${tam}.sv.tensionarterial`}
                                        disabled={deshabilitado.sv}
                                    />
                                    <Textfield
                                        label="Frecuancia respiratoria"
                                        name={`ne.${tam}.sv.frecresp`}
                                        disabled={deshabilitado.sv}
                                    />
                                    <Textfield
                                        label="Frecuancia cardiaca"
                                        name={`ne.${tam}.sv.freccardi`}
                                        disabled={deshabilitado.sv}
                                    />
                                    <Textfield
                                        label="Saturación de oxígeno"
                                        name={`ne.${tam}.sv.satuoxigeno`}
                                        disabled={deshabilitado.sv}
                                    />
                                    <Textfield label="Otro" name={`ne.${tam}.sv.otro`} disabled={deshabilitado.sv} />
                                    <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("sv")} disabledButton={() => disabledField("sv")} />
                                </Accordion>
                                <Accordion label="Nota">
                                    <Textfield
                                        label="Fecha"
                                        name={`ne.${tam}.fecha`}
                                        disabled={true}
                                    />
                                    <Textarea
                                        label="Evolución y actualización del cuadro clínico"
                                        name={`ne.${tam}.eyadcc`}
                                        disabled={deshabilitado.nota}
                                    />
                                    <Textarea label="Sintomatología" name={`ne.${tam}.sitomatologia`} disabled={deshabilitado.nota} />
                                    <Textarea label="Diagnóstico y pronóstico" name={`ne.${tam}.dyp`} disabled={deshabilitado.nota} />
                                    <Textarea
                                        label="Resultados relevantes de estudios solicitados"
                                        name={`ne.${tam}.rrdes`}
                                        disabled={deshabilitado.nota}
                                    />
                                    <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("nota")} disabledButton={() => disabledField("nota")} />
                                </Accordion>
                            </div>)}
                            {/* {
                                ne.length > 0 && ne.map((n, index) => (
                                    <div key={index}>
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
                                            <Textarea label="Sintomatología" name={`ne.${index}.sitomatologia`} disabled={deshabilitado.nota} />
                                            <Textarea label="Diagnóstico y pronóstico" name={`ne.${index}.dyp`} disabled={deshabilitado.nota} />
                                            <Textarea
                                                label="Resultados relevantes de estudios solicitados"
                                                name={`ne.${index}.rrdes`}
                                                disabled={deshabilitado.nota}
                                            />
                                            <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("nota")} disabledButton={() => disabledField("nota")} />
                                        </Accordion>
                                    </div>
                                ))
                            } */}
                        </>
                    )
                }
            </FieldArray>

        </div>
    );
};

export default Notaevolucion;