// services
import * as productService from "../models/product.model.js"

const getAllProducts = () => {
  return  productService.getAllProducts();
};

const getProductById = async (id)=>{
  return await productService.getProductById(id);
}

const createProduct = async(productData)=>{
 const {name, color} = productData;
 return await productService.saveProduct(name,color);
}

const deleteProduct = async (id)=>{
  return await productService.deleteProduct(id);
}

export default {getAllProducts, getProductById, createProduct, deleteProduct};