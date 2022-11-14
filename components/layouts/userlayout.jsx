import Head from 'next/head';
import Image from 'next/image';
import Menu from '../menu'
import logo from "public/logo.svg";

const Userlayout = ({type, children}) => {
  return (
    <div>
      <Head>
        <title>Inicio-{type}</title>
      </Head>
      <nav className="flex border-b-2 border-indigo-700">
        <div className="w-full">
          <div className="py-1 px-3">
            <Image src={logo} alt="nav logo" width={25} height={25} />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div>
            <Menu type={type} />
          </div>
        </div>
      </nav>
      <main className="h-screen w-full">{children}</main>
    </div>
  );
}

export default Userlayout