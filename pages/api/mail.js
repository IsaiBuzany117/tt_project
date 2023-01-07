import fs from "fs";
import { mongoconnection } from "/utils/mongodb";
import Paciente from "/models/Paciente";
import Medico from "/models/Medico";

mongoconnection();

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { body } = req;
  const { email } = body;

  const paciente = await Paciente.findOne({ email });
  const medico = await Medico.findOne({ email });

  if (!paciente && !medico) {
    return res.status(400).json({ error: "Correo no encontrado" });
  }
  const usuario = paciente ? paciente : medico ? medico : null;

  const template = fs.createReadStream("./public/test.html");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "idd.ttsalud@gmail.com",
      pass: "gowdllkfdvzgpuro",
    },
  });

  const mailoptions = {
    from: "idd.ttsalud@gmail.com",
    to: body.email,
    subject: "Blockhealth - recuperar contraseña",
    html: `<!<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head><body style="font-family: Arial, Helvetica, sans-serif;background-color: #eef2ff;padding: 10px;"> <img src="cid:logo" alt="blockhealth" style="display: block; width: 10em; height: 10em; margin: 1em auto;"> <div class="container" style="background-color: #f8fafc;width: 45%;margin: 0 auto;margin-bottom: 2em;padding: 1em;border-radius: 10px;box-shadow: 10px;"> <h1 class="title" style="color: #334155;font-size: 4vh;font-weight: 100;margin: 0 auto;text-align: center;">Recuperar contraseña</h1> <br> <p style="padding: 0 2em;">Parece que olvidaste tu contraseña. Si es ese el caso, puedes restablecerla dando click abajo.</p> <a href="http://localhost:3000/login/${usuario._id}" style="background-color: #4f46e5;color: #f8fafc;text-decoration: none;display: block;width: 40%;text-align: center;text-transform: uppercase;margin: 2em auto;padding: 8px 2em;border-radius: 30px;">restablecer mi contraseña</a> <p style="padding: 0 2em;">Si no olvidaste tu contraseña, ignora este correo.</p> </div></body></html>`,
    attachments: [
      {
        filename: "logoytitulo.png",
        path: "./public/logoytitulo.png",
        cid: "logo", //same cid value as in the html img src
      },
    ],
  };

  transporter.sendMail(mailoptions, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(info);
    template.close();
    template.push(null);
    template.read(0);
  });

  return res.status(200).json({ status: "ok" });
}
