console.log("Hello, World!");

import express from "express"; //
import equipoRoutes from "./routes/equipos.js";
import cors from "cors";

const app = express(); // Creamos nuestra app con express
// Contiene todos los metodes de express
app.use(cors());

//middleware para rutas
app.use("/api/equipos", equipoRoutes);

app.get("/", (req, res) => {
  res.send("api de la remontada");
  console.log("Petición recibida");
});

// app.get("/api/equipos", (req, res) => {
//   console.log("Petición recibida en api/equipos");
//   res.json({
//     mensaje: "Lista de equipos",
//     equipos: [],
//   });
// });

// Levantar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
