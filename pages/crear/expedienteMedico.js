import Navbar from "../../components/navprincipal"
import Head from 'next/head'

const ExpedienteMedico = () => {
    return (
        <div className='h-screen'>
            <Head>
                <title>Creación Expediente - Médico</title>
            </Head>
            <Navbar />

            <div>
                <h1 className="text-center text-3xl my-4">Expediente Médico</h1>
                <div className="flex justify-start px-8">
                    <p>
                        <b>Historia Clínica</b>
                    </p>
                </div>
                <div className="flex justify-start px-12">
                    <p>
                        Interrogatorio
                    </p>

                </div>

                <div className="flex justify-start px-12">
                    <p>
                        Exploración física
                    </p>
                    
                </div>

            </div>
        </div>
    )
}

export default ExpedienteMedico