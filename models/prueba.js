import { Schema, model, models } from 'mongoose'

const pruebaSchema = new Schema ({
    name: String,
    last: String,
    age: Number
}, {
    timestamps: true,
    versionKey: false
})

export default models.Prueba || model('Prueba', pruebaSchema)