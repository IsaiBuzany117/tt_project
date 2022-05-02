// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mongoconnection } from '../../utils/mongodb'
import Prueba from '../../models/prueba'

mongoconnection()

export default async function handler(req, res) {

  const { method, body } = req 

  switch(method) {
    case 'GET':
      try {
        const pruebas = await Prueba.find({})
        return res.status(200).json(pruebas)
      } catch (error) {
        return res.status(400).json({message: error.message})
      }
    
    case 'POST':
      try {
        const nuevaPrueba = new Prueba(body)
        const pruebaguardada = await nuevaPrueba.save()
        console.log(pruebaguardada)
        return res.status(201).json(pruebaguardada)
      } catch (error) {
        return res.status(400).json({message: error.message})
      }
    
    default:
      return res.status(400).json({message: 'Este metodo no esta soportado.'})
  }

}
