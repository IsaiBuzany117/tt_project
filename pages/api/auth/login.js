import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { mongoconnection, mongoclose } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import Medico from "/models/Medico";

mongoconnection();

const loginhandler = async (req, res) => {
  const { body } = req;
  const { loginemail, loginpassword } = body;

  const paciente = await Paciente.findOne({ email: loginemail });
  const medico = await Medico.findOne({ email: loginemail });
  console.log(paciente)
  console.log(medico)

  // return res.json(u)
  if (!paciente && !medico) {
    return res.status(401).json({ error: "Correo no encontrado" });
  }

  let user = paciente ? paciente : medico ? medico : null;

  let { password, _id, email, curp } = user;

  const correctpass = await bcrypt.compare(loginpassword, password);

  if (!correctpass) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
      usertype: paciente ? "paciente" : "medico",
      id: _id,
      email: email,
      curp: curp
    },
    process.env.JWT_SECRET
  );

  const serialized = serialize("tokensession", token, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 4,
    path: '/'
  });

  res.setHeader("Set-Cookie", serialized)

  return res
    .status(200)
    .json({
      msg: "sesion iniciada",
      usertype: paciente ? "paciente" : "medico",
    });
  // mongoclose();
};

export default loginhandler;
