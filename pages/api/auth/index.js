import bcrypt from 'bcryptjs'
import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

const secret = process.env.JWT_SECRET

const handler = async (req, res) => {
    const { method, body } = req
    const  { email, password } = body

    switch (method) {
        case 'POST':
            const paciente = await Paciente.findOne({ email })
            if(!paciente) { return res.status(400).json({message: 'Usuario no encontrado'}) }
            
            const correctPass = paciente === null
                ? false
                : await bcrypt.compare(password, paciente.password)

            if(!correctPass) { return res.status(400).json({message: 'Contraseña incorrecta'}) }

            return res.status(200).json(
                {
                    id:paciente._id
                }
            )
        default:
            break;
    }
}

export default handler