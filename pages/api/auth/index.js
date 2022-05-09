import bcrypt from 'bcryptjs'
import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'
import Medico from '../../../models/Medico'

mongoconnection()

const secret = process.env.JWT_SECRET

const handler = async (req, res) => {
    const { method, body } = req
    const  { email, password } = body

    switch (method) {
        case 'POST':
            const paciente = await Paciente.findOne({ email })
            const medico = await Medico.findOne({ email })

            if(!paciente && !medico) { return res.status(400).json({message: 'Usuario no encontrado'}) }
            const usuario = paciente
                ? paciente
                : medico
                ? medico
                : null
            
            const correctPass = usuario === null
                ? false
                : await bcrypt.compare(password, usuario.password)
            
            if(!correctPass) { return res.status(400).json({message: 'Contraseña incorrecta'}) }
            
            return res.status(200).json(
                {
                    id:usuario._id,
                    usertype: paciente?"paciente":"medico"
                }
            )
        default:
            break;
    }
}

export default handler