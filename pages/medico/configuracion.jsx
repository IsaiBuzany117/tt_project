import { useRouter } from "next/router";
import useSWR from "swr";
import Userlayout from "components/layouts/userlayout";
import MedicoConf from "components/forms/medicoconf";

const MedicoConfiguracion = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `http://localhost:3000/api/medico`,
    fetcher
  );

  if (error) return <div>Error al cargar la informacion</div>;
  if (!data) return <div>Cargando...</div>;

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
