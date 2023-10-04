import repository from "../database/prisma.database";
import { Criminoso } from "../model/criminoso.model";

class CriminosoService{

    public async listAll(){
        const data =  await repository.criminoso.findMany()
        return data
    }

    public async create(data:any){ //mudar tipagem e criar DTO
        const criminoso = new Criminoso(data.name, data.crime)

        const criaCriminoso = await repository.criminoso.create({
            data:{
                name: criminoso.name
            }
        })

    
        return criaCriminoso
    }
}

export default new CriminosoService()