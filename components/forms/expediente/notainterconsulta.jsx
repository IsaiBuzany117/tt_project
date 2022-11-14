import React from "react";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";

const Notainterconsulta = () => {
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">
                Nota de Interconsulta
            </h2>
            <Accordion label="Criterios de diagnóstico">
                <Textarea label="Criterios de diagnóstico" name="ni.cyd" />
            </Accordion>
            <Accordion label="Plan de estudios">
                <Textarea label="Plan de estudios" name="ni.pde" />
            </Accordion>
            <Accordion label="Sugerencias, diagnósticos y tratamiento">
                <Textarea
                    label="Sugerencias, diagnósticos y tratamiento"
                    name="ni.sdyt"
                />
            </Accordion>
        </div>
    );
};

export default Notainterconsulta;
