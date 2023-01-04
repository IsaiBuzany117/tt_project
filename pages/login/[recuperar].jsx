import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import Layout from "components/layouts/homelayout";
import Resetpassword from "components/forms/resetpassword";
import Passwordfield from "components/inputs/passwordfield";
import Buttonsubmit from "components/inputs/buttonsubmit";

const Recuperar = () => {
  const [isPassReset, setIsPassReset] = useState(false);
  const router = useRouter();
  const { recuperar } = router.query;
  const handleSubmit = async (values) => {
    const { newpass } = values;
    await fetch("http://localhost:3000/api/recuperar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: recuperar, newpass }),
    }).then((res) => {
      console.log(res.status);
      setIsPassReset(true);
      setTimeout(() => {
        setIsPassReset(false);
        router.push("/login");
      }, 2000);
    });
  };
  return (
    <Layout>
      <h1 className="text-2xl text-center font-semibold pt-2">
        Recuperar contraseña
      </h1>
      <div className="mx-[40%] mt-2">
        {isPassReset ? (
          <p className="mx-auto py-2 px-1 font-thin text-lime-500 text-center text-2xl">
            Tu contraseña se restablecido. Puedes cerrar esta ventana o volver a la página principal
          </p>
        ) : (
          <Resetpassword id={recuperar} resetfunction={setIsPassReset} />
        )}
      </div>
    </Layout>
  );
};

export default Recuperar;
