import { v4 as uuid} from 'uuid'

export class Criminoso {
    private _id: string

    constructor(private _name:string, private _crime:string){
        this._id = uuid()
    }

    public get id(){
        return this._id
    }
    public get name(){
        return this._name
    }
    public get crimeId(){
        return this._crime
    }

    public toJson(){
        return{
            id:this._id,
            name:this._name,
            crimeId:this._crime
        }
    }
}