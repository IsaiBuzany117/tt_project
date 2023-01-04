import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

const Homelayout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="flex">
        <div className="w-full">
          <div className="py-1 px-3">
            <Link href="/">
              <a>
                <Image src={logo} alt="nav logo" width={30} height={30} />
              </a>
            </Link>
          </div>
        </div>
        <ul className="flex justify-end w-full text-sm">
          <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
            <Link href="/buscar">
              <a>Buscar Médicos</a>
            </Link>
          </li>
          <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
            <Link href="/registro/paciente">
              <a>Regístrate como Paciente</a>
            </Link>
          </li>
          <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
            <Link href="/registro/medico">
              <a>Regístrate como Médico</a>
            </Link>
          </li>
          <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
            <Link href="/login">
              <a>Iniciar Sesión</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

export default Homelayout;
