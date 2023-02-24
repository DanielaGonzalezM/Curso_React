const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");
//console.log(process.env);

//Crea el servidor de express
const app = express();

//Base de datos
dbConnection();

// CORS
app.use(cors());
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
