const equipos = [
  {
    id: 1,
    nombre: "Real Madrid",
  },
  {
    id: 2,
    nombre: "Barcelona",
  },
  {
    id: 3,
    nombre: "Bayern Munich",
  },
];
function leerEquipos(req, res) {
  console.log("Controlador equipos corriendo");
  res.json({
    mensaje: "Lista de equipos de controlador",
    equipos: equipos,
  });
}

export { leerEquipos };
