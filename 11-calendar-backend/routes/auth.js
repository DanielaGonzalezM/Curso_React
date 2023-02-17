/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  crearUrevalidarTokensuario,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();

router.post(
  "/",
  [
    check("email", "Email no válido").isEmail(),
    check("password", "El password debe ser de más de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorios").not().isEmpty(),
    check("email", "Email no válido").isEmail(),
    check("password", "El password debe ser de más de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.get("/renew", crearUrevalidarTokensuario);
module.exports = router;
