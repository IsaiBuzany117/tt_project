import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const pacienteSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      maxlength: [50, "El nombre no puede ser mayor a 50"],
    },
    apaterno: {
      type: String,
      required: [true, "El apellido paterno es requerido"],
      trim: true,
      maxlength: [50, "El apellido paterno no puede ser mayor a 50"],
    },
    amaterno: {
      type: String,
      required: false,
      trim: true,
      maxlength: [50, "El apellido materno no puede ser mayor a 50"],
    },
    fecnac: {
      type: String,
      required: [true, "La fecha de nacimiento es requerida"],
      trim: true,
    },
    edonac: {
      type: String,
      required: [true, "El estado de nacimiento es requerido"],
      trim: true,
      maxlength: [2, "El estado de nacimiento no puede ser mayor a 2"],
      minlength: [2, "El estado de nacimiento no puede ser menor a 2"],
    },
    sexo: {
      type: String,
      required: [true, "El sexo es requerido"],
      trim: true,
      maxlength: [1, "El sexo no puede ser mayor a 1"],
      minlength: [1, "El sexo no puede ser menor a 1"],
    },
    nac: {
      type: String,
      required: [true, "La nacionalidad es requerida"],
      trim: true,
      maxlength: [30, "La nacionalidad no puede ser mayor a 30"],
    },
    curp: {
      type: String,
      required: [true, "El CURP es requerido"],
      trim: true,
      maxlength: [18, "El CURP no puede ser mayor a 18"],
      minlength: [18, "El CURP no puede ser menor a 18"],
    },
    edo: {
      type: String,
      required: [true, "El estado de residencia es requerido"],
      trim: true,
      maxlength: [2, "El estado de residencia no puede ser mayor a 2"],
      minlength: [2, "El estado de residencia no puede ser menor a 2"],
    },
    mun: {
      type: String,
      required: [true, "El municipio de residencia es requerido"],
      trim: true,
    },
    loc: {
      type: String,
      required: [true, "La localidad de residencia es requerido"],
      trim: true,
    },
    tel: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El correo es requerido"],
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "El correo debe ser un correo valido",
      ],
    },
    password: {
      type: String,
      required: [true, "La contraseña es requerida"],
      trim: true,
      minlength: [8, "La contraseseña no puede ser menor a 8"],
    },
    code_access: {
      type: String,
      trim: true,
    },
    listaMedicos: {
      type: [{
        nombre: String,
        email: String,
        tel: String
      }]
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

pacienteSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

export default models.Paciente || model("Paciente", pacienteSchema);
