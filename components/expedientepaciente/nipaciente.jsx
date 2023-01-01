import Accordion from 'components/accordion'
import Expfield from 'components/expfield'

const Nipaciente = ({exp}) => {
    return (
        <div>
            <h2 className="text-lg font-bold py-1 px-2">Nota de interconsulta</h2>
            <Accordion label="Nota de interconsulta">
                <div className='px-4'>
                    <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
                        <Expfield label="Criterios de diagnóstico" value={`${exp.ni.cyd}`} />
                        <Expfield label="Plan de estudios" value={`${exp.ni.pde}`} />
                        <Expfield label="Sugerencias, diagnósticos y tratamiento" value={`${exp.ni.sdyt}`} />
                    </div>
                </div>
            </Accordion>
        </div>
    )
}

export default Nipaciente