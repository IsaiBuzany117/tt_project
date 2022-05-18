import Image from 'next/image'
import Link from 'next/link'
import error from '../public/error.svg'

const Error404 = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Image src={error} alt="error" width={220} height={220}/>
        <div className='m-6'>
            <h1 className='text-3xl py-2'>404-Pagina no encontrada</h1>
            <Link href="/">
                <a className='text-indigo-500 text-lg hover:underline'>Volver al inicio</a>
            </Link>
        </div>
    </div>
  )
}

export default Error404