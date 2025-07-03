import userService from "../services/users.services.js";


const getAllUsers =(req,res)=>{
    const users = userService.getAllUsers()
    res.status(200).json(users)
};

<<<<<<< HEAD
const getUserById=(req, res )=>{
    const {id} = req.params;

    try {
         const user = userService.getUserById(id);
        console.log(user);

        if(!user){
            return res
            .status(404)
            .json({message: "Usuario no encontrado"});
        }
        
        res
        .status(200)
        .json({payload:user});
    } catch (error) {
         res
            .status(500)
            .json({message:"Error interno del servidor", error: error.message})
    }
}

const createUser = (req,res)=>{
    const {name,email} = req.body;
    try {
        if(!name || !email){
            return res.status(400).json({message:"Todos los campos son requeridos"});
        }
        const newUser = userService.createUser({name, email})
        res.status(201).json(newUser);
    } catch (error) {
         res
            .status(500)
            .json({message:"Error interno del servidor", error: error.message})
    }
   
}

const updateUser = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    try {
         if(!id){
            return res
            .status(400)
            .json({message:"El ID es requerido."});
        }

        const user = userService.updateUser(id, name);
        console.log(user);

        if(!user){
            return res
            .status(404)
            .json({message: "Usuario no encontrado"});
        }

           res.status(200).json({message:"Usuario Actualizado con éxito."});
    } catch (error) {
             res
            .status(500)
            .json({message:"Error interno del servidor", error: error.message})
    }
 
}


=======
const createUser = (req,res)=>{
    try {
          const {name,email} = req.body
    const newUser = userService.createUser({name, email})
    res.status(201).json(newUser)
    } catch (error) {
        res
        .status(500)
        .json({message:"Error interno del servidor", error:error.message})
    }
  
}

const updateUser = (req,res)=>{
    const {id} =req.params;
    const {name} = req.body;
    try {
        if(!id){
            return res
            .status(400)
            .json({message:"El ID es requerido"})
        }
        const user = userService.updateUser(id, name);

        if(!user){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res
        .status(200)
        .json({message:"Usuario actualizado con exito!", user:user})
        
    } catch (error) {
         res
        .status(500)
        .json({message:"Error interno del servidor", error:error.message})
    }

  

}
  const getUserById = (req,res)=>{
        const {id} =req.params;
        try {
             const user = userService.getUserById(id);

        if(!user){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res
        .status(200).json({message:"Usuario encontrado!", payload:user})
            
        } catch (error) {
             res
        .status(500)
        .json({message:"Error interno del servidor", error:error.message})
        }
    }
>>>>>>> f1bde4183a41ab8bf1f6a4c3efe41ae012cd00cb

export default {getAllUsers,createUser,updateUser, getUserById}