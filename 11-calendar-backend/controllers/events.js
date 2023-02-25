const { response } = require("express");
const Evento = require("../models/Eventos");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
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
const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizarEvento",
  });
};
const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
