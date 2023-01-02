import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import useSWR from "swr";
import Userlayout from 'components/layouts/userlayout'
import { useEffect, useState } from "react";

const Row = ({p, ...rest}) => {
  return (
    <tr className="bg-white text-lg" {...rest}>
      <td className="px-6 py-4 text-left whitespace-nowrap">{p.curp}</td>
      <td className="px-6 py-4 text-left whitespace-nowrap">{p.nombre}</td>
      <td className="px-6 py-4 text-left whitespace-nowrap">{p.edad}</td>
      <td className="px-6 py-4 text-left whitespace-nowrap">
        {p.sexo === 'M' ? "Masculino" : "Femenino"}
      </td>
      <td className="px-6 py-4 text-left whitespace-nowrap">
        <Link href={`/medico/${p.curp}`}>
          <a className="text-indigo-500 hover:text-indigo-600 hover:underline">
            Consultar
          </a>
        </Link>
      </td>
    </tr>
  )
}

const IndexM = () => {
  const router = useRouter();
  const [data, setData] = useState(null)
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    const fetchingPacient = async() => {
      setCargando(true)
      await fetch("http://localhost:3000/api/medico")
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setData(data)
          setCargando(false)
        })
    }
    fetchingPacient()
  }, [])

  if (!data) return <div>Error al cargar la informacion</div>;
  if (cargando) return <div>Cargando...</div>;

  return (
    <Userlayout type='medico'>
      <div>
        <h1 className="text-center text-3xl my-4">
          ¡Bienvenido, Dr. {data.nombre}!
        </h1>
        <div className="flex justify-center items-center">
          <table className="w-5/6">
            <thead className="border-b bg-indigo-700">
              <tr>
                <th
                  scope="col"
                  className=" px-6 py-4 text-left text-lg text-white"
                >
                  CURP
                </th>
                <th
                  scope="col"
                  className=" px-6 py-4 text-left text-lg text-white"
                >
                  Nombre Completo
                </th>
                <th
                  scope="col"
                  className=" px-6 py-4 text-left text-lg text-white"
                >
                  Edad
                </th>
                <th
                  scope="col"
                  className=" px-6 py-4 text-left text-lg text-white"
                >
                  Género
                </th>
                <th
                  scope="col"
                  className=" px-6 py-4 text-left text-lg text-white"
                >
                  Expediente
                </th>
              </tr>
            </thead>
            <tbody>

              {
                data.listaPacientes.map((p, i) => (
                  <Row p={p} key={i}/>
                  // <tr className="bg-white text-lg" key={p}>
                  //   <td className="px-6 py-4 text-left whitespace-nowrap">{p.curp}</td>
                  //   <td className="px-6 py-4 text-left whitespace-nowrap">{p.nombre}</td>
                  //   <td className="px-6 py-4 text-left whitespace-nowrap">{p.edad}</td>
                  //   <td className="px-6 py-4 text-left whitespace-nowrap">
                  //     {p.sexo === 'M' ? "Masculino" : "Femenino"}
                  //   </td>
                  //   <td className="px-6 py-4 text-left whitespace-nowrap">
                  //     <Link href={`/medico/expediente`}>
                  //       <a className="text-indigo-500 hover:text-indigo-600 hover:underline">
                  //         Consultar
                  //       </a>
                  //     </Link>
                  //   </td>
                  // </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        {
          data.listaPacientes.length <= 0 
          ? (
            <p className="italic text-center text-xl p-4">Aun no cuentas con pacientes. Registra a un nuevo paciente.</p>
          )
          : null
        }
        
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-2 gap-52">
            <Link href={`/medico/crear`}>
              <a>
                <AiFillPlusCircle className="h-20 w-20 text-indigo-500 hover:text-indigo-600" />
              </a>
            </Link>
            <Link href={`/medico/codigo`}>
              <a>
                <BiSearchAlt className="h-20 w-20 text-indigo-500 hover:text-indigo-600" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Userlayout>
  );
};

export default IndexM;
