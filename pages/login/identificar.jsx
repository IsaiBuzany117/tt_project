import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import Layout from "components/layouts/homelayout";
import Textfield from "components/inputs/textfield";
import Buttonsubmit from "components/inputs/buttonsubmit";

const Identificar = () => {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    await fetch("http://localhost:3000/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      console.log(res.status);
      setIsSendEmail(true);
      setTimeout(() => {
        setIsSendEmail(false);
      }, 3000);
    });
  };
  return (
    <Layout>
      <div className="m-[38%] mt-2">
        <div>
          <h1 className="text-2xl text-center font-semibold pt-2">
            Recuperar contraseña
          </h1>
          <div className="py-4">
            <Formik
              initialValues={{ email: "" }}
              validate={(values) => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Por favor, ingresa un email";
                }
                return errors;
              }}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ errors }) => (
                <Form>
                  <Textfield
                    name="email"
                    label="Escribe el correo asociado a tu cuenta"
                    placeholder="Escribe tu email"
                    error={errors.email}
                  />
                  <Buttonsubmit name="submit" value="Enviar" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {isSendEmail ? (
          <p className="mx-auto font-thin text-lime-500 text-sm">
            Se ha enviado un email a tu correo, por favor revisa tu
            bandeja de entrada.
          </p>
        ) : null}
      </div>
    </Layout>
  );
};

export default Identificar;
