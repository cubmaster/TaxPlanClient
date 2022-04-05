import {DataBase} from "./Base";

export class ForeCast extends DataBase {

  constructor(public name:string='',public _id:string="")  {
    super("Forecast",_id);

  }
  public _id:string="";
}
