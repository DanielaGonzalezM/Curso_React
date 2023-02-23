const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  let usuario = await Usuario.findOne({ email: email });
  if (usuario) {
    return res.status(400).json({
      ok: false,
      msg: "Usuario ya existe con ese correo",
    });
  }
  try {
    usuario = new Usuario(req.body);
    //Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      msg: "registro exitoso",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "password incorrecto",
      });
    }

    // token

    res.status(200).json({
      ok: true,
      msg: "login correcto",
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error",
    });
  }
};

const crearUrevalidarTokensuario = (req, res = response) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  crearUrevalidarTokensuario,
};
