import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

const handler = async (req, res) =>{
    const { method, body } = req
    switch (method) {
        case 'GET':
            const pacientes = await Paciente.find({})
            return res.status(200).json(pacientes)
        case 'POST':
            try {
                const nuevoPaciente = new Paciente(body)
                const pacienteGuardado = await nuevoPaciente.save()
                return res.status(201).json(pacienteGuardado)
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        default:
            return res.status(400).json({message: 'Este metodo no esta soportado.'})
    }
    // res.status(200).json({msg: "paciente"})
}

export default handler
