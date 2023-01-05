import { verify } from "jsonwebtoken";
import { mongoconnection } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import Medico from "/models/Medico";
import {enviarMail} from 'utils/enviarMail'

mongoconnection();

export default async function handler(req, res) {
    const {  body, cookies } = req;
    const { tokensession } = cookies;
    try {
        if (!tokensession) {
            return res.status(401).json({ error: "No logeado" });
        }
        const { usertype, id } = verify(tokensession, process.env.JWT_SECRET);

        const medico = await Medico.findById(id);
        if (!medico) {
            return res.status(404).json({ error: "Medico no encontrado" });
        }

        const paciente = await Paciente.findOne({ curp: body.curp })
        if (!paciente) {
            return res.status(404).json({ error: "Paciente no encontrado" })
        }

        enviarMail({
            nombre: `${medico.nombre} ${medico.apaterno} ${medico.amaterno}`,
            address: paciente.email,
            to: 'P'
        })

        const listaM = paciente.listaMedicos.filter((m)=> m.email !== medico.email)
        listaM.forEach(m => {
            enviarMail({
                nombrepaciente: `${paciente.nombre} ${paciente.apaterno} ${paciente.amaterno}`,
                nombremedico: `${medico.nombre} ${medico.apaterno} ${medico.amaterno}`,
                address: m.email,
                to: 'M'
            })
        })

        return res.status(200)
    } catch (error) {
        console.log(error)
        return res.status(400)
    }

    

}