const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
