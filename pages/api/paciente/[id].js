// import jwt from "jsonwebtoken";
import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

// const secret = process.env.JWT_SECRET

const handler = async (req, res) =>{
    const { id } = req.query

    try {
        const paciente = await Paciente.findOne({_id: id})
        if(!paciente) { return res.status(500).json({message: "Paciente no encontrado"}) }
        return res.status(200).json(paciente)
    } catch (error) {
        console.log(error.message)
        return res.status(200).json({message: error.message})
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
