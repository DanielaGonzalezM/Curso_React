const express = require("express");
require("dotenv").config();

//console.log(process.env);

//Crea el servidor de express
const app = express();

//Directorio público
app.use(express.static("public"));

//Rutas
// app.get("/", (req, res) => {
//   console.log("test");
//   res.json({
//     ok: true
//   })
// });

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});
