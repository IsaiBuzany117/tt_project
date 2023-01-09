import { useState } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import { estados } from "utils/estados";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";
import Select from "components/inputs/select";
import Radio from "components/inputs/radiobutton";
import Checkbox from "components/inputs/checkbox";

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

const Interrogatorio = ({ values, errors, isDisabled }) => {
    const { ahf, apnp } = values.i;
    const disabledFields = {
        fi: isDisabled,
        ahf: isDisabled,
        app: isDisabled,
        apnp: isDisabled,
        pa: isDisabled,
        ipays: isDisabled,
    }
    const [deshabilitado, setDeshabilitado] = useState(disabledFields)

    const enabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: false })
    const disabledField = (key) => setDeshabilitado({ ...deshabilitado, [key]: true })

    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Interrogatorio</h2>
            <Accordion label="Ficha de indentificación">
                <Textfield
                    name="curp"
                    label="CURP"
                    required
                    disabled={isDisabled}
                    error={errors.curp}
                />
                <Textfield
                    name="i.fi.nombre"
                    label="Nombre"
                    required
                    error={errors.nombre}
                    disabled={isDisabled}
                />
                <Textfield
                    name="i.fi.apaterno"
                    label="Apellido Paterno"
                    required
                    error={errors.apaterno}
                    disabled={isDisabled}
                />
                <Textfield
                    name="i.fi.amaterno"
                    label="Apellido Materno"
                    required
                    error={errors.amaterno}
                    disabled={isDisabled}
                />
                <Textfield
                    name="i.fi.edad"
                    label="Edad"
                    required
                    error={errors.edad}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.fecnac"
                    label="Fecha de nacimiento"
                    required
                    error={errors.fecnac}
                    disabled={isDisabled}
                />
                <Select
                    name="i.fi.sexo"
                    label="Sexo"
                    placeholder="Selecciona tu sexo"
                    required
                    error={errors.sexo}
                    disabled={isDisabled}
                >
                    <option value=""></option>
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                </Select>
                <Select
                    name="i.fi.edo"
                    label="Entidad federativa de residencia"
                    error={errors.edo}
                    disabled={deshabilitado.fi}
                >
                    <option value=""></option>
                    {estados.map((estado, i) => (
                        <option value={estado.codigo} key={i}>
                            {estado.nombre}
                        </option>
                    ))}
                </Select>
                <Textfield
                    name="i.fi.mun"
                    label="Municipio de residencia"
                    required
                    error={errors.mun}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.loc"
                    label="Localidad de residencia"
                    required
                    error={errors.loc}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.tel"
                    label="Teléfono"
                    required
                    error={errors.tel}
                    disabled={deshabilitado.fi}
                />
                <Select
                    name="i.fi.edonac"
                    label="Lugar de nacimiento"
                    error={errors.edonac}
                    disabled={isDisabled}
                >
                    <option value=""></option>
                    {estados.map((estado, i) => (
                        <option value={estado.codigo} key={i}>
                            {estado.nombre}
                        </option>
                    ))}
                </Select>
                <Textfield
                    name="i.fi.edocivil"
                    label="Estado Civil"
                    required
                    error={errors.edocivil}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.escolaridad"
                    label="Escolaridad"
                    required
                    error={errors.escolaridad}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.ocupacion"
                    label="Ocupación"
                    required
                    error={errors.ocupacion}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.religion"
                    label="Religión"
                    required
                    error={errors.relig}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.claseSE"
                    label="Clase socio-económica"
                    required
                    error={errors.claseSE}
                    disabled={deshabilitado.fi}
                />
                <Textfield
                    name="i.fi.famA"
                    label="Familiar a quien avisar"
                    required
                    error={errors.famA}
                    disabled={deshabilitado.fi}
                />
                <Select
                    name="i.fi.sangre"
                    label="Grupo sanguíneo"
                    required
                    error={errors.sangre}
                    disabled={isDisabled}
                >
                    <option value=""></option>
                    <option value="A+">A positivo (A +)</option>
                    <option value="A-">A negativo (A-)</option>
                    <option value="B+">B positivo (B +)</option>
                    <option value="B-">B negativo (B-)</option>
                    <option value="AB+">AB positivo (AB+)</option>
                    <option value="AB-">AB negativo (AB-)</option>
                    <option value="O+">O positivo (O+)</option>
                    <option value="O-">O negativo (O-)</option>
                </Select>
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("fi")} disabledButton={() => disabledField("fi")} />
            </Accordion>
            <Accordion label="Antecedentes heredo-familiares">
                <FieldArray name="i.ahf">
                    {({ remove, push }) => (
                        <>
                            {ahf.length > 0 &&
                                ahf.map((f, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="grid grid-cols-2">
                                            <Textfield
                                                label="Nombre del familiar"
                                                placeholder="Escriba el nombre del familiar del paciente"
                                                name={`i.ahf.${i}.familiar`}
                                                disabled={deshabilitado.ahf}
                                            />
                                            <Select
                                                label="Parentesco"
                                                name={`i.ahf.${i}.parentesco`}
                                                disabled={deshabilitado.ahf}
                                            >
                                                <option value="">
                                                    Seleccione el parentesco del
                                                    familiar con el paciente
                                                </option>
                                                <option value="Madre/Padre">
                                                    Madre/Padre
                                                </option>
                                                <option value="Abuelo/a">
                                                    Abuelo/a
                                                </option>
                                                <option value="Hermano/a">
                                                    Hermano/a
                                                </option>
                                                <option value="Tio/a">
                                                    Tio/a
                                                </option>
                                                <option value="Otro">
                                                    Otro
                                                </option>
                                            </Select>
                                        </div>
                                        <Textarea
                                            placeholder="Escriba los antecedentes del paciente..."
                                            name={`i.ahf.${i}.antecedentes`}
                                            disabled={deshabilitado.ahf}
                                        />
                                        {
                                            !isDisabled && (
                                                <div className="flex justify-end">
                                                    <button
                                                        type="button"
                                                        className="my-1 py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                                                        onClick={() => remove(i)}
                                                    >
                                                        Quitar familiar
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                            {
                                !isDisabled && (
                                    <button
                                        type="button"
                                        className="py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                                        onClick={() =>
                                            push({
                                                familiar: "",
                                                parentesco: "",
                                                antecedentes: "",
                                            })
                                        }
                                    >
                                        Agregar familiar
                                    </button>
                                )
                            }
                        </>
                    )}
                </FieldArray>
            </Accordion>
            <Accordion label="Antecedentes personales patológicos">
                <div className="px-4 pb-2">
                    <h3 className="font-semibold">Enfermedades congénitas</h3>
                    <div>
                        <Checkbox
                            label="Asma"
                            name="i.app.congenitas.patologias"
                            value="Asma"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Diabetes"
                            name="i.app.congenitas.patologias"
                            value="Diabetes"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="ETS"
                            name="i.app.congenitas.patologias"
                            value="3"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Epilepsia"
                            name="i.app.congenitas.patologias"
                            value="4"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Influenza(gripe)"
                            name="i.app.congenitas.patologias"
                            value="Influenza(gripe)"
                            disabled={deshabilitado.app}
                        />
                        <Textfield
                            label="Otra"
                            placeholder="Escriba la patología(s) del paciente"
                            name="i.app.congenitas.otro"
                            disabled={deshabilitado.app}
                        />
                        <Textarea
                            label="Consideraciones"
                            name="i.app.congenitas.consideraciones"
                            disabled={deshabilitado.app}
                        />
                    </div>
                </div>
                <div className="px-4 pb-2">
                    <h3 className="font-semibold">
                        Enfermedades propias de la infancia
                    </h3>
                    <div>
                        <Checkbox
                            label="Varicela"
                            name="i.app.propias_infancia.patologias"
                            value="Varicela"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Sinusitis"
                            name="i.app.propias_infancia.patologias"
                            value="Sinusitis"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Dolor de garganta"
                            name="i.app.propias_infancia.patologias"
                            value="Dolor de garganta"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Influenza(gripe)"
                            name="i.app.propias_infancia.patologias"
                            value="Influenza(gripe)"
                            disabled={deshabilitado.app}
                        />
                        <Checkbox
                            label="Conjuntivitis"
                            name="i.app.propias_infancia.patologias"
                            value="Conjuntivitis"
                            disabled={deshabilitado.app}
                        />
                        <Textfield
                            label="Otra"
                            placeholder="Escriba la patología(s) del paciente"
                            name="i.app.propias_infancia.otro"
                            disabled={deshabilitado.app}
                        />
                        <Textarea
                            label="Consideraciones"
                            name="i.app.propias_infancia.consideraciones"
                            disabled={deshabilitado.app}
                        />
                    </div>
                </div>
                <Textarea label="Quirúrgicos" name="i.app.quirurgicos" disabled={deshabilitado.app} />
                <Textarea label="Intoxicaciones" name="i.app.intoxicaciones" disabled={deshabilitado.app} />
                <Textarea label="Traumático" name="i.app.traumatico" disabled={deshabilitado.app} />
                <Textarea
                    label="Hospitalizaciones"
                    name="i.app.hospitalizaciones"
                    disabled={deshabilitado.app}
                />
                <Textarea label="Alérgico" name="i.app.alergico" disabled={deshabilitado.app} />
                <Textarea
                    label="Transfucionales"
                    name="i.app.transfucionales"
                    disabled={deshabilitado.app}
                />
                <Textarea label="Otro" name="i.app.otro" disabled={deshabilitado.app} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("app")} disabledButton={() => disabledField("app")} />
            </Accordion>
            <Accordion label="Antecedentes personales no patológicos">
                <h3 className="font-semibold">Toxicomanías</h3>
                <div>
                    <h4>Índice de tabaco</h4>
                    <div className="flex">
                        <Radio
                            label="Si"
                            name="i.apnp.toxicomania.tabaco['?']"
                            value="si"
                            disabled={deshabilitado.apnp}
                        />
                        <Radio
                            label="No"
                            name="i.apnp.toxicomania.tabaco['?']"
                            value="no"
                            disabled={deshabilitado.apnp}
                        />
                    </div>
                    {apnp.toxicomania.tabaco["?"] === "si" ? (
                        <div className="grid grid-cols-3">
                            <Textfield
                                label="Número de cigarros diarios"
                                name="i.apnp.toxicomania.tabaco.cigdiarios"
                                disabled={deshabilitado.apnp}
                            />
                            <Textfield
                                label="Número de años fumando"
                                name="i.apnp.toxicomania.tabaco.añosfumando"
                                disabled={deshabilitado.apnp}
                            />
                            <Textfield
                                label="Indice de tabaco"
                                name="i.apnp.toxicomania.tabaco.indice"
                                disabled={deshabilitado.apnp}
                            />
                        </div>
                    ) : null}
                </div>
                <div>
                    <h4>Alcoholismo</h4>
                    <div className="flex">
                        <Radio
                            label="Si"
                            name="i.apnp.toxicomania.alcoholismo['?']"
                            value="si"
                            disabled={deshabilitado.apnp}
                        />
                        <Radio
                            label="No"
                            name="i.apnp.toxicomania.alcoholismo['?']"
                            value="no"
                            disabled={deshabilitado.apnp}
                        />
                    </div>
                    {apnp.toxicomania.alcoholismo["?"] === "si" ? (
                        <Textarea
                            label="Frecuencia"
                            name="i.apnp.toxicomania.alcoholismo.frecuencia"
                            disabled={deshabilitado.apnp}
                        />
                    ) : null}
                </div>
                <Textfield label="Otro" name="i.apnp.toxicomania.otro" disabled={deshabilitado.apnp} />
                <Textarea
                    label="Higiene personal y cambio de ropa"
                    name="i.apnp.higiene"
                    disabled={deshabilitado.apnp}
                />
                <Textarea label="Ejercicio" name="i.apnp.ejercicio" disabled={deshabilitado.apnp} />
                <Textarea label="Habitación" name="i.apnp.habitacion" disabled={deshabilitado.apnp} />
                <div>
                    <h3 className="font-semibold">Alimentación</h3>
                    <Textfield
                        label="Verduras y frutas"
                        name="i.apnp.alimentacion.verdyfrut"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Cereales"
                        name="i.apnp.alimentacion.cereales"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Leguminosas"
                        name="i.apnp.alimentacion.leguminosas"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Alimentos de origen animal"
                        name="i.apnp.alimentacion.alimentosanimal"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Bebida"
                        name="i.apnp.alimentacion.bebida"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Recuento de 24 hrs."
                        name="i.apnp.alimentacion.recuento24h"
                        disabled={deshabilitado.apnp}
                    />
                </div>
                <div>
                    <h3>Inmunizaciones</h3>
                    <Textfield
                        label="Última vacuna"
                        name="i.apnp.inmunizaciones.ultivacuna"
                        disabled={deshabilitado.apnp}
                    />
                    <Textfield
                        label="Esquema de vacunación"
                        name="i.apnp.inmunizaciones.esquemavacuna"
                        disabled={deshabilitado.apnp}
                    />
                </div>
                <Textfield label="Descanso y sueño" name="i.apnp.sueño" disabled={deshabilitado.apnp} />
                <Textfield
                    label="Pasatiempos y hobbies"
                    name="i.apnp.hobbies"
                    disabled={deshabilitado.apnp}
                />
                <Textfield label="Otros" name="i.apnp.otros" disabled={deshabilitado.apnp} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("apnp")} disabledButton={() => disabledField("apnp")} />
            </Accordion>
            <Accordion label="Padecimiento actual">
                <Textarea label="Estado actual" name="i.pa.edoactual" disabled={deshabilitado.pa} />
                <Textarea label="Inicio" name="i.pa.inicio" disabled={deshabilitado.pa} />
                <Textarea label="Sitomatología" name="i.pa.sintomatologia" disabled={deshabilitado.pa} />
                <Textarea label="Evolución" name="i.pa.evolucion" disabled={deshabilitado.pa} />
                <Textarea label="Factores" name="i.pa.factores" disabled={deshabilitado.pa} />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("pa")} disabledButton={() => disabledField("pa")} />
            </Accordion>
            <Accordion label="Interrogatorio por aparatos y sistemas">
                <Textarea
                    label="Síntomas generales"
                    name="i.ipays.sintgenerales"
                    disabled={deshabilitado.ipays}
                />
                <Textarea label="Ojos" name="i.ipays.ojos" disabled={deshabilitado.ipays} />
                <Textarea label="Oídos" name="i.ipays.oidos" disabled={deshabilitado.ipays} />
                <Textarea label="Nariz" name="i.ipays.naris" disabled={deshabilitado.ipays} />
                <Textarea label="Garganta" name="i.ipays.garganta" disabled={deshabilitado.ipays} />
                <Textarea label="Gusto" name="i.ipays.gusto" disabled={deshabilitado.ipays} />
                <Textarea
                    label="Cardio respiratorio"
                    name="i.ipays.cardiores"
                    disabled={deshabilitado.ipays}
                />
                <Textarea label="Vascular" name="i.ipays.vascular" disabled={deshabilitado.ipays} />
                <Textarea label="Urinario" name="i.ipays.urinario" disabled={deshabilitado.ipays} />
                <Textarea label="Genital" name="i.ipays.genital" disabled={deshabilitado.ipays} />
                <Textarea label="Digestivo" name="i.ipays.digestivo" disabled={deshabilitado.ipays} />
                <Textarea label="Hemolinfático" name="i.ipays.hemolinfatico" disabled={deshabilitado.ipays} />
                <Textarea label="Endócrino" name="i.ipays.endocrino" disabled={deshabilitado.ipays} />
                <Textarea label="Nervioso" name="i.ipays.nervioso" disabled={deshabilitado.ipays} />
                <Textarea label="Psiquiátrico" name="i.ipays.psiquiatrico" disabled={deshabilitado.ipays} />
                <Textarea
                    label="Músculo-esquelético"
                    name="i.ipays.musculoesqueletico"
                    disabled={deshabilitado.ipays}
                />
                <Textarea
                    label="Interrogatorios especiales"
                    name="i.ipays.especiales"
                    disabled={deshabilitado.ipays}
                />
                <DisabledButtons isDisabled={isDisabled} enabledButton={() => enabledField("ipays")} disabledButton={() => disabledField("ipays")} />
            </Accordion>
        </div>
    );
};

export default Interrogatorio;
