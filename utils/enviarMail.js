const nodemailer = require("nodemailer");

export const enviarMail =(data) => {

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nomviembre', 'Diciembre']
    const fecha = new Date()
    
    const mailPaciente = `<!<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head><body style="font-family: Arial, Helvetica, sans-serif;background-color: #eef2ff;padding: 10px;"> <img src="cid:logo" alt="blockhealth" style="display: block; width: 10em; height: 10em; margin: 1em auto;"> <div class="container" style="background-color: #f8fafc;width: 45%;margin: 0 auto;margin-bottom: 2em;padding: 1em;border-radius: 10px;box-shadow: 10px;"> <h1 class="title" style="color: #334155;font-size: 4vh;font-weight: 100;margin: 0 auto;text-align: center;">Modificación de expediente</h1> <br> <p style="padding: 0 2em;">Se le informa que su expediente médico ha sido modificado por el médico ${data.nombre} el día ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}. <br> Si desea revisar los cambios, inicie sesión y consulte su expediente <br> Si desconoce cualquier modificación, comuníquese con el equipo técnico.</p> </div></body></html>`

    const mailMedico = `<!<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head><body style="font-family: Arial, Helvetica, sans-serif;background-color: #eef2ff;padding: 10px;"> <img src="cid:logo" alt="blockhealth" style="display: block; width: 10em; height: 10em; margin: 1em auto;"> <div class="container" style="background-color: #f8fafc;width: 45%;margin: 0 auto;margin-bottom: 2em;padding: 1em;border-radius: 10px;box-shadow: 10px;"> <h1 class="title" style="color: #334155;font-size: 4vh;font-weight: 100;margin: 0 auto;text-align: center;">Modificación de expediente</h1> <br> <p style="padding: 0 2em;">Se le informa que el expediente médico del paciente ${data.nombrepaciente} ha sido modificado por el médico ${data.nombremedico} el día ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}. <br> Si desea revisar los cambios, inicie sesión y consulte el expediente. <br> Si desconoce cualquier modificación, comuníquese con el equipo técnico.</p> </div></body></html>`

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "idd.ttsalud@gmail.com",
            pass: "gowdllkfdvzgpuro",
        },
    });

    const mailoptions = {
        from: "idd.ttsalud@gmail.com",
        to: data.address,
        subject: "Blockhealth - Expediente modificado",
        html: data.to==='P'? mailPaciente : mailMedico,
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
}