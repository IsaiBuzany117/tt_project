import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "public/logo.svg";

const Signuplayout = ({ title, children}) => {
  return (
    <div>
      <Head>
        <title>Registro-{title}</title>
      </Head>
      <nav className="flex">
        <div className="w-full">
          <div className="py-1 px-3">
            <Image src={logo} alt="nav logo" width={30} height={30} />
          </div>
        </div>
        <ul className="flex justify-end w-full text-sm">
          <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          {title === "Paciente" ? (
            <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
              <Link href={`/registro/medico`}>
                <a>{`Soy médico`}</a>
              </Link>
            </li>
          ) : (
            <li className="px-3 py-2 font-bold transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-800">
              <Link href={`/registro/paciente`}>
                <a>{`Soy paciente`}</a>
              </Link>
            </li>
          )}
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

export default Signuplayout;
