// controller
import productService from '../services/product.service.js'

const getProducts = (req, res) => {

    try {

        const products = productService.getAll();
        if( products.length === 0) return res.status(200).json({message:"No hay datos disponibles"});

        res.status(200).json({message: "Listado de usuarios", payload: products});
        
    } catch (error) {
        res
        .status(500)
        .json({message:"Error interno del servidor", error: error.message});
    }
};

export default { getProducts };
