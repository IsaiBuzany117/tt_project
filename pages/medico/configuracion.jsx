import { useRouter } from "next/router";
import useSWR from "swr";
import Userlayout from "components/layouts/userlayout";
import MedicoConf from "components/forms/medicoconf";
import { useEffect, useState } from "react";

const MedicoConfiguracion = () => {
  const router = useRouter();
  const [data, setData] = useState(null)
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    const fetchingPacient = async () => {
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
      <h1 className="py-6 text-3xl text-center">Configuración de la cuenta</h1>
      <div className=" flex justify-center ">
        <div className=" w-full">
          <MedicoConf data={data} />
        </div>
      </div>
    </Userlayout>
  );
};

export default MedicoConfiguracion;
