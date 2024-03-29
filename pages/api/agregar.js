import { verify } from "jsonwebtoken";
import { mongoconnection } from "/utils/mongodb";
import Medico from "/models/Medico";
import {calcularEdad} from '/utils/edad'
import {codigoAcceso} from '/utils/codigoAcceso'
import Paciente from '/models/Paciente'

mongoconnection();

const handler = async (req, res) => {
    const { method, body, cookies } = req;
    const { tokensession } = cookies;
    
    switch(method) {
        case 'POST':
            const p = await Paciente.findOne({code_access: body})
            if (!p) {
                return res.status(404).json({ error: "Paciente no encontrado"})
            }

            console.log(p)

            const pacienteEncontrado = {
                curp: p.curp,
                nombre: `${p.nombre} ${p.apaterno} ${p.amaterno}`,
                email: p.email,
                edad: calcularEdad(p.fecnac),
                fecnac: p.fecnac,
                sexo: p.sexo
            }
            return res.status(200).json(pacienteEncontrado)
            break
        case 'PUT':
            if (!tokensession) {
                return res.status(401).json({ error: "No logeado" });
            }
            const { usertype, id } = verify(tokensession, process.env.JWT_SECRET);
            
            const p2 = await Paciente.findOne({curp: body.curp})
            console.log(p2)
            if (!p2) {
                return res.status(404).json({ error: "Paciente no encontrado"})
            }
            
            const medico = await Medico.findById(id);
            console.log(medico)
            if (!medico) {
                return res.status(404).json({ error: "Medico no encontrado" });
            }

            medico.listaPacientes = [...medico.listaPacientes, body]
            const medicoActualizado = await medico.save()
            console.log(medicoActualizado)

            
            p2.code_access = codigoAcceso(body.curp)
            const newM = {
                nombre: `${medico.nombre} ${medico.apaterno} ${medico.amaterno}`,
                email: medico.email,
                tel: medico.tel
            }
            p2.listaMedicos = [...p2.listaMedicos, newM]

            const pacienteActualizado = await p2.save()
            console.log(pacienteActualizado)

            return res.status(200).json({medicoActualizado, pacienteActualizado, usertype})
            // return res.status(200).json({ok: 'ok'})
            break
        default:
            return res
                .status(400)
                .json({ message: "Este metodo no esta soportado." });
    }
    
}

export default handler