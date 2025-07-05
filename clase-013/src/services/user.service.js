// services
// import ... from '../models/user.model.js'

import db from "../config/db.js"

const getAll = () => {
  return db.users;
};

const findById = (id)=>{
  return users.find(user.id === id);
}

export default { getAll, findById };
