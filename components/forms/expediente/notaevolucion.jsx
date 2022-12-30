import React from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";

const Notaevolucion = () => {
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de Evolución</h2>
            <Accordion label="Signos vitales">
                <Textfield label="Temperatura" name="ne.sv.temperatura" />
                <Textfield
                    label="Tension arterial"
                    name="ne.sv.tensionarterial"
                />
                <Textfield
                    label="Frecuancia respiratoria"
                    name="ne.sv.frecresp"
                />
                <Textfield
                    label="Frecuancia cardiaca"
                    name="ne.sv.freccardi"
                />
                <Textfield
                    label="Saturación de oxígeno"
                    name="ne.sv.satuoxigeno"
                />
                <Textfield label="Otro" name="ne.sv.otro" />
            </Accordion>
            <Accordion label="Evolución y actualización del cuadro clínico">
                <Textarea
                    label="Evolución y actualización del cuadro clínico"
                    name="ne.eyadcc"
                />
            </Accordion>
            <Accordion label="Sintomatología">
                <Textarea label="Sintomatología" name="ne.sintomatologia" />
            </Accordion>
            <Accordion label="Diagnóstico y pronóstico">
                <Textarea label="Diagnóstico y pronóstico" name="ne.dyp" />
            </Accordion>
            <Accordion label="Resultados relevantes de estudios solicitados">
                <Textarea
                    label="Resultados relevantes de estudios solicitados"
                    name="ne.rrdes"
                />
            </Accordion>
        </div>
    );
};

export default Notaevolucion;
