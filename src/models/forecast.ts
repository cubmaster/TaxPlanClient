import  { Schema, Document } from 'mongoose';
import * as mongoose from "mongoose";



export interface IForecast extends Document {
    name:string,
    classname:string
}




const ForecastSchema = new Schema({
    name:  { type: String, required: true },
    classname: {type:String,default: "Scenario"}
});


export default () => { mongoose.model<IForecast>('forecast', ForecastSchema);}