// services
import Product from '../models/product.model.js'
import db from "../config/dbProducts.js"

const getAll = async () => {
  return await db.getAllProducts();
};

const findById = async (id)=>{
  return await db.product.find((product)=>product.id === id);
}

const create = async(product)=>{
  const products= await db.getAllProducts();
  let id = `product${products.length + 1}`

  //const newUser = await new User ({id: user.id, name: user.name, email: user.email});
  const newProduct= {
    id,name:product.name,color:product.color
  }

  products.push(newProduct);
  await db.saveProducts(products);
  return newProduct;

}

export default { getAll, findById, create };