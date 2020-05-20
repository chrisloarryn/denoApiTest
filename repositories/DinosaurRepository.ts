import db from './../db/mongo.ts'
import IDinosaur from './../entities/Dinosaur.ts'

class DinosaurRepository {
    constructor(){}

    readonly dinosaurCollection = db.collection('dinosaurs');
    async find() {
        const dinosaurs = await this.dinosaurCollection.find();
        return dinosaurs;
    }
    
    async insertOne(dinosaur: IDinosaur) {
        const {$oid} = await this.dinosaurCollection.insertOne(dinosaur);
        return $oid;
    }
}

export default DinosaurRepository;