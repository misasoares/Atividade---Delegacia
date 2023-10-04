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

    public async delete (id:string){
        

        const criminosoCrime = await repository.crime.delete({
            where:{
                id
            }
        })

        return criminosoCrime
    }
}

export default new CriminosoService()