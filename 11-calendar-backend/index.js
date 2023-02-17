const express = require("express");

//Crea el servidor de express
const app = express();

//Rutas
app.get("/", (req, res) => {
  console.log("test");
  res.json({
    ok: true
  })
});

//Escuchar peticiones
app.listen(4000, () => {
  console.log(`servidor corriendo en puerto ${4000}`);
});
