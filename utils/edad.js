export const calcularEdad = (fecha) => {
    const hoy = new Date()
    const fechaNacimiento = new Date(fecha)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    const meses = hoy.getMonth() - fechaNacimiento.getMonth()

    if(meses < 0 || (meses === 0 && hoy.getDate() < fecha.getDate())) {
        edad--
    }

    return edad
}