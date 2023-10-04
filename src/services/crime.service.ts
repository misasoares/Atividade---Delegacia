import repository from "../database/prisma.database";
import { Crime } from "../model/crime.model";

class CrimeServie {
  public async listAll() {
    const data = await repository.crime.findMany({
      include: {
        Armas: true,
      },
    });

    return data;
  }

  public async create(data: any) {
    const crime = new Crime(data.name, data.criminosoId);

    const criaCrime = await repository.crime.create({
      data: {
        name: crime.name,
        criminosoId: crime.criminosoId,
      },
    });

    return criaCrime;
  }

  public async delete(data: string) {
    const deleteCrime = await repository.crime.delete({
      where: {
        id: data,
      },
    });

    return deleteCrime;
  }

  public async listArmasDoCrime(id: string) {
    const crime = await repository.crime.findUnique({
      where: {
        id,
      },
      include: {
        Armas: true,
      },
    });

    return crime;
  }
}

export default new CrimeServie();
