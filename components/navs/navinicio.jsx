import Link from "next/link"

const Navinicio = () => {
  return (
    <nav className="flex justify-center">
      <div className="grid grid-cols-2 p-1 w-full bg-slate-100 border-b-2 border-slate-300">
        <div className="flex">
          <Link href='/buscar'>
            <a className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800 hover:underline">Busqueda</a>
          </Link>
        </div>
        <div className="flex justify-end">
          <Link href="/registro/paciente">
            <a className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800 hover:underline">Registrate como Paciente</a>
          </Link>
          <Link href="/registro/medico">
            <a className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800 hover:underline">Registrate como Médico</a>
          </Link>
          <Link href="/login" >
            <a className="mx-3 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-indigo-800 hover:underline">Iniciar Sesion</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navinicio