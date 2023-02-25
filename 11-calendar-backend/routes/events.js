/*
    Event Routes
    host + /api/events
*/

const { Router } = require("express");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();
router.use(validarJWT);
//obtener eventos
router.get("/", getEventos);

//Crear un nuevo eventos
router.post("/", crearEvento);

//Actualizar eventos
router.put("/:id", actualizarEvento);

//Crear un nuevo eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
