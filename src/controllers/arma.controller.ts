import { Request, Response } from "express";
import armaService from "../services/arma.service";

export class ArmaController{

    public async list(req:Request, res:Response){
        const result = await armaService.listAll()
        return res.status(200).send(result)
    }

    public async create(req:Request, res:Response){
        try {
            const {name, crimeId} = req.body
            const result = await armaService.create({
                name, crimeId
            })

            return res.status(201).send(result)

        } catch (error) {
            return res.status(400).send(error)
        }
    }

    public async delete(req:Request, res:Response){
        try {
            const { id } = req.params
            const result = await armaService.delete(id)
            return res.status(200).send({message:"Arma excluída com sucesso.", data: result})
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}