import { Router } from "express";
import { CrimeController } from "../controllers/crime.controller";

export const crimeRoutes = () => {
  const router = Router();

  router.get("/lista", new CrimeController().list);
  router.get("/lista-armas/:id", new CrimeController().listaArmasDoCrime);

  router.post("/cria", new CrimeController().create);

  router.delete("/deletar/:id", new CrimeController().delete);

  return router;
};
