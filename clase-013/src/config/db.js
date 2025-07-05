
/*
const users = [{name:"Talento", email:"talentoTech@bue.edu.ar"}];
const products = [{id:1, name:"Yerba", precio:2500}];

export default {users , products};
*/

import fs from "fs/promises";

import {__dirname, join} from "../utils/index.js";

const usersFilePath = join(__dirname, 'data/users.json');

const getAllUsers = async()=>{

    try {

        const data = await fs.readFile(usersFilePath, 'utf-8');
        return JSON.parse(data);
        
    } catch (error) {
        console.log("Error al leer el archivo");
    }
}

const saveUsers = async(users)=>{
    try {
        await fs.writeFile(usersFilePath,JSON.stringify(users,null,2,'utf-8'))
    } catch (error) {
         console.log("Error al guardar el archivo");
    }
}

export default {getAllUsers,saveUsers};