//persistencia en memoria
const users = [];

//por convension debe llamarse igual que el controlador
const getAllUsers = ()=>{
    return users;
}

const createUser = (user)=>{
    const newUser = {
        id: crypto.randomUUID(),
        name: user.name,
        email:user.email,
    }
    users.push(newUser);
    return newUser
}

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