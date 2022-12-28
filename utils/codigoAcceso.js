export const codigoAcceso = (curp) => {
    
    let banco = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789'
    let codigo = 'BH'
    codigo += curp.charAt(Math.floor(Math.random() * curp.length))
    codigo += curp.charAt(Math.floor(Math.random() * curp.length))
    codigo += '-'

    for (let i = 0; i < 8 ; i++) {
        codigo += banco.charAt(Math.floor(Math.random() * banco.length))
    }

    return codigo
} 
