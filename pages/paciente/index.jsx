import {useState, useEffect} from 'react'
import {GrUserFemale, GrUser} from 'react-icons/gr'
import {BsCalendarDate} from 'react-icons/bs'
import {HiOutlineIdentification, HiOutlineEnvelope, HiOutlinePhone} from 'react-icons/hi2'
import Userlayout from 'components/layouts/userlayout'
import Link from "next/link";
import { useRouter } from "next/router";

const IndexP = () => {
  const router = useRouter();
  const fetcherP = (...args) => fetch(...args).then((res) => res.json());

  const [data, setData] = useState({})
  const [exp, setExp] = useState(null)
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    const fetchingUser = async () => {
      await fetch('http://localhost:3000/api/paciente')
      .then(res => res.json())
      .then(data => {
        setData(data)
        localStorage.setItem("data", data.curp)
        setCargando(false)
      })
    }
    fetchingUser()

    const fetchingExp=async() => {
      await fetch('http://localhost:4000/read', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({curp: data.curp}),
      })
      .then(res => res.json())
      .then(data => {
        setExp(data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    fetchingExp()
  }, [data.curp])
  
  if (!data) return <div>Error al cargar la informacion</div>;
  if (cargando) return <div>Cargando...</div>;

  return (
    <Userlayout type="paciente">
      <div>
        <h1 className="text-center text-3xl m-4">
          ¡Bienvenido, {data.nombre}!
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-auto px-16">
          <div className="flex justify-center items-center">
            <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
              <div className='grid grid-cols-2'>
                <div className='py-8 px-12'>
                  <div className='flex'>
                    {data.sexo === 'M' 
                      ? (<GrUser className='flex' size={75}/>)
                      : (<GrUserFemale className='flex' size={75}/>)}
                    <p className='pl-2 pt-1 font-bold text-[1.4rem]'>{`${data.nombre} ${data.apaterno} ${data.amaterno}`}</p>
                  </div>
                  <p>
                    <HiOutlineIdentification className='inline-block mb-1'/> {data.curp}
                  </p>
                  <p >
                    <BsCalendarDate className='inline-block mb-1'/> {data.fecnac}
                  </p>
                  <p>
                    <HiOutlineEnvelope className='inline-block mb-1'/> {data.email}
                  </p>
                  <p>
                    <HiOutlinePhone className='inline-block mb-1'/> {data.tel}
                  </p>
                </div>
                <div className='py-4 px-6'>
                  <h2 className="text-center text-[1.35rem] p-2">Codigo de acceso</h2>
                  <p className="text-center my-8 text-2xl text-indigo-600 font-bold">
                    {data.code_access === "" ? "************" : data.code_access}
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div className="flex justify-center items-center row-span-2">
            <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
              <h2 className="text-center text-xl p-2">Antecedentes Medicos</h2>
              {
                !exp
                ? (
                  <p className='text-center py-2 px-6 italic text-sm'>
                    Aun no cuentas con un expediente medico.
                    Acude con un medico para crear tu expediente.
                  </p>
                )
                : (
                  <div className='text-sm'>
                    <div className='px-4'>
                        <h3 className='py-2 text-indigo-700 font-bold'>Patológicos</h3>
                      <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Congenitas</p>
                          <p>{`${exp.i.app.congenitas.patologias.join(", ")} ${exp.i.app.congenitas.otro}`}</p>
                        </div>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>De la infacnia</p>
                          <p className='w-full'>{`${exp.i.app.propias_infancia.patologias.join(", ")} ${exp.i.app.propias_infancia.otro}`}</p>
                        </div>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Alergias</p>
                          <p className='w-full'>{`${exp.i.app.alergico}`}</p>
                        </div>
                      </div>
                    </div>
                    <div className='px-4'>
                      <h3 className='py-2 text-indigo-700 font-bold'> No Patólogicos</h3>
                      <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Alimentacion</p>
                          <p>{exp.i.apnp.alimentacion.verdyfrut}, {exp.i.apnp.alimentacion.cereales}, {exp.i.apnp.alimentacion.leguminosas}, {exp.i.apnp.alimentacion.alimentosanimal}, {exp.i.apnp.alimentacion.bebidas}</p>
                        </div>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Tabaco</p>
                          <p className='w-full'>{`${exp.i.apnp.toxicomania.tabaco["?"]}`}</p>
                        </div>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Alcohol</p>
                          <p className='w-full'>{`${exp.i.apnp.toxicomania.alcoholismo["?"]}`}</p>
                        </div>
                      </div>
                    </div>
                    <div className='px-4'>
                      <h3 className='py-2 text-indigo-700 font-bold'>Inmunizaciones</h3>
                      <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        <div className='grid grid-cols-2 p-[0.25rem]'>
                          <p className='font-semibold '>Ultima vacuna</p>
                          <p className='w-full'>{exp.i.apnp.inmunizaciones.ultivacuna}</p>
                        </div>
                      </div>
                    </div>
                    <div className='px-4'>
                      <h3 className='py-2 text-indigo-700 font-bold'>Heredofamiliares</h3>
                      <div className='grid grid-cols-1 divide-y-2 divide-slate-300'>
                        {
                          exp.i.ahf.map((f, i) => (
                            <div className='grid grid-cols-3 gap-4 p-[0.25rem]' key={i}>
                              <p className='font-semibold'>{f.parentesco}</p>
                              <p >{f.familiar}</p>
                              <p >{f.antecedentes}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className="flex justify-center items-end py-3 h-full">
                      <Link href={`/paciente/expediente`}>
                        <a className="bg-indigo-600 border rounded-md p-2 text-slate-100 hover:bg-indigo-500">
                          Ver expediente completo
                        </a>
                      </Link>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
              <h2 className="text-center text-xl p-2">
                Signos vitales
              </h2>
              {
                !exp
                ? (
                  <p className='text-center py-2 px-6 italic text-sm'>
                    Aun no cuentas con un expediente medico.
                    Acude con un medico para crear tu expediente.
                  </p>
                )
                : (
                  <div className='grid grid-cols-2'>
                    <div className="p-4">
                      <p className="my-2">
                        <strong>Temperatura: </strong> {exp.ef.sv.temperatura} Cº
                      </p>
                      <p className="my-2">
                        <strong>Frecuencia respiratoria: </strong> {exp.ef.sv.frecresp} r/m
                      </p>
                      <p className="my-2">
                        <strong>Frecuencia cardiaca: </strong> {exp.ef.sv.freccardi} ppm
                      </p>
                      <p className="my-2">
                        <strong>Presion arterial: </strong> {exp.ef.sv.tensionarterial} mmHg
                      </p>
                      <p className="my-2">
                        <strong>Saturacion de oxigeno: </strong> {exp.ef.sv.satuoxigeno} %
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="my-2">
                        <strong>Tipo de sangre: </strong> {exp.i.fi.sangre}
                      </p>
                      <p className="my-2">
                        <strong>Estatura: </strong> {exp.ef.somatometría.talla} cm
                      </p>
                      <p className="my-2">
                        <strong>Peso: </strong> {exp.ef.somatometría.peso} kg
                      </p>
                      <p className="my-2">
                        <strong>IMC: </strong> {exp.ef.somatometría.imc} imc
                      </p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex justify-center p-8">
          <Link href="/buscar">
            <a className="bg-indigo-600 border rounded-md p-2 text-slate-100 hover:bg-indigo-500">
              Buscar medico
            </a>
          </Link>
        </div>
      </div>
    </Userlayout>
  );
};

export default IndexP;
