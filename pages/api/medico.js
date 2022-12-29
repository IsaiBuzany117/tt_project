import { verify } from "jsonwebtoken";
import { mongoconnection } from "/utils/mongodb";
import Medico from "/models/Medico";

mongoconnection();

const handler = async (req, res) => {
  const { method, body, cookies } = req;
  const { tokensession } = cookies;
  switch (method) {
    case "GET":
      if (!tokensession) {
        return res.status(401).json({ error: "No logeado" });
      }
      const { usertype, id } = verify(tokensession, process.env.JWT_SECRET);

      const medico = await Medico.findById(id);
      if (!medico) {
        return res.status(404).json({ error: "Medico no encontrado" });
      }
      return res.status(200).json(medico);
    case "POST":
      try {
        console.log(body)
        // res.json(body)
        body.listaPacientes = []
        const medico = new Medico(body);
        medico.password = await medico.encryptPassword(medico.password);
        const medicoGuardado = await medico.save();
        return res.status(201).json(medicoGuardado);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    case "PUT":
      try {
        const medico = await Medico.findByIdAndUpdate(body._id, body, {
          new: true,
          runValidators: true,
        });
        if (!medico)
          return res.status(404).json({ msg: "Medico no encontrado" });
        return res.status(200).json({
          id: medico._id,
          usertype: "medico",
        });
      } catch (error) {
        console.log(error.message);
        return res.status(200).json({ message: error.message });
      }
    default:
      return res
        .status(400)
        .json({ message: "Este metodo no esta soportado." });
  }
};

export default handler;
