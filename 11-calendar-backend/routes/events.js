/*
    Event Routes
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();
router.use(validarJWT);
//obtener eventos
router.get("/", getEventos);

//Crear un nuevo eventos
router.post(
  "/",
  [
    check("title", "el titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha inicio obligatoria").custom(isDate),
    check("end", "Fecha de finalización obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar eventos
router.put(
  "/:id",
  [
    check("title", "el titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha inicio obligatoria").custom(isDate),
    check("end", "Fecha de finalización obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

//Crear un nuevo eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
