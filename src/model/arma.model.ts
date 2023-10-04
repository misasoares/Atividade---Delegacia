import { v4 as uuid} from 'uuid'

export class Arma {
    private _id: string
    constructor(private _name:string, private _crimeId:string){
        this._id=  uuid()
    }

    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

    public get crime(){
        return this._crimeId
    }

    public toJson(){
        return {
            id:this._id,
            name: this._name,
            crime:this._crimeId
        }
    }
}