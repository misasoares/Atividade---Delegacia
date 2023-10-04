import repository from "../database/prisma.database";
import { Crime } from "../model/crime.model";

class CrimeServie{

    public async listAll(){

        const data = await repository.crime.findMany({
            include:{
                Armas: true
            }
        })


        return data
    }

    public async create(data:any){
        const crime = new Crime(data.name, data.criminosoId)

        const criaCrime = await repository.crime.create({
            data:{
                name: crime.name,
                criminosoId: crime.criminosoId,
                // Armas: crime.arma
            },
            
        })
    
        return criaCrime
    }

    public async update (data:any){
        const crime = await repository.crime.findUnique({
            where:{
                id: data.id
            }
        })

        const updatedCrime = await repository.crime.update({
            where:{
                id: data.id
            },
            data:{
                name: data.name,
                criminosoId: data.criminosoId
            }
        })

        return updatedCrime
    }
}

export default new CrimeServie()