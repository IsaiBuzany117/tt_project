export const passwordvalues = {
    oldPassword:'',
    newPassword:'',
    confirNewPassword:''
}

export const passwordValidate = values => {
    let errors = {}
    if(!values.oldPassword) {
        errors.oldPassword = "Por favor, ingrese su antigua contraseña"
    }

    if (!values.newPassword) {
        errors.newPassword = "Por favor, ingrese su nueva contraseña"
    }

    if (!values.confirNewPassword) {
        errors.confirNewPassword = "Por favor, confirme su nueva contraseña"
    }

    return errors
}