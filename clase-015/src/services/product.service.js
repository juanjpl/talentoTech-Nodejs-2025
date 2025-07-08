// services
import * as productService from "../models/product.model.js";

export const getAllProducts = async () => {
  return await productService.getAllProducts();
};

export const getProductById = async (id)=>{
  return await productService.getProductById(id);
}

export const createProduct = async(productData)=>{
 const {name, color} = productData;
 return await productService.saveProduct(name,color);
}

export const deleteProduct = async (id)=>{
  return await productService.deleteProduct(id);
}

