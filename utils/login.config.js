export const loginValues = {
    loginemail:'',
    loginpassword:''
}

export const loginValidate = values => {
    let errors = {}

    if (!values.loginemail) {
      errors.loginemail = "Porfavor, ingrese su correo";
    }

    if (!values.loginpassword) {
      errors.loginpassword = "Porfavor, ingrese su contraseña";
    }
    return errors
}