import React from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";

const Exploracion = ({ errors }) => {
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Exploracion fisica</h2>
            <Accordion label="Aspecto general">
                <Textarea label='Apecto general'name="ef.aspectogeneral" />
            </Accordion>
            <Accordion label="Signos vitales">
                <Textfield label="Temperatura" name="ef.sv.temperatura" />
                <Textfield
                    label="Tension arterial"
                    name="ef.sv.tensionarterial"
                />
                <Textfield
                    label="Frecuencia respiratoria/cardiaca"
                    name="ef.sv.frecrespycardi"
                />
                <Textfield
                    label="Saturacion de oxigeno"
                    name="ef.sv.satuoxigeno"
                />
                <Textarea label="Otro" name="ef.sv.otro" />
            </Accordion>
            <Accordion label="Somatometría">
                <Textfield label="Peso" name="ef.somatometría.peso" />
                <Textfield label="Talla" name="ef.somatometría.talla" />
                <Textfield label="IMC" name="ef.somatometría.imc" />
            </Accordion>
            <Accordion label="Cabeza">
                <Textarea label="Cabeza" name="ef.cabeza" />
            </Accordion>
            <Accordion label="Cuello">
                <Textarea label="Cuello" name="ef.cuello" />
            </Accordion>
            <Accordion label="Torax">
                <Textarea label="Torax" name="ef.torax" />
            </Accordion>
            <Accordion label="Abdomen">
                <Textarea label="Abdomen" name="ef.abdomen" />
            </Accordion>
            <Accordion label="Extremidades">
                <Textarea label="Extremidades" name="ef.extremidades" />
            </Accordion>
            <Accordion label="Genitales">
                <Textarea label="Genitales" name="ef.genitales" />
            </Accordion>
            <Accordion label="Exploraciones especiales">
                <Textarea
                    label="Exploraciones especiales"
                    name="ef.exploracionesespeciales"
                />
            </Accordion>
        </div>
    );
};

export default Exploracion;
