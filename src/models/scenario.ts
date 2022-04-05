import  { Schema, Document } from 'mongoose';
import * as mongoose from "mongoose";



export interface IScenario extends Document {
    name:string,
    classname:string
}




const ScenarioSchema = new Schema({
    name:  { type: String, required: true },
    classname: {type:String,default: "Scenario"}
});


export default () => { mongoose.model<IScenario>('scenario', ScenarioSchema);}