import Link from "next/link"

const Navinicio = () => {
  return (
    <nav className="flex justify-center">
      <div className="grid grid-cols-2 translate-y-2 w-full mx-8 bg-slate-100 border-2 border-slate-300 rounded-md">
        <div className="flex">
          <span className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline">Busqueda</span>
        </div>
        <div className="flex justify-end">
          <span className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline">Registrate</span>
          <Link href="/login" passHref>
          <span className="mx-2 my-1 font-bold cursor-pointer transition duration-150 ease-in-out hover:scale-105  hover:text-purple-800 hover:underline">Iniciar Sesion</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navinicio