import React, { useState } from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";

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

const Exploracion = ({ errors, isDisabled }) => {
    const disabledFields = {
        aspectogeneral: isDisabled,
        sv: isDisabled,
        somatometría: isDisabled,
        cabeza: isDisabled,
        cuello: isDisabled,
        torax: isDisabled,
        abdomen: isDisabled,
        extremidades: isDisabled,
        genitales: isDisabled,
        exploracionesespeciales: isDisabled,
    }
    const [deshabilitado, setDeshabilitado] = useState(disabledFields)

    const enabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: false })
    const disabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: true })

    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Exploración física</h2>
            <Accordion label="Aspecto general">
                <Textarea label='Apecto general'name="ef.aspectogeneral" disabled={deshabilitado.aspectogeneral}/>
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("aspectogeneral")} disabledButton={() => disabledField("aspectogeneral")} />
            </Accordion>
            <Accordion label="Signos vitales">
                <Textfield label="Temperatura" name="ef.sv.temperatura" disabled={deshabilitado.sv} />
                <Textfield
                    label="Tensión arterial"
                    name="ef.sv.tensionarterial"
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Frecuencia respiratoria"
                    name="ef.sv.frecresp"
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Frecuencia cardíaca"
                    name="ef.sv.freccardi"
                    disabled={deshabilitado.sv}
                />
                <Textfield
                    label="Saturación de oxígeno"
                    name="ef.sv.satuoxigeno"
                    disabled={deshabilitado.sv}
                />
                <Textarea label="Otro" name="ef.sv.otro" disabled={deshabilitado.sv} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("sv")} disabledButton={() => disabledField("sv")} />
            </Accordion>
            <Accordion label="Somatometría">
                <Textfield label="Peso" name="ef.somatometría.peso" disabled={deshabilitado.somatometría} />
                <Textfield label="Talla" name="ef.somatometría.talla" disabled={deshabilitado.somatometría} />
                <Textfield label="IMC" name="ef.somatometría.imc" disabled={deshabilitado.somatometría} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("somatometría")} disabledButton={() => disabledField("somatometría")} />
            </Accordion>
            <Accordion label="Cabeza">
                <Textarea label="Cabeza" name="ef.cabeza" disabled={deshabilitado.cabeza} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("cabeza")} disabledButton={() => disabledField("cabeza")} />
            </Accordion>
            <Accordion label="Cuello">
                <Textarea label="Cuello" name="ef.cuello" disabled={deshabilitado.cuello} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("cuello")} disabledButton={() => disabledField("cuello")} />
            </Accordion>
            <Accordion label="Tórax">
                <Textarea label="Tórax" name="ef.torax" disabled={deshabilitado.torax} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("fi")} disabledButton={() => disabledField("fi")} />
            </Accordion>
            <Accordion label="Abdomen">
                <Textarea label="Abdomen" name="ef.abdomen" disabled={deshabilitado.abdomen} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("torax")} disabledButton={() => disabledField("torax")} />
            </Accordion>
            <Accordion label="Extremidades">
                <Textarea label="Extremidades" name="ef.extremidades" disabled={deshabilitado.extremidades} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("extremidades")} disabledButton={() => disabledField("extremidades")} />
            </Accordion>
            <Accordion label="Genitales">
                <Textarea label="Genitales" name="ef.genitales" disabled={deshabilitado.genitales} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("genitales")} disabledButton={() => disabledField("genitales")} />
            </Accordion>
            <Accordion label="Exploraciones especiales">
                <Textarea
                    label="Exploraciones especiales"
                    name="ef.exploracionesespeciales"
                    disabled={deshabilitado.exploracionesespeciales}
                />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("exploracionesespeciales")} disabledButton={() => disabledField("exploracionesespeciales")} />
            </Accordion>
        </div>
    );
};

export default Exploracion;
