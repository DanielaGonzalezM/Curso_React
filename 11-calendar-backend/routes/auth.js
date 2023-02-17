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

router.post("/", loginUsuario);

router.post("/new", crearUsuario);

router.get("/renew", crearUrevalidarTokensuario);
module.exports = router;
