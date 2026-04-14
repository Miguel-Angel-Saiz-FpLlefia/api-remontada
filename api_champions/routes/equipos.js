import express from "express";
import { leerEquipos } from "../controllers/equipos.js";

const routerEquipos = express.Router();

routerEquipos.get("/", leerEquipos);

export default routerEquipos;
