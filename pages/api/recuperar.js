import { mongoconnection } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import Medico from "/models/Medico";

mongoconnection();

const handler = async (req, res) => {
  const { body } = req;
  let { id, newpass } = body;
  const paciente = await Paciente.findById(id);
  const medico = await Medico.findById(id);

  if (!paciente && !medico) {
    return res.status(400).json({ message: "Correo no encontrado" });
  }

  const usuario = paciente ? paciente : medico ? medico : null;
  usuario.password = await usuario.encryptPassword(newpass);
  const saved = await usuario.save();
  if(!saved){
    res.status(400).send({error: 'No se pudo actualizar la contraseña'})
  }
  return res.status(200).json({ status: "ok" });
};

export default handler;
