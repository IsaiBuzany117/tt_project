import { mongoconnection } from '../../../utils/mongodb'
import Medico from '../../../models/Medico'

mongoconnection()

const handler = async (req, res) =>{
    const { method, body } = req
    const { id } = req.query

    switch (method) {
        case "GET":
            try {
                const medico = await Medico.findById(id)
                if(!medico) { return res.status(500).json({message: "Medico no encontrado"}) }
                return res.status(200).json(medico)
            } catch (error) {
                console.log(error.message)
                return res.status(200).json({message: error.message})
            }
        case "PUT":
            try {
                const medico = await Medico.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true
                })
                if(!medico) return res.status(404).json({ msg: "Medico no encontrado" });
                return res.status(200).json({
                    id:medico._id,
                    usertype: "medico"
                });
            } catch (error) {
                console.log(error.message)
                return res.status(200).json({message: error.message})
            }
        default:
            break;
    }

    // return res.status(200).json({id})
    // const { method, body } = req
    // switch (method) {
    //     case 'GET': //obtiene un paciente
    //         const pacientes = await Paciente.find({})
    //         return res.status(200).json(pacientes)
    //     case 'POST': //registra un paciente
    //         try {
    //             const paciente = new Paciente(body)
    //             paciente.password = await paciente.encryptPassword(paciente.password)
    //             const pacuenteGuardado = await paciente.save()
    //             // const token = jwt.sign({id: paciente._id}, secret, { expiresIn: 60*60*24 })
    //             return res.status(201).json(pacuenteGuardado)
    //         } catch (error) {
    //             return res.status(400).json({message: error.message})
    //         }
    //     default:
    //         return res.status(400).json({message: 'Este metodo no esta soportado.'})
    // }
}

export default handler