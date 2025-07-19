// controller
import * as productService from '../services/product.service.js'


const getProducts = async (req, res) => {

    try {

        const products = await productService.getAllProducts(); 
        if( products.length === 0) return res.status(200).json({message:"No hay datos disponibles"});

        res.status(200).json({message: "Listado de productos", payload: products});
        
    } catch (error) {
        res
        .status(500)
        .json({message:"Error interno del servidor", error: error.message});
    }
};

const createProduct = async (req, res) => {
  const { name, color } = req.body;

  try {
    if (!name || !color) {
      return res.status(200).json({ message: "All fields are required" });
    }
    const newProduct= await  productService.createProduct({ name, color});
    console.log(newProduct);
    res.status(201).json({ message: "Product created", payload: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const seedProduct=(req, res)=>{

}

export default { getProducts, createProduct, seedProduct };
