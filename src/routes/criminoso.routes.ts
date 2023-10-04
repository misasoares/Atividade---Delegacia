import { Router } from "express"
import { CriminosoController } from "../controllers/criminoso.controller"

export const criminosoRoutes = ()=>{
    const router = Router()

    router.get('/lista', new CriminosoController().list)
    router.post('/criar', new CriminosoController().create)
    router.delete('/deletar/:id', new CriminosoController().delete)
   

    return router
}