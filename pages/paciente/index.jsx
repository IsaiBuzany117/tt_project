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
    fetch('http://localhost:3000/api/paciente')
    .then(res => res.json())
    .then(data => {
      setData(data)
      setCargando(false)
    })

    fetch('http://localhost:4000/read', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({curp: data.curp}),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setExp(data)
    })
    .catch(error => {
      console.log(error)
    })
    
  }, [data.curp])
  
  // const { data, error } = useSWR(
  //   `http://localhost:3000/api/paciente`,
  //   fetcherP
  // );
  
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
                <div className='py-4 px-12'>
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
                  <p className="text-center my-8 text-2xl text-indigo-600 font-bold">{data.code_access}</p>
                </div>
              </div>
              {/* <h2 className="text-center text-xl p-2">Datos Generales</h2>
              <div className="p-8">
                <p className="my-2">
                  <strong>Nombre completo: </strong> {data.nombre}{" "}
                  {data.apaterno} {data.amaterno}{" "}
                </p>
                <p className="my-2">
                  <strong>Fecha de nacimiento: </strong> {data.fecnac}{" "}
                </p>
                <p className="my-2">
                  <strong>Correo: </strong> {data.email}{" "}
                </p>
                <p className="my-2">
                  <strong>Telefono: </strong> {data.tel}{" "}
                </p>
              </div> */}
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
                  <>
                    <p className="text-center m-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam, sunt iure voluptatum harum quisquam deleniti nam incidunt dicta perferendis blanditiis. Maxime vitae numquam consequuntur velit labore, incidunt cupiditate earum?</p>
                    <div className="flex justify-center items-center">
                      <Link href={`/paciente/expediente`}>
                        <a className="bg-indigo-600 border rounded-md p-2 text-slate-100 hover:bg-indigo-500">
                          Ver expediente completo
                        </a>
                      </Link>
                    </div>
                  </>
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
                        <strong>Temperatura: </strong> ... Cº
                      </p>
                      <p className="my-2">
                        <strong>Frecuencia respiratoria: </strong> ... r/m
                      </p>
                      <p className="my-2">
                        <strong>Frecuencia cardiaca: </strong> ... ppm
                      </p>
                      <p className="my-2">
                        <strong>Presion arterial: </strong> ...mmHg
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="my-2">
                        <strong>Estatura: </strong> ... m
                      </p>
                      <p className="my-2">
                        <strong>Peso: </strong> ...kg
                      </p>
                      <p className="my-2">
                        <strong>IMC: </strong> ...imc
                      </p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
            <div className="h-full w-full border border-slate-300 rounded-md shadow-md">
              <h2 className="text-center text-xl p-2">Datos para el IMC</h2>
              <div className="p-8">
                <p className="my-2">
                  <strong>Estatura: </strong> ... cm{" "}
                </p>
                <p className="my-2">
                  <strong>Peso: </strong> ... kg
                </p>
                <p className="my-2">
                  <strong>Masa corporal: </strong> ... kg/m<sup>2</sup>
                </p>
              </div>
            </div>
          </div> */}
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
