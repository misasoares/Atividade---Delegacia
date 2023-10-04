import { Router } from "express"
import { CrimeController } from "../controllers/crime.controller"

export const crimeRoutes = ()=>{
    const router = Router()

    router.get('/lista', new CrimeController().list)

    router.post('/cria', new CrimeController().create)

    router.put('/atualizar/:id', new CrimeController().update)

    return router
}