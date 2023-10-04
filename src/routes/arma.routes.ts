import { Router } from "express";
import { ArmaController } from "../controllers/arma.controller";

export const armaRoutes = () => {
  const router = Router();

  router.get("/lista", new ArmaController().list);
  router.post("/criar", new ArmaController().create);
  router.delete("/deletar/:id", new ArmaController().delete);

  return router;
};
