export const expedienteIvalues = {
    nombre:'',
    apaterno:'',
    amaterno:'',
    edad:'',
    fecnac: '',
    sexo:'',
    edo:'',
    mun:'',
    loc:'',
    tel:'',
    edonac:'',
    edoC:'',
    escol:'',
    ocup:'',
    relig:'',
    claseS:'',
    famA:'',
}
export const pacienteIValidate = values => {
    let errors = {}
    if(!values.nombre) {
        errors.nombre = "Por favor, ingrese el nombre del paciente"
    }

    if (!values.apaterno) {
        errors.apaterno = "Por favor, ingrese el apellido paterno"
    }

    if (!values.amaterno) {
        errors.amaterno = "Por favor, ingrese el apellido materno"
    }

    if (!values.edad) {
        errors.edad = "Por favor, ingrese la edad del paciente"
    }
    
    if (!values.fecnac) {
        errors.fecnac = "Por favor, ingrese la fecha de nacimiento"
    }

    if (!values.sexo) {
        errors.sexo = "Por favor, ingrese el sexo"
    }

    if (!values.edo) {
        errors.edo = "Por favor, ingrese la entidad federativa de residencia"
    }

    if (!values.mun) {
        errors.mun = "Por favor, ingrese el municipio de residencia"
    }

    if (!values.loc) {
        errors.loc = "Por favor, ingrese el localidad de residencia"
    }

    if (!values.tel) {
        errors.tel = "Por favor, ingrese el numero de telefono o numero celular"
    }

    if (!values.edonac) {
        errors.edonac = "Por favor, ingrese el estado de nacimiento"
    }
    
    if (!values.edoC) {
        errors.edoC = "Por favor, ingrese el estado civil"
    }

    if (!values.escol) {
        errors.escol = "Por favor, ingrese la escolaridad"
    }

    if (!values.ocup) {
        errors.ocup = "Por favor, ingrese la ocupación"
    }

    if (!values.relig) {
        errors.relig = "Por favor, ingrese la religión del paciente"
    }

    if (!values.claseS) {
        errors.claseS = "Por favor, ingrese la clase socio-económica"
    }

    if (!values.famA) {
        errors.famA = "Por favor, ingrese el nombre de un familiar de contacto"
    }

    return errors
}