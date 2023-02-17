/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("test");
  res.json({
    ok: true,
  });
});

module.exports = router;
