import { verify } from "jsonwebtoken";
import { mongoconnection } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import {codigoAcceso} from '../../utils/codigoAcceso'

mongoconnection();

const handler = async (req, res) => {
  const { method, body, cookies } = req;
  const { tokensession } = cookies;
  switch (method) {
    case "GET": //obtiene un paciente
      if (!tokensession) {
        return res.status(401).json({ error: "No logeado" });
      }
      const { usertype, id } = verify(tokensession, process.env.JWT_SECRET);

      const paciente = await Paciente.findById(id);
      if (!paciente) {
        return res.status(404).json({ error: "Paciente no encontrado" });
      }
      return res.status(200).json({
        nombre: `${paciente.nombre} ${paciente.apaterno} ${paciente.amaterno}`,
        curp: paciente.curp,
        fecnac: paciente.fecnac,
        sexo: paciente.sexo,
        email: paciente.email,
        tel: paciente.tel,
        code_access: paciente.code_access
      });

    case "POST": //registra un paciente
      try {
        body.code_access = codigoAcceso(body.curp)
        const paciente = new Paciente(body);
        paciente.password = await paciente.encryptPassword(paciente.password);
        const pacienteGuardado = await paciente.save();
        return res.status(201).json(pacienteGuardado);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "PUT": //actualiza a un paciente
      try {
        const paciente = await Paciente.findByIdAndUpdate(body._id, body, {
          new: true,
          runValidators: true,
        });
        if (!paciente) {
          return res.status(404).json({ msg: "Paciente no encontrado" });
        }
        return res.status(201).json({
          id: paciente._id,
          usertype: "paciente",
        });
      } catch (error) {}
      break;
    default:
      return res
        .status(400)
        .json({ message: "Este metodo no esta soportado." });
  }
};

export default handler;
