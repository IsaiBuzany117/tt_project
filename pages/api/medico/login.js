import bcrypt from 'bcryptjs'
import { mongoconnection } from '../../../utils/mongodb'
import Medico from '../../../models/Medico'

mongoconnection()

// const secret = process.env.JWT_SECRET

const handler = async (req, res) => {
    const { method, body } = req
    const  { email, password } = body
    
    // return res.status(200).json("hola")
    switch (method) {
        case 'POST':
            try {
                const medico = await Medico.findOne({ email })
                if(!medico) { return res.status(400).json({message: 'Medico no encontrado'}) }
                
                const correctPass = medico === null
                    ? false
                    : await bcrypt.compare(password, paciente.password)
    
                if(!correctPass) { return res.status(400).json({message: 'Contraseña incorrecta'}) }
    
                return res.status(200).json({ id:paciente._id })
            } catch (error) {
                console.log(error.message)
                return res.status(400).json(error.message)
            }
            // return res.status(200).json("post")
        default:
            break;
    }
}

export default handler