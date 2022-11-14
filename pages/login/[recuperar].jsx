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
            Tu contrasea se restablecio. Puedes cerrar esta ventana o ir a
            iniciar
          </p>
        ) : (
          <Resetpassword id={recuperar} resetfunction={setIsPassReset} />
        )}
        {/* <Formik
          initialValues={{ newpass: "", confirmpass: "" }}
          validate={(values) => {
            let errors = {};

            const includeUpper = (pass) => /(?=.*[A-Z])/.test(pass);
            const includeLower = (pass) => /(?=.*[a-z])/.test(pass);
            const includeNumber = (pass) => /(?=.*[0-9])/.test(pass);
            const includeChar = (pass) => /(?=.*[-+_!@#$%^&*.,?])/.test(pass);

            if (!values.newpass) {
              errors.newpass = "Por favor, inrgesa una contraseña";
            } else {
              if (values.newpass.length < 8) {
                errors.newpass = "La contraseña debe tener minimo 8 caracteres";
              } else {
                if (!includeUpper(values.newpass)) {
                  errors.newpass =
                    "La contraseña debe tener minimo 1 letra mayuscula";
                } else {
                  if (!includeLower(values.newpass)) {
                    errors.newpass =
                      "La contraseña debe tener minimo 1 letra minuscula";
                  } else {
                    if (!includeNumber(values.newpass)) {
                      errors.newpass =
                        "La contraseña debe tener minimo 1 numero";
                    } else {
                      if (!includeChar(values.newpass)) {
                        errors.newpass =
                          "La contraseña debe tener minimo 1 caracter especial";
                      }
                    }
                  }
                }
              }
            }

            if (!values.confirmpass) {
              errors.confirmpass = "Por favor, confirma la nueva contraseña";
            } else {
              if (!(values.newpass === values.confirmpass)) {
                errors.confirmpass = "Las contraseñas no coinciden";
              }
            }

            return errors;
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors }) => (
            <Form>
              <Passwordfield
                name="newpass"
                label="Nueva contraseña"
                error={errors.newpass}
              />
              <Passwordfield
                name="confirmpass"
                label="Confirmar contraseña"
                error={errors.confirmpass}
              />
              <Buttonsubmit name="submit" value="Cambiar contraseña" />
            </Form>
          )}
        </Formik>
        {isPassReset ? (
          <p className="mx-auto font-thin text-lime-500 text-sm">
            Tu contrasea se restablecio.
          </p>
        ) : null} */}
      </div>
    </Layout>
  );
};

export default Recuperar;
