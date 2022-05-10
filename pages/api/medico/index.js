import { mongoconnection } from '../../../utils/mongodb'
import Medico from '../../../models/Medico'

mongoconnection()

const handler = async (req, res) =>{
    const { method, body } = req
    switch (method) {
        case 'GET':
            const medicos = await Medico.find({})
            return res.status(200).json(medicos)
        case 'POST':
            try {
                const medico = new Medico(body)
                medico.password = await medico.encryptPassword(medico.password)
                const medicoGuardado = await nuevoMedico.save()
                return res.status(201).json(medicoGuardado)
            } catch (error) {
                return res.status(400).json({message: error.message})
            }
        default:
            return res.status(400).json({message: 'Este metodo no esta soportado.'})
    }
    // res.status(200).json({msg: "paciente"})
}

export default handler