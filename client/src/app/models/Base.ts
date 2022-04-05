
export  interface  IBase {
  classname: string;
  _id: string ;

}

export class DataBase implements  IBase{
  constructor(public classname:string){};
  public _id:string="";
}
