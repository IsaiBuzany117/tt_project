export const medicovalues = {
    nombre:'',
    apaterno:'',
    amaterno:'',
    fecnac: '',
    edonac:'',
    sexo:'',
    nac:'',
    curp:'',
    edo:'',
    mun:'',
    loc:'',
    cedula:'',
    especialidad:'',
    experiencia:'',
    tel:'',
    email:'',
    password:''
}

export const medicoValidate = values => {
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

    if (!values.fecnac) {
        errors.fecnac = "Por favor, ingrese su fecha de nacimiento"
    }

    if (!values.edonac) {
        errors.edonac = "Por favor, ingrese el estado de nacimiento"
    }

    if (!values.sexo) {
        errors.sexo = "Por favor, ingrese su sexo"
    }

    if (!values.nac) {
        errors.nac = "Por favor, ingrese su nacionalidad"
    }

    if (!values.curp) {
        errors.curp = "Por favor, ingrese su curp"
    }

    if (!values.edo) {
        errors.edo = "Por favor, ingrese su entidad federativa de residencia"
    }

    if (!values.mun) {
        errors.mun = "Por favor, ingrese su municipio de residencia"
    }

    if (!values.loc) {
        errors.loc = "Por favor, ingrese su localidad de residencia"
    }

    if (!values.cedula) {
        errors.loc = "Por favor, ingrese su cedula profesional"
    }

    if (!values.especialidad) {
        errors.loc = "Por favor, ingrese su especialidad"
    }

    if (!values.experiencia) {
        errors.loc = "Por favor, ingrese su experiencia"
    }

    if (!values.email) {
        errors.email = "Por favor, ingrese su correo electronico"
    }

    if (!values.password) {
        errors.password = "Por favor, ingrese una contraseña"
    }

    return errors
}