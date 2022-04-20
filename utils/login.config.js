export const loginValues = {
    email:'',
    password:''
}

export const loginValidate = values => {
    let errors = {}

    if(!values.email) {
        errors.email = 'Porfavor, ingrese su correo'
    }

    if(!values.password) {
        errors.password = 'Porfavor, ingrese su contraseña'
    }
    return errors
}