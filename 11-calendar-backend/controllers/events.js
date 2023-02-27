const { response } = require("express");
const Evento = require("../models/Eventos");

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");

  res.json({
    ok: true,
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false, msg: "Errorr" });
  }
};

const actualizarEvento = async (req, res = response) => {
  const eventoID = req.params.id;
  const uid = req.uid;
  try {
    const evento = await Evento.findById(eventoID);
    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: "Evento no existe con ese id",
      });
    }
    if (evento.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: "Usuario no autorizado",
      });
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };
    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoID,
      nuevoEvento,
      { new: true }
    );

    res.json({ ok: true, msg: eventoActualizado });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el admin",
    });
  }
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
