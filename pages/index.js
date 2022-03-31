import Navinicio from "../components/navinicio"
import Image from "next/image"
import Head from 'next/head'
import logo1 from "../assets/logo1.svg"
import blockchain from "../assets/blockchain.svg"
import {HiShieldCheck} from 'react-icons/hi'
import {MdEventAvailable, MdDevices} from 'react-icons/md'

const index = () => {
  return (
    <div className='h-screen w-full'>
      <Head>
        <title>Blockhealth</title>
      </Head>
      {/* Navbar y logo */}
      <div className='w-full h-3/4 bg-slate-100'>
        <Navinicio />
        <div className="flex justify-center w-full mt-8">
          <Image src={logo1} alt="logo"/>  
        </div>
      </div>
      {/* Que somos y video* */}
      <div className='w-full h-3/4 bg-purple-700'>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center items-center">
            <div className="bg-blue-500">VIDEO</div>
          </div>
          <div className="flex items-center">
            <p className="w-3/4 text-left text-2xl leading-loose text-slate-100">
              Nuestro objetivo es proporcionarle a nuestros pacientes un control sobre sus datos médicos, ya que ellos podrán compartir la versión única y completa de su expediente médico, con cada médico consulte.
            </p>
          </div>
        </div>
      </div>
      {/* Blockchain y beneficios */}
      <div className='w-full h-3/4 bg-slate-100'>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-end items-center">
            <p className="w-3/4 text-right text-2xl leading-loose text-gray-900">
              BLOCKHEALTH utiliza la tecnología blockchain para mantener sus datos medicos <span className="text-purple-500">seguros</span> y <span className="text-purple-500">disponibles</span>  en todo momento, y totalmente descentralizados.
              
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={blockchain} alt="logo" height={400} width={400}/>
          </div>
        </div>
      </div>
      {/* Ventajas */}
      <div className='w-full h-3/4 bg-purple-700'>
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
      <div className='w-full h-3/4 bg-slate-100'>

      </div>
    </div>
  )
}

export default index