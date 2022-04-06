export const pacientevalues = {
    nombre:'',
    apaterno:'',
    amaterno:'',
    edad: '',
    sexo:'',
    curp:'',
    direc:'',
    tel:'',
    email:''
}
export const pacienteValidate = values => {
    let errors = {}
    if(!values.nombre) {
        errors.nombre = "Por favor, ingrese un nombre"
    }

    if (!values.apaterno) {
        errors.apaterno = "Por favor, ingrese su apellido paterno"
    }

    if (!values.amaterno) {
        errors.amaterno = "Por favor, ingrese su apellido materno"
    }

    if (!values.edad) {
        errors.edad = "Por favor, ingrese su edad"
    }

    if (!values.curp) {
        errors.curp = "Por favor, ingrese su curp"
    }

    if (!values.tel) {
        errors.tel = "Por favor, ingrese su numero de telefono o numero celular"
    }

    if (!values.direc) {
        errors.direc = "Por favor, ingrese su direccion de domicilio actual"
    }

    if (!values.email) {
        errors.email = "Por favor, ingrese su correo electronico"
    }
    return errors
}