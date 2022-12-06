import { useEffect } from "react";
import { FieldArray, Field, ErrorMessage, useFormikContext } from "formik";
import Accordion from "components/accordion";
import Textfield from "components/inputs/textfield";
import Textarea from "components/inputs/textarea";
import Select from "components/inputs/select";
import Radio from "components/inputs/radiobutton";
import Checkbox from "components/inputs/checkbox";

const Interrogatorio = ({ values, errors }) => {
    const { ahf, apnp } = values.i;
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Interrogatorio</h2>
            <Accordion label="Ficha de indentificacion">

                <Textfield
                    name="curp"
                    label="CURP"
                    required
                    error={errors.curp}
                />
                <Textfield
                    name="i.fi.nombre"
                    label="Nombre"
                    required
                    error={errors.nombre}
                />
                <Textfield
                    name="i.fi.apaterno"
                    label="Apellido Paterno"
                    required
                    error={errors.apaterno}
                />
                <Textfield
                    name="i.fi.amaterno"
                    label="Apellido Materno"
                    required
                    error={errors.amaterno}
                />
                <Textfield
                    name="i.fi.edad"
                    label="Edad"
                    required
                    error={errors.edad}
                />
                <Textfield
                    name="i.fi.fecnac"
                    label="Fecha de nacimiento"
                    required
                    error={errors.fecnac}
                />
                <Select
                    name="i.fi.sexo"
                    label="Sexo"
                    placeholder="Selecciona tu sexo"
                    required
                    error={errors.sexo}
                >
                    <option value=""></option>
                    <option value="M">Femenino</option>
                    <option value="H">Masculino</option>
                </Select>
                <Textfield
                    name="i.fi.edo"
                    label="Entidad federativa de residencia"
                    required
                    error={errors.edo}
                />
                <Textfield
                    name="i.fi.mun"
                    label="Municipio de residencia"
                    required
                    error={errors.mun}
                />
                <Textfield
                    name="i.fi.loc"
                    label="Localidad de residencia"
                    required
                    error={errors.loc}
                />
                <Textfield
                    name="i.fi.tel"
                    label="Teléfono"
                    required
                    error={errors.tel}
                />
                <Textfield
                    name="i.fi.edonac"
                    label="Lugar de nacimiento"
                    required
                    error={errors.edonac}
                />
                <Textfield
                    name="i.fi.edocivil"
                    label="Estado Civil"
                    required
                    error={errors.edocivil}
                />
                <Textfield
                    name="i.fi.escolaridad"
                    label="Escolaridad"
                    required
                    error={errors.escolaridad}
                />
                <Textfield
                    name="i.fi.ocupacion"
                    label="Ocupación"
                    required
                    error={errors.ocupacion}
                />
                <Textfield
                    name="i.fi.religion"
                    label="Religión"
                    required
                    error={errors.relig}
                />
                <Textfield
                    name="i.fi.claseSE"
                    label="Clase socio-económica"
                    required
                    error={errors.claseSE}
                />
                <Textfield
                    name="i.fi.famA"
                    label="Familiar a quien avisar"
                    required
                    error={errors.famA}
                />
                <Select
                    name="i.fi.sangre"
                    label="Grupo sanguíneo"
                    required
                    error={errors.sangre}
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
                                            />
                                            <Select
                                                label="Parentesco"
                                                name={`i.ahf.${i}.parentesco`}
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
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="my-1 py-1 px-2 shadow-md bg-indigo-600 text-slate-100 border rounded-md hover:bg-indigo-800"
                                                onClick={() => remove(i)}
                                            >
                                                Quitar familiar
                                            </button>
                                        </div>
                                    </div>
                                ))}
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
                        </>
                    )}
                </FieldArray>
            </Accordion>
            <Accordion label="Antecedentes personales patológicos">
                <div className="px-4 pb-2">
                    <h3 className="font-semibold">Enfermedades congenitas</h3>
                    <div>
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="1"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="2"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="3"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="4"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="5"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.congenitas.patologias"
                            value="6"
                        />
                        <Textfield
                            label="Otra"
                            placeholder="Escriba la patología(s) del paciente"
                            name="i.app.congenitas.otro"
                        />
                        <Textarea
                            label="Consideraciones"
                            name="i.app.congenitas.consideraciones"
                        />
                    </div>
                </div>
                <div className="px-4 pb-2">
                    <h3 className="font-semibold">
                        Enfermedades propias de la infancia
                    </h3>
                    <div>
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="1"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="2"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="3"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="4"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="5"
                        />
                        <Checkbox
                            label="Ejemplo"
                            name="i.app.propias_infancia.patologias"
                            value="6"
                        />
                        <Textfield
                            label="Otra"
                            placeholder="Escriba la patología(s) del paciente"
                            name="i.app.propias_infancia.otro"
                        />
                        <Textarea
                            label="Consideraciones"
                            name="i.app.propias_infancia.consideraciones"
                        />
                    </div>
                </div>
                <Textarea label="Quirurgicos" name="i.app.quirurgicos" />
                <Textarea label="Intoxicaciones" name="i.app.intoxicaciones" />
                <Textarea label="Traumatico" name="i.app.traumatico" />
                <Textarea
                    label="Hospitalizaciones"
                    name="i.app.hospitalizaciones"
                />
                <Textarea label="Alérgico" name="i.app.alergico" />
                <Textarea
                    label="Transfucionales"
                    name="i.app.transfucionales"
                />
                <Textarea label="Otro" name="i.app.otro" />
            </Accordion>
            <Accordion label="Antecedentes personales no patológicos">
                <h3 className="font-semibold">Toxicomanias</h3>
                <div>
                    <h4>Indice de tabaco</h4>
                    <div className="flex">
                        <Radio
                            label="Si"
                            name="i.apnp.toxicomania.tabaco['?']"
                            value="si"
                        />
                        <Radio
                            label="No"
                            name="i.apnp.toxicomania.tabaco['?']"
                            value="no"
                        />
                    </div>
                    {apnp.toxicomania.tabaco["?"] === "si" ? (
                        <div className="grid grid-cols-3">
                            <Textfield
                                label="Numero de cigarros diarios"
                                name="i.apnp.toxicomania.tabaco.cigdiarios"
                            />
                            <Textfield
                                label="Numero de años fumando"
                                name="i.apnp.toxicomania.tabaco.añosfumando"
                            />
                            <Textfield
                                label="Indice de tabaco"
                                name="i.apnp.toxicomania.tabaco.inidice"
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
                        />
                        <Radio
                            label="No"
                            name="i.apnp.toxicomania.alcoholismo['?']"
                            value="no"
                        />
                    </div>
                    {apnp.toxicomania.alcoholismo["?"] === "si" ? (
                        <Textarea
                            label="Frecuencia"
                            name="i.apnp.toxicomania.alcoholismo.frecuencia"
                        />
                    ) : null}
                </div>
                <Textfield label="Otro" name="i.apnp.toxicomania.otro" />
                <Textarea
                    label="Higiene personal y cambio de ropa"
                    name="i.apnp.higiene"
                />
                <Textarea label="Ejercicio" name="i.apnp.ejercicio" />
                <Textarea label="Habitacion" name="i.apnp.habitacion" />
                <div>
                    <h3 className="font-semibold">Alimentacion</h3>
                    <Textfield
                        label="Verduras y frutas"
                        name="i.apnp.alimentacion.verdyfrut"
                    />
                    <Textfield
                        label="Cereales"
                        name="i.apnp.alimentacion.cereales"
                    />
                    <Textfield
                        label="Leguminosas"
                        name="i.apnp.alimentacion.leguminosas"
                    />
                    <Textfield
                        label="Alimentos de origen animal"
                        name="i.apnp.alimentacion.alimentosanimal"
                    />
                    <Textfield
                        label="Bebida"
                        name="i.apnp.alimentacion.bebida"
                    />
                    <Textfield
                        label="Recuento de 24 hrs."
                        name="i.apnp.alimentacion.recuento24h"
                    />
                </div>
                <div>
                    <h3>Inmunizaciones</h3>
                    <Textfield
                        label="Ultima vacuna"
                        name="i.apnp.inmunizaciones.ultivacuna"
                    />
                    <Textfield
                        label="Esquema de vacunacion"
                        name="i.apnp.inmunizaciones.esquemavacuna"
                    />
                </div>
                <Textfield label="Descanso y sueño" name="i.apnp.sueño" />
                <Textfield
                    label="Pasatiempos y hobbies"
                    name="i.apnp.hobbies"
                />
                <Textfield label="Otros" name="i.apnp.otros" />
            </Accordion>
            <Accordion label="Padecimiento actual">
                <Textarea label="Estado actual" name="i.pa.edoactual" />
                <Textarea label="Inicio" name="i.pa.inicio" />
                <Textarea label="Sitomatología" name="i.pa.sintomatologia" />
                <Textarea label="Evolucion" name="i.pa.evolucion" />
                <Textarea label="Factores" name="i.pa.factores" />
            </Accordion>
            <Accordion label="Interrogatorio por aparatos y sistemas">
                <Textarea
                    label="Sintomas generales"
                    name="i.ipays.sintgenerales"
                />
                <Textarea label="Ojos" name="i.ipays.ojos" />
                <Textarea label="Oidos" name="i.ipays.oidos" />
                <Textarea label="Naris" name="i.ipays.naris" />
                <Textarea label="Garganta" name="i.ipays.garganta" />
                <Textarea label="Gusto" name="i.ipays.gusto" />
                <Textarea
                    label="Cardio respiratorio"
                    name="i.ipays.cardiores"
                />
                <Textarea label="Vascular" name="i.ipays.vascular" />
                <Textarea label="Urinario" name="i.ipays.urinario" />
                <Textarea label="Genital" name="i.ipays.genital" />
                <Textarea label="Digestivo" name="i.ipays.digestivo" />
                <Textarea label="Hemolinfatico" name="i.ipays.hemolinfatico" />
                <Textarea label="Endocrino" name="i.ipays.endocrino" />
                <Textarea label="Nervioso" name="i.ipays.nervioso" />
                <Textarea label="Psiquiatrico" name="i.ipays.psiquiatrico" />
                <Textarea
                    label="Musculo-esqueletico"
                    name="i.ipays.musculoesqueletico"
                />
                <Textarea
                    label="Interrogatorios especiales"
                    name="i.ipays.especiales"
                />
            </Accordion>
        </div>
    );
};

export default Interrogatorio;
