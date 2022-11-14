import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { mongoconnection, mongoclose } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import Medico from "/models/Medico";

mongoconnection();

const logouthandler = async (req, res) => {
  const {tokensession} = req.cookies
  if (!tokensession) {
    return res.status(401).json({ error: "No logeado" });
  }
  const serialized = serialize("tokensession", null, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);

  return res.status(200).json({
    msg: "sesion cerrada",
    // usertype: paciente ? "paciente" : "medico",
  });
  // mongoclose();
};

export default logouthandler;
