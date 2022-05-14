import Navinicio from "../components/navinicio"
import Image from "next/image"
import Head from 'next/head'
import logo from "../public/logoytitulo.svg"
// import ipn from '../assets/ipn.svg'
// import escom from '../assets/escom.svg'
import blockchain from "../public/blockchain.svg"
import {HiShieldCheck} from 'react-icons/hi'
import {MdEventAvailable, MdDevices} from 'react-icons/md'
import {BiHealth} from 'react-icons/bi'
import { BsJournalMedical } from 'react-icons/bs' 
import { especialidades } from "../utils/especialidades"
import Link from "next/link"

const index = () => {
  return (
    <div className='h-screen w-full'>
      <Head>
        <title>Blockhealth</title>
      </Head>
      {/* Navbar y logo */}
      <div className='w-full h-2/4 bg-slate-100'>
        <Navinicio />
        <div className="flex justify-center w-full py-2">
          <Image src={logo} alt="logo" height={300} width={300}/>  
        </div>
      </div>
      {/* Que somos y video* */}
      <div className='w-full h-2/4 bg-indigo-700'>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center items-center">
            <BsJournalMedical className="text-slate-100 h-64 w-64"/>
          </div>
          <div className="flex items-center">
            <p className="w-3/4 text-left text-2xl leading-loose text-slate-100">
              Nuestro objetivo es proporcionarle a nuestros pacientes un control sobre sus datos médicos, ya que ellos podrán compartir la versión única y completa de su expediente médico, con cada médico consulte.
            </p>
          </div>
        </div>
      </div>
      {/* Blockchain y beneficios */}
      <div className='w-full h-2/4 bg-slate-100'>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-end items-center">
            <p className="w-3/4 text-right text-2xl leading-loose text-gray-900">
              BLOCKHEALTH utiliza la tecnología blockchain para mantener sus datos medicos <span className="text-indigo-500">seguros</span> y <span className="text-indigo-500">disponibles</span>  en todo momento, y totalmente descentralizados.
              
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={blockchain} alt="logo" height={280} width={280}/>
          </div>
        </div>
      </div>
      {/* Ventajas */}
      <div className='w-full h-2/4 bg-indigo-700'>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-3 divide-x-2 divide-solid h-5/6 w-full">
            <div className="flex flex-col justify-center items-center">
              <HiShieldCheck className="text-slate-100 h-40 w-40"/>
              <br />
              <div>
                <h2 className="text-slate-100 text-2xl">Seguro</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdEventAvailable className="text-slate-100 h-40 w-40"/>
              <br />
              <div>
                <h2 className="text-slate-100 text-2xl">Disponible las 24 hrs</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdDevices className="text-slate-100 h-40 w-40"/>
              <br />
              <div>
                <h2 className="text-slate-100 text-2xl">Consultalo en cualquier dispositivo</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Especialidades */}
      <div className='w-full h-2/4 bg-slate-100'>
        <div className=" px-12 py-4 h-full">
          <div className="flex justify-center">
            <h1 className="text-3xl">Especialidades</h1>
            <BiHealth className="h-8 w-8 text-indigo-600"/>
          </div>
          <div className="grid grid-cols-4 gap-4 my-4">
            {especialidades.map((espec, i) =>{
              return (
                <div key={i}>
                  <p className="text-lg text-center hover:text-indigo-500 hover:cursor-pointer">
                    <Link href={`/buscar`}>
                      <a>{espec}</a>
                    </Link>
                  </p>
                </div>
              )
            } )}
          </div>
        </div>
      </div>
      <footer className="w-full min-h-2/3 bg-indigo-700">
        <div className="grid grid-cols-2 px-40 py-6">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="" height={180} width={180} className=""/>
          </div>
          <div>
            <h2 className="text-lg text-slate-200 font-medium">
              <i>Prototipo web para la gestión de expedientes médicos utilizando una cadena de bloques</i>
            </h2>

            <div className="mt-2 text-slate-200">
              <div className="my-1">
                <p>Buzany Ramírez Oscar Isai. tel. 55 6119 2639</p>
                <p><i>idd.ttsalud@gmail.com</i></p>
              </div>
              <div className="my-1">
                <p>Ordoñez Castro Dayann. tel.55 3680 7432</p>
                <p><i>idd.ttsalud@gmail.com</i></p>
              </div>
              <div className="my-1">
                <p>Santamaria Arcos Diana. tel. 55 2676 1907</p>
                <p><i>idd.ttsalud@gmail.com</i></p>
              </div>
            </div>
          </div>
            {/* <div className="flex justify-center">
              <div className="h-10 w-10 mx-4 my-2">
                <Image src={ipn} alt="ipn logo" />
              </div>
              <div>
                <h3 className="mx-3 my-2 text-lg font-semibold">Instituto Politecnico Nacional</h3>
                <h3 className="mx-3 text-lg font-semibold">Escuela Superior de Computo</h3>
              </div>
              <div className="h-20 w-20 mx-2 my-2">
                <Image src={escom} alt="escom logo" />
              </div>
            </div>
            <div className="grid place-content-center gap-2">
              <h3 className="text-center"><i>Trabajo Terminal</i></h3>
              <h1 className="text-center text-lg font-semibold">{`"Prototipo web para la gestión de expedientes médicos utilizando una cadena de bloques"`}</h1>
              <h3 className="text-center"><i>2021-B066</i></h3>
            </div> */}
        </div>
      </footer>
    </div>
  )
}

export default index