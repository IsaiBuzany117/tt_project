import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

const handler = async (req, res) =>{
    const { method, body } = req
    const { id } = req.query

    switch (method) {
        case "GET":
            try {
                const paciente = await Paciente.findById(id)
                if(!paciente) { return res.status(500).json({message: "Paciente no encontrado"}) }
                return res.status(200).json(paciente)
            } catch (error) {
                console.log(error.message)
                return res.status(200).json({message: error.message})
            }
        case "PUT":
            // return res.status(200).json({ msg: "hola" });
            try {
                const paciente = await Paciente.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true
                })
                if(!paciente) return res.status(404).json({ msg: "Paciente no encontrado" });
                return res.status(200).json({
                    id:paciente._id,
                    usertype: "paciente"
                });
            } catch (error) {
                console.log(error.message)
                return res.status(200).json({message: error.message})
            }
        default:
            break;
    }
}

export default handler
