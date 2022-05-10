// import jwt from "jsonwebtoken";
import { mongoconnection } from '../../../utils/mongodb'
import Paciente from '../../../models/Paciente'

mongoconnection()

// const secret = process.env.JWT_SECRET

const handler = async (req, res) =>{
    const { id } = req.query

    try {
        const paciente = await Paciente.findOne({id})
        if(!paciente) { return res.status(500).json({message: "Paciente no encontrado"}) }
        return res.status(200).json(paciente)
    } catch (error) {
        console.log(error.message)
        return res.status(200).json({message: error.message})
    }
}

export default handler
