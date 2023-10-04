import { Request, Response } from "express";
import crimeService from "../services/crime.service";

export class CrimeController{

    public async list(req:Request, res:Response){
        const result = await crimeService.listAll()
        return res.status(200).send(result)
    }

    public async create(req:Request, res:Response){
        try {
            const {name, criminosoId, armas} = req.body

            const result = await crimeService.create({
                name, criminosoId, armas
                
            })

            return res.status(201).send(result)
        } catch (error) {
            return res.status(400).send(error)
        }
    }

    public async update(req:Request, res:Response){
        try {
            const { id } = req.params
            const { name, criminosoId } = req.body

            const result = await crimeService.update({
                id, name, criminosoId

                
            })

            return res.status(200).send({message:"Crime Atualizado com sucesso.", data:result})
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}