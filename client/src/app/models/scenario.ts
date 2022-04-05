import {DataBase} from "./Base";


export class Scenario extends DataBase {
    constructor(public name:string='',public _id:string="")  {
      super("Scenario",_id);

    }public _id:string="";
}
