import {useState} from "react";
import Accordion from "components/accordion";
import Textarea from "components/inputs/textarea";
import { FieldArray } from 'formik'
import TextField from "components/inputs/textfield";

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

const Notainterconsulta = ({values, isDisabled, index}) => {
    const {ni} = values
    const disabledFields = {
        ni: isDisabled,
    }
    const [deshabilitado, setDeshabilitado] = useState(disabledFields)

    const enabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: false })
    const disabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: true })

    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">
                Nota de Interconsulta
            </h2>
            <Accordion label="Nota de Interconsulta">
                <TextField label="Fecha" name={`ni.aux.fecha`} disabled={true} />
                <Textarea label="Criterios de diagnóstico" name={`ni.aux.cyd`} disabled={deshabilitado.ni} />
                <Textarea label="Plan de estudios" name={`ni.aux.pde`} disabled={deshabilitado.ni} />
                <Textarea
                    label="Sugerencias, diagnósticos y tratamiento"
                    name={`ni.aux.sdyt`}
                    disabled={deshabilitado.ni}
                />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("ni")} disabledButton={() => disabledField("ni")} />
            </Accordion>
            {/* <FieldArray name="ni">
                {
                    ({push}) => (
                        <>
                        {
                            ni.length && ni.map((n, i)=> (
                                <div key={i}>
                                    <Accordion label="Nota de Interconsulta">
                                        <Textarea label="Criterios de diagnóstico" name={`ni.${index}.cyd`} disabled={deshabilitado.ni} />
                                        <Textarea label="Plan de estudios" name={`ni.${index}.pde`} disabled={deshabilitado.ni} />
                                        <Textarea
                                            label="Sugerencias, diagnósticos y tratamiento"
                                            name={`ni.${index}.sdyt`}
                                            disabled={deshabilitado.ni}
                                        />
                                        <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("ni")} disabledButton={() => disabledField("ni")} />
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

export default Notainterconsulta;
