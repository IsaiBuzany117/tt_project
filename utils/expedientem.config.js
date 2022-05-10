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
    tabaco:'',
    alc:'',
    toxi:'',
    dep_ej:'',
    hig:'',
    hab:'',
    alim:'',
    inmu_suero:'',
    trab_dcso_s:'',
    prot:'',
    hobby:'',
    int_fam:'',
    att:'',
    problema:'',
    enf_cong:'',
    enf_infancia:'',
    qx:'',
    trauma:'',
    alergia:'',
    trans:'',
    intox:'',
    hosp:'',
    est_lab_gab:'',
    terap_emp:'',
    enfermedad:'',
    mot_cons:'',
    factor:'',
    inicio:'',
    sintomas:'',
    evol:'',
    edo_act:'',
    list_prob:'',
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

    if (!values.tabaco) {
        errors.tabaco = "Por favor, ingrese la información requerida"
    }

    if (!values.alc) {
        errors.alc = "Por favor, ingrese la información requerida"
    }

    if (!values.toxi) {
        errors.toxi = "Por favor, ingrese la información requerida"
    }

    if (!values.dep_ej) {
        errors.dep_ej = "Por favor, ingrese la información requerida"
    }

    if (!values.hig) {
        errors.hig = "Por favor, ingrese la información requerida"
    }

    if (!values.hab) {
        errors.hab = "Por favor, ingrese la información requerida"
    }

    if (!values.alim) {
        errors.alim = "Por favor, ingrese la información requerida"
    }

    if (!values.inmu_suero) {
        errors.inmu_suero = "Por favor, ingrese la información requerida"
    }

    if (!values.trab_dcso_s) {
        errors.trab_dcso_s = "Por favor, ingrese la información requerida"
    }

    if (!values.prot) {
        errors.prot = "Por favor, ingrese la información requerida"
    }

    if (!values.hobby) {
        errors.hobby = "Por favor, ingrese la información requerida"
    }

    if (!values.int_fam) {
        errors.int_fam = "Por favor, ingrese la información requerida"
    }

    if (!values.att) {
        errors.att = "Por favor, ingrese la información requerida"
    }

    if (!values.problema) {
        errors.problema = "Por favor, ingrese la información requerida"
    }

    if (!values.enf_cong) {
        errors.enf_cong = "Por favor, ingrese la información requerida"
    }

    if (!values.enf_infancia) {
        errors.enf_infancia = "Por favor, ingrese la información requerida"
    }

    if (!values.qx) {
        errors.qx = "Por favor, ingrese la información requerida"
    }

    if (!values.trauma) {
        errors.trauma = "Por favor, ingrese la información requerida"
    }

    if (!values.alergia) {
        errors.alergia = "Por favor, ingrese la información requerida"
    }

    if (!values.trans) {
        errors.trans = "Por favor, ingrese la información requerida"
    }

    if (!values.intox) {
        errors.intox = "Por favor, ingrese la información requerida"
    }

    if (!values.hosp) {
        errors.hosp = "Por favor, ingrese la información requerida"
    }

    if (!values.est_lab_gab) {
        errors.est_lab_gab = "Por favor, ingrese la información requerida"
    }

    if (!values.terap_emp) {
        errors.terap_emp = "Por favor, ingrese la información requerida"
    }

    if (!values.enfermedad) {
        errors.enfermedad = "Por favor, ingrese la información requerida"
    }

    if (!values.mot_cons) {
        errors.mot_cons = "Por favor, ingrese la información requerida"
    }

    if (!values.factor) {
        errors.factor = "Por favor, ingrese la información requerida"
    }

    if (!values.inicio) {
        errors.inicio = "Por favor, ingrese la información requerida"
    }

    if (!values.sintomas) {
        errors.sintomas = "Por favor, ingrese la información requerida"
    }

    if (!values.evol) {
        errors.evol = "Por favor, ingrese la información requerida"
    }

    if (!values.edo_act) {
        errors.edo_act = "Por favor, ingrese la información requerida"
    }

    if (!values.list_prob) {
        errors.list_prob = "Por favor, ingrese la información requerida"
    }

    return errors
}