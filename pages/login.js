import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { loginValues, loginValidate } from '../utils/login.config'
import TextField from '../components/TextField'
import PasswordField from '../components/PasswordField'
import ButtonSubmit from '../components/ButtonSubmit'
import Image from 'next/image'
import logo from "../public/logoytitulo.svg"

const Login = () => {
  const router = useRouter()
  const [error, setError] = useState('')

  const handleSubmit = async (values) => {
    await fetch('http://localhost:3000/api/auth', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.message) setError(data.message)
      else router.push(`/inicio/${data.usertype}/${data.id}`)
    })
    .catch(err => console.log(err))

  }

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-700'>
      <Head>
        <title>Iniciar Sesion</title>
      </Head>
      <div className='grid grid-cols-2 py-4 w-8/12 h-96 bg-slate-100 shadow-lg border rounded-lg'>
        <div className='mx-4'>
          <h1 className='m-2 mb-4 text-xl text-center'><strong>Iniciar Sesión</strong></h1>
          <div>
          <Formik
            initialValues={loginValues}
            // validate={values => loginValidate(values)}
            onSubmit={values => {
              console.log(values)
              handleSubmit(values)
            }}
          >
            {({}) => (
              <Form>
                <TextField name="email" label="Correo electronico" placeholder="Correo electronico"/>
                <PasswordField name="password" label="Contraseña" placeholder="Contraseña"/>
                {
                  error && <span className='mx-2 text-sm text-rose-600'>{error}</span>
                }
                <br />
                <ButtonSubmit name="ingresar" value="Ingresar"/>
                <div>
                  <span className='block text-sm text-slate-600 mx-2 my-2'>
                  ¿Olvidaste tu contraseña? <a className='text-indigo-600 hover:underline hover:text-indigo-400 cursor-pointer'>Recuperala aqui</a>
                  </span>
                  <span className='block text-sm text-slate-600 mx-2 my-2'>
                  ¿Eres paciente? 
                  <Link href="/registro/paciente">
                    <a className='text-indigo-600 hover:underline hover:text-indigo-400 cursor-pointer'> Registrate aqui</a>
                  </Link>
                  </span>
                  <span className='block text-sm text-slate-600 mx-2 my-2'>
                  ¿Eres médico?
                  <Link href="/registro/medico">
                    <a className='text-indigo-600 hover:underline hover:text-indigo-400 cursor-pointer'> Registrate aqui</a>
                  </Link>
                  </span>
                </div>
              </Form>
            )}
          </Formik>
            
          </div>
        </div>
        <div className='flex justify-center m-2'>
          <Image src={logo} alt="logo" height={320} width={320}/>
        </div>
        
      </div>
    </div>
  )
}

export default Login