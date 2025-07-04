// services
// import ... from '../models/user.model.js'

import users from "../config/db.js"

const getAll = () => {
  return users;
};

export default { getAll };
