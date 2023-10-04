import { Request, Response } from "express";
import criminosoService from "../services/criminoso.service";

export class CriminosoController {

    public async list(req:Request, res:Response){
        const result = await criminosoService.listAll()
        return res.status(200).send(result)
    }


    public async create(req:Request, res:Response){
        try {
            const {name} = req.body
            const result = await criminosoService.create({
                name
            })

            return res.status(201).send(result)
            
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}