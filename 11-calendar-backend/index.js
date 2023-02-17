const express = require("express");
require("dotenv").config();

//console.log(process.env);

//Crea el servidor de express
const app = express();

//Directorio público
app.use(express.static("public"));

//Lectura y parseo del doby
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en puerto ${process.env.PORT}`);
});
