import { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import Passwordfield from "components/inputs/passwordfield";
import Buttonsubmit from "components/inputs/buttonsubmit";

const Resetpassword = ({ id, resetfunction }) => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    const { newpass } = values;
    await fetch("http://localhost:3000/api/recuperar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, newpass }),
    }).then((res) => {
      console.log(res.status);
      resetfunction(true);
    });
  };
  return (
    <>
      <Formik
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
                    errors.newpass = "La contraseña debe tener minimo 1 numero";
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
    </>
  );
};

export default Resetpassword;
