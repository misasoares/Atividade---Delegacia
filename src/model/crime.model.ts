import { v4 as uuid } from "uuid";

export class Crime {
  private _id: string;

  constructor(private _name: string, private _criminosoId: string) {
    this._id = uuid();
  }

  public get id() {
    return this._id;
  }
  public get name() {
    return this._name;
  }

  public get criminosoId() {
    return this._criminosoId;
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
    };
  }
}
