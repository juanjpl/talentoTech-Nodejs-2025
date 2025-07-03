import {User} from "../models/users.model.js";
//persistencia en memoria
const users = [];

//por convension debe llamarse igual que el controlador
const getAllUsers = ()=>{
    return users;
}

const getUserById = (id)=>{
    return users.find((user)=> user.id ===id);
}

const createUser = (user)=>{
    const newUser = new User(user.name, user.email)
    users.push(newUser);
    return newUser
}

<<<<<<< HEAD
const updateUser = (id, name)=>{
   const userFound = getUserById(id);
   if(!userFound){
    return null;
   }
   userFound.name=name;
   return userFound;
}



export default {getAllUsers , createUser, updateUser,getUserById};
=======
const updateUser=(id, name)=>{
    const userFound = getUserById(id);
    if(!userFound)return null
    userFound.name = name;
    return userFound;
}

const getUserById= (id)=>{
    return users.find((user)=>user.id === id);
}


export default {getAllUsers , createUser, updateUser , getUserById};
>>>>>>> f1bde4183a41ab8bf1f6a4c3efe41ae012cd00cb
