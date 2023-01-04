import Image from "next/image";
import Link from "next/link";
import { HiShieldCheck } from "react-icons/hi";
import { MdEventAvailable, MdDevices } from "react-icons/md";
import { BiHealth } from "react-icons/bi";
import { BsJournalMedical } from "react-icons/bs";
import Homelayout from 'components/layouts/homelayout'
import logo from "public/logoytitulo.svg";
import blockchain from "public/blockchain.svg";
import { especialidades } from "utils/especialidades";

const index = () => {
  return (
    <Homelayout title='Blockhealth'>
      <div className="flex justify-center w-full py-6">
        <Image src={logo} alt="logo" height={300} width={300} />
      </div>
      {/* Que somos y video* */}
      <div className="w-full h-2/4 bg-indigo-700">
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center items-center">
            <BsJournalMedical className="text-slate-100 h-56 w-56" />
          </div>
          <div className="flex items-center">
            <p className="px-10 text-left text-2xl leading-loose text-slate-100">
              Nuestro objetivo es proporcionarle a nuestros pacientes un control
              sobre sus datos médicos, ya que ellos podrán compartir la versión
              única y completa de su expediente médico, con cada médico que
              consulte.
            </p>
          </div>
        </div>
      </div>
      {/* Blockchain y beneficios */}
      <div className="w-full h-2/4 bg-slate-100">
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-end items-center">
            <p className="px-10 text-right text-2xl leading-loose text-gray-900">
              BLOCKHEALTH utiliza la tecnología blockchain para mantener sus
              datos médicos <span className="text-indigo-500">seguros</span> y{" "}
              <span className="text-indigo-500">disponibles</span> en todo
              momento, y totalmente descentralizados.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={blockchain} alt="logo" height={280} width={280} />
          </div>
        </div>
      </div>
      {/* Ventajas */}
      <div className="w-full h-2/4 bg-indigo-700">
        <div className="flex items-center h-full">
          <div className="grid grid-cols-3 divide-x-2 divide-solid w-full">
            <div className="flex flex-col justify-center items-center">
              <HiShieldCheck className="text-slate-100 h-40 w-40" />
              <div>
                <h2 className="text-slate-100 text-2xl">Seguro</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdEventAvailable className="text-slate-100 h-40 w-40" />
              <div>
                <h2 className="text-slate-100 text-2xl">
                  Disponible las 24 hrs
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdDevices className="text-slate-100 h-40 w-40" />
              <div>
                <h2 className="text-slate-100 text-2xl">
                  Consúltalo en cualquier dispositivo
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especialidades */}
      <div className="w-full h-2/4 bg-slate-100">
        <div className="px-12 py-4 h-full">
          <div className="flex justify-center">
            <h1 className="text-3xl">Especialidades</h1>
            <BiHealth className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="grid grid-cols-4 gap-4 my-4">
            {especialidades.map((espec, i) => {
              return (
                <div key={i}>
                  <p className="text-lg text-center hover:text-indigo-500 hover:cursor-pointer">
                    <Link href={`/buscar`}>
                      <a>{espec}</a>
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="w-full min-h-2/3 bg-indigo-700">
        <div className="grid grid-cols-2 px-40 py-6">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="" height={180} width={180} className="" />
          </div>
          <div>
            <h2 className="text-base text-slate-200 font-medium">
              <i>
                Prototipo web para la gestión de expedientes médicos utilizando
                una cadena de bloques
              </i>
            </h2>

            <div className="mt-2 text-sm text-slate-200">
              <div className="my-1">
                <p>Buzany Ramírez Oscar Isai. tel. 55 6119 2639</p>
                <p>
                  <i>idd.ttsalud@gmail.com</i>
                </p>
              </div>
              <div className="my-1">
                <p>Ordoñez Castro Dayann. tel.55 3680 7432</p>
                <p>
                  <i>idd.ttsalud@gmail.com</i>
                </p>
              </div>
              <div className="my-1">
                <p>Santamaria Arcos Diana. tel. 55 2676 1907</p>
                <p>
                  <i>idd.ttsalud@gmail.com</i>
                </p>
              </div>
            </div>
            <div className="w-full h-[0.1rem] rounded-lg bg-indigo-800"></div>
            <p className="py-2 hover:text-slate-800 hover:cursor-pointer">
              <Link href={`/privacidad`}>
                <a>Política de privacidad</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </Homelayout>
  );
};

export default index;
