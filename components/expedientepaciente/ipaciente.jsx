import Accordion from 'components/accordion'
import Expfield from 'components/expfield'
import { estados } from 'utils/estados'

const Ipaciente = ({ exp }) => {
    const estado = (codigo) => {
        let edoname
        for (const edo of estados) {
            if (edo.codigo === codigo) {
                edoname = edo.nombre
                break
            }
        }
        return edoname
    }
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Interrogatorio</h2>
            <Accordion label="Ficha de identificación">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <Expfield label="CURP" value={exp.curp} />
                        <Expfield label="Nombre" value={`${exp.i.fi.nombre} ${exp.i.fi.apaterno} ${exp.i.fi.amaterno}`} />
                        <Expfield label="Edad" value={exp.i.fi.edad} />
                        <Expfield label="Fecha de nacimiento" value={exp.i.fi.fecnac} />
                        <Expfield label="Sexo" value={exp.i.fi.sexo === 'M' ? "Masculino" : "Femenino"} />
                        <Expfield label="Entidad federativa de residencia" value={estado(exp.i.fi.edo)} />
                        <Expfield label="Municipio de residencia" value={exp.i.fi.mun} />
                        <Expfield label="Localidad de residencia" value={exp.i.fi.loc} />
                        <Expfield label="Telefono" value={exp.i.fi.tel} />
                        <Expfield label="Estado de nacimiento" value={estado(exp.i.fi.edonac)} />
                        <Expfield label="Estado civil" value={exp.i.fi.edocivil} />
                        <Expfield label="Escolaridad" value={exp.i.fi.escolaridad} />
                        <Expfield label="Ocupación" value={exp.i.fi.ocupacion} />
                        <Expfield label="Religión" value={exp.i.fi.religion} />
                        <Expfield label="Clase socio-económica" value={exp.i.fi.claseSE} />
                        <Expfield label="Familiar a quien Avisar" value={exp.i.fi.famA} />
                        <Expfield label="Tipo de sangre" value={exp.i.fi.sangre} />
                    </div>
                </div>
            </Accordion>
            <Accordion label="Antecedentes heredo-familiares">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        {
                            exp.i.ahf.map((f, i)=> (
                                <div className='grid grid-cols-3 p-[0.25rem]' key={i}>
                                    <p className='font-semibold text-indigo-700'>{f.parentesco}</p>
                                    <p>{f.familiar}</p>
                                    <p>{f.antecedentes}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Accordion>
            <Accordion label="Antecedentes personales patológicos">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <div>
                            <h3 className='py-2 text-indigo-900 font-bold'>Enfermedades congenitas</h3>
                            <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                                <Expfield label="Patologias" value={
                                    `
                                    ${exp.i.app.congenitas.patologias.join(", ")}${(exp.i.app.congenitas.otro === "ninguno") || (exp.i.app.congenitas.otro === "") ? "" : ` ${exp.i.app.congenitas.otro}`}
                                    `
                                }/>
                                <Expfield label="Consideraciones" value={exp.i.app.congenitas.consideraciones}/>
                            </div>
                        </div>
                        <div>
                            <h3 className='py-2 text-indigo-900 font-bold'>Enfermedades congenitas</h3>
                            <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                                <Expfield label="Enfermedades propias de la infancia" value={
                                    `
                                    ${exp.i.app.propias_infancia.patologias.join(", ")}${(exp.i.app.propias_infancia.otro === "ninguno") || (exp.i.app.propias_infancia.otro === "") ? "" : ` ${exp.i.app.propias_infancia.otro}`}
                                    `
                                }/>
                                <Expfield label="Consideraciones" value={exp.i.app.propias_infancia.consideraciones}/>
                            </div>
                        </div>
                        <Expfield label="Quirurgicos" value={exp.i.app.quirurgicos}/>
                        <Expfield label="intoxicaciones" value={exp.i.app.intoxicaciones}/>
                        <Expfield label="Traumatico" value={exp.i.app.traumatico}/>
                        <Expfield label="Hospitalizaciones" value={`${exp.i.app.hospitalizaciones}`}/>
                        <Expfield label="Alergias" value={exp.i.app.alergico}/>
                        <Expfield label="Transfuciones" value={exp.i.app.transfucionales}/>
                        <Expfield label="Otro" value={exp.i.app.otro}/>

                    </div>
                </div>
            </Accordion>
            <Accordion label="Antecedentes personales no patológicas">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <div>
                            <h3 className='py-2 text-indigo-900 font-bold'>Toxicomanias</h3>
                            <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                                <Expfield label="Tabaco" value={exp.i.apnp.toxicomania.tabaco["?"]} />
                                <Expfield label="Cigarros diarios" value={exp.i.apnp.toxicomania.tabaco.cigdiarios} />
                                <Expfield label="Años fumando" value={exp.i.apnp.toxicomania.tabaco.añosfumando} />
                                <Expfield label="Indice" value={exp.i.apnp.toxicomania.tabaco.indice} />
                                <Expfield label="Alcoholismo" value={exp.i.apnp.toxicomania.alcoholismo["?"]} />
                                <Expfield label="Frecuancia" value={exp.i.apnp.toxicomania.alcoholismo.frecuencia} />
                                <Expfield label="Otro" value={exp.i.apnp.toxicomania.otro} />
                            </div>
                        </div>
                        <Expfield label="Higiene" value={exp.i.apnp.higiene} />
                        <Expfield label="Ejercicio" value={exp.i.apnp.ejercicio} />
                        <Expfield label="Habitación" value={exp.i.apnp.habitacion} />
                        <Expfield label="Alimentación" value={`${exp.i.apnp.alimentacion.verdyfrut}, ${exp.i.apnp.alimentacion.cereales}, ${exp.i.apnp.alimentacion.leguminosas}, ${exp.i.apnp.alimentacion.alimentosanimal}, ${exp.i.apnp.alimentacion.bebida}`} />
                        <div>
                            <h3 className='py-2 text-indigo-900 font-bold'>Imunizaciones</h3>
                            <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                                <Expfield label="Ultima vacuna" value={exp.i.apnp.inmunizaciones.ultivacuna} />
                            </div>
                        </div>
                        <Expfield label="Sueño" value={exp.i.apnp.sueño} />
                        <Expfield label="Hobbies" value={exp.i.apnp.hobbies} />
                        <Expfield label="Otros" value={exp.i.apnp.otros} />
                    </div>
                </div>
            </Accordion>
            <Accordion label="Padecimiento actual">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <Expfield label="Estado actual" value={exp.i.pa.edoactual}/>
                        <Expfield label="Inicio" value={exp.i.pa.inicio}/>
                        <Expfield label="Sintomatología" value={exp.i.pa.sintomatologia}/>
                        <Expfield label="Evolución" value={exp.i.pa.evolucion}/>
                        <Expfield label="Factores" value={exp.i.pa.factores}/>
                    </div>
                </div>
            </Accordion>
            <Accordion label="Interrogatorio por aparatos y sistemas">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <Expfield label="Estado actual" value={exp.i.ipays.sintgenerales} />
                        <Expfield label="Ojos" value={exp.i.ipays.ojos} />
                        <Expfield label="Oidos" value={exp.i.ipays.oidos} />
                        <Expfield label="Nariz" value={exp.i.ipays.naris} />
                        <Expfield label="Garganta" value={exp.i.ipays.gusto} />
                        <Expfield label="Cardio-respiratorio" value={exp.i.ipays.cardiores} />
                        <Expfield label="Vascular" value={exp.i.ipays.vascular} />
                        <Expfield label="Urinario" value={exp.i.ipays.urinario} />
                        <Expfield label="Genital" value={exp.i.ipays.genital} />
                        <Expfield label="Digestivo" value={exp.i.ipays.digestivo} />
                        <Expfield label="Hemolinfatico" value={exp.i.ipays.hemolinfatico} />
                        <Expfield label="Endocrino" value={exp.i.ipays.endocrino} />
                        <Expfield label="Nervioso" value={exp.i.ipays.nervioso} />
                        <Expfield label="Psiquiatrico" value={exp.i.ipays.psiquiatrico} />
                        <Expfield label="Musculo-esqueletico" value={exp.i.ipays.musculoesqueletico} />
                        <Expfield label="Especiales" value={exp.i.ipays.especiales} />
                    </div>
                </div>
            </Accordion>
        </div>
    )
}

export default Ipaciente
