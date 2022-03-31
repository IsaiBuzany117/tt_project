import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import Head from 'next/head'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-purple-700'>
      <Head>
        <title>Iniciar Sesion</title>
      </Head>
      <div className='grid grid-cols-2 divide-x-2 divide-indigo-300 w-full'>
        <div className='flex justify-end'>
          <div className='flex flex-col justify-center -translate-x-5 w-80 bg-slate-100 border-2 rounded-2xl'>
            <div className='flex justify-center'>
              <h1 className='m-2 mb-4 text-xl'><strong>Iniciar Sesion</strong></h1>
            </div>

            <div className='flex justify-center'>
              <div className='w-72'>
                <input className='block mb-1 w-full h-8 border-indigo-600 border-2 rounded-md' type="email" placeholder='Email'/>
                <input className='block mt-1 w-full  h-8 border-indigo-600 border-2 rounded-md' type="password" placeholder='Contrseña'/>
                <button className='block'>
                  <span className='mt-1 text-sm text-indigo-600 hover:underline hover:text-indigo-400'>Olvidaste tu contraseña?</span>
                </button>
                <button className='block mb-2'>
                  <span className='text-sm text-indigo-600 hover:underline hover:text-indigo-400'>No tienes una cuenta?</span>
                </button>
                <div className='mt-4 mb-4'>
                  <button className='w-full p-1 shadow-md bg-indigo-600 text-slate-100 border rounded-md transition duration-150 ease-in-out hover:scale-105 hover:bg-indigo-800'>
                    Ingresar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex justify-start'>
          <div className='flex flex-col justify-center translate-x-5 w-80 rounded-2xl'>
            <div className='m-2'>
              <button className=' flex justify-center w-full p-1 shadow-md bg-slate-100 text-slate-800 border rounded-md hover:bg-slate-200'>
                <FcGoogle className='h-7 w-7 mr-2'/>
                <span className='ml-1'>Iniciar Sesion con Google</span>
              </button>
            </div>
            <div className='m-2'>
              <button className=' flex justify-center w-full p-1 shadow-md bg-blue-800 text-slate-100 border rounded-md hover:bg-blue-900'>
                <FaFacebook className='h-7 w-7 mr-2'/>
                <span className='ml-1'>Iniciar Sesion con Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login