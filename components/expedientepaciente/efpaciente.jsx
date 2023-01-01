import Accordion from 'components/accordion'
import Expfield from 'components/expfield'

const Efpaciente = ({exp}) => {
  return (
    <div>
      <h2 className="text-lg font-bold py-1 px-2">Exploración física</h2>
      <Accordion label="Exploración física">
        <div className='px-4'>
          <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
            <Expfield label="Aspecto general" value={exp.ef.aspectogeneral}/>
            <Expfield label="Cabeza" value={exp.ef.cabeza}/>
            <Expfield label="Cuello" value={exp.ef.cuello}/>
            <Expfield label="Torax" value={exp.ef.torax}/>
            <Expfield label="Abdomen" value={exp.ef.abdomen}/>
            <Expfield label="Extremidades" value={exp.ef.extremidades}/>
            <Expfield label="Genitales" value={exp.ef.genitales}/>
            <Expfield label="Exploraciones especiales" value={exp.ef.exploracionesespeciales}/>
          </div>
        </div>
      </Accordion>
      <Accordion label="Signos vitales">
        <div className='px-4'>
          <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
            <Expfield label="Temperatura" value={`${exp.ef.sv.temperatura} Cº`} />
            <Expfield label="Tension arterial" value={`${exp.ef.sv.tensionarterial} mmHg`} />
            <Expfield label="Frecuencia respiratoria" value={`${exp.ef.sv.frecresp} r/m`} />
            <Expfield label="Frecuencia cardiaca" value={`${exp.ef.sv.freccardi} ppm`} />
            <Expfield label="Saturación de oxigeno" value={`${exp.ef.sv.satuoxigeno} %`} />
            <Expfield label="Otros" value={exp.ef.sv.otro} />
          </div>
        </div>
      </Accordion>
      <Accordion label="Somatometría">
        <div className='px-4'>
          <div className='grid grid-cols-1 divide-y-2 divide-slate-300 px-4'>
            <Expfield label="Peso" value={`${exp.ef.somatometría.peso} kg`} />
            <Expfield label="Talla" value={`${exp.ef.somatometría.talla} cm`} />
            <Expfield label="IMC" value={`${exp.ef.somatometría.imc} imc`} />
          </div>
        </div>
      </Accordion>
    </div>
  )
}

export default Efpaciente
