import fs from 'fs'
import path from 'path'
import scenario from "../models/scenario";
import role from "../models/role";
import user from "../models/user";
import forecast from "../models/forecast";



export function initModules(){
    forecast();
    scenario();
    user();
    role();


}
