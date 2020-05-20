import DinosaurRepository from './../repositories/DinosaurRepository.ts';
import IDinosaur from './../entities/Dinosaur.ts';

class DinosaurService {

    constructor(){}

    readonly dinosaurRepository = new DinosaurRepository();

    getDinosaurs = async () => {
        return this.dinosaurRepository.find()
    }

    createDinosaur = async (dinosaur: IDinosaur) => {
        return await this.dinosaurRepository.insertOne(dinosaur);
    }
}

export default DinosaurService;