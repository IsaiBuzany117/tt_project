import { mongoconnection } from '/utils/mongodb'
import Medico from '/models/Medico'

mongoconnection()

const handler = async (req, res) =>{
    const { especialidad } = req.query
    // console.log(especialidad)
    const medicos = await Medico.find({especialidad})
    // if(!medicos) return res.status(400).json({message: "Medicos no encontrados con esta especialidad"})
    return res.status(200).json(medicos)
}

export default handler