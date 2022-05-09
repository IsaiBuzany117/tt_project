import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

const handler = async (req, res) =>{
    const { method, body } = req
    switch (method) {
        case 'GET': //obtiene un paciente
            const pacientes = await Paciente.find({})
            return res.status(200).json(pacientes)
        case 'POST': //registra un paciente
            try {
                const paciente = new Paciente(body)
                paciente.password = await paciente.encryptPassword(paciente.password)
                const pacienteGuardado = await paciente.save()
                return res.status(201).json(pacienteGuardado)
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        default:
            return res.status(400).json({message: 'Este metodo no esta soportado.'})
    }
}

export default handler
