import repository from "../database/prisma.database";
import { Arma } from "../model/arma.model";

class ArmaService {
  public async listAll() {
    const data = await repository.arma.findMany();
    return data;
  }

  public async create(data: any) {
    const arma = new Arma(data.name, data.crimeId);

    const criaArma = await repository.arma.create({
      data: {
        name: arma.name,
        crimeId: arma.crime,
      },
    });

    return criaArma;
  }

  public async delete(id: string) {
    const arma = await repository.arma.findUnique({
      where: {
        id,
      },
    });

    await repository.arma.delete({
      where: {
        id,
      },
    });

    return arma;
  }
}

export default new ArmaService();
