import Accordion from 'components/accordion'
import Expfield from 'components/expfield'

const Nepaciente = ({ exp }) => {
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de evolución</h2>
            <div className='h-96 max-h-screen flex flex-col overflow-y-auto'>
                {
                    exp.ne.nota.map((n, i) => (
                        <div key={i} className="mb-4">
                            <div className='flex justify-end'>
                                <p>{n.fecha}</p>
                            </div>
                            <div className='grid grid-cols-5 grid-rows-2 gap-y-2 text-center text-sm '>
                                <p className='text-indigo-700 font-bold'>Signos vitales</p>
                                <p className='text-indigo-700 font-bold'>Evaluación y actualización del cuadro clínico</p>
                                <p className='text-indigo-700 font-bold'>Sintomatología</p>
                                <p className='text-indigo-700 font-bold'>Diagnóstico y pronóstico</p>
                                <p className='text-indigo-700 font-bold'>Resultados relevantes de estudios solicitados</p>
                                
                                <div className='grid grid-cols-2'>
                                    <p>{n.sv.temperatura} Cº</p>
                                    <p>{n.sv.tensionarterial} mmHg</p>
                                    <p>{n.sv.frecresp} r/m</p>
                                    <p>{n.sv.freccardi} ppm</p>
                                    <p>{n.sv.satuoxigeno} %</p>
                                    <p>{n.sv.otro}</p>
                                </div>
                                <p>{n.eyadcc}</p>
                                <p>{n.sintomatologia}</p>
                                <p>{n.dyp}</p>
                                <p>{n.rrdes}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* <Accordion label="Signos vitales">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                        <Expfield label="Temperatura" value={`${exp.ne.sv.temperatura} Cº`} />
                        <Expfield label="Tension arterial" value={`${exp.ne.sv.tensionarterial} mmHg`} />
                        <Expfield label="Frecuencia respiratoria" value={`${exp.ne.sv.frecresp} r/m`} />
                        <Expfield label="Frecuencia cardiaca" value={`${exp.ne.sv.freccardi} ppm`} />
                        <Expfield label="Saturación de oxigeno" value={`${exp.ne.sv.satuoxigeno} %`} />
                        <Expfield label="Otros" value={exp.ne.sv.otro} />
                    </div>
                </div>
            </Accordion>
            <Accordion label="Nota de evolución">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                        <Expfield label="Evaluación y actualización del cuadro clínico" value={`${exp.ne.eyadcc}`} />
                        <Expfield label="Sintomatología" value={`${exp.ne.sintomatologia}`} />
                        <Expfield label="Diagnóstico y pronóstico" value={`${exp.ne.dyp}`} />
                        <Expfield label="Resultados relevantes de estudios solicitados" value={`${exp.ne.rrdes}`} />
                    </div>
                </div>
            </Accordion> */}
        </div>
    )
}

export default Nepaciente