/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const {
  crearUsuario,
  loginUsuario,
  crearUrevalidarTokensuario,
} = require("../controllers/auth");
const router = Router();

router.post("/", crearUsuario);

router.post("/new", loginUsuario);

router.get("/renew", crearUrevalidarTokensuario);
module.exports = router;
