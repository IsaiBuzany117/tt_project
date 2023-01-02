import Accordion from 'components/accordion'
import Expfield from 'components/expfield'

const Nipaciente = ({exp}) => {
    console.log(exp)
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de interconsulta</h2>
            <div className='h-96 mt-4 max-h-screen flex flex-col overflow-y-auto'>
                {
                    exp.ni.nota.map((n, i) => (
                        <div key={i} className="mb-4">
                            <div className='flex justify-start'>
                                <p className="font-black">{n.fecha}</p>
                            </div>
                            <div className='grid grid-cols-3 grid-rows-2 gap-y-2 text-center text-sm '>
                                <p className='text-indigo-700 font-bold'>Criterios de diagnóstico</p>
                                <p className='text-indigo-700 font-bold'>Plan de estudios</p>
                                <p className='text-indigo-700 font-bold'>Sugerencias, diagnósticos y tratamiento</p>

                                <p>{n.cyd}</p>
                                <p>{n.pde}</p>
                                <p>{n.sdyt}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <Accordion label="Nota de interconsulta">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                        <Expfield label="Criterios de diagnóstico" value={`${exp.ni.cyd}`} />
                        <Expfield label="Plan de estudios" value={`${exp.ni.pde}`} />
                        <Expfield label="Sugerencias, diagnósticos y tratamiento" value={`${exp.ni.sdyt}`} />
                    </div>
                </div>
            </Accordion> */}
        </div>
    )
}

export default Nipaciente