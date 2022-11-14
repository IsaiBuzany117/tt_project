import { useRouter } from "next/router";
import useSWR from "swr";
import Userlayout from "components/layouts/userlayout";
import PacienteConf from "components/forms/pacienteconf";

const PacienteConfiguracion = () => {
  const router = useRouter();
  // const { id } = router.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(
    `http://localhost:3000/api/paciente`,
    fetcher
  );

  if (error) return <div>Error al cargar la informacion</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <Userlayout type="paciente">
      <h1 className="py-6 text-3xl text-center">Configuración de la cuenta</h1>
      <div className=" flex justify-center ">
        <div className="w-full">
          <PacienteConf data={data} />
        </div>
      </div>
    </Userlayout>
  );
};

export default PacienteConfiguracion;
