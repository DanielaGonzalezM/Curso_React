const { Schema, model, models } = require("mongoose");

const UsuarioShema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("Usuario", UsuarioShema);
