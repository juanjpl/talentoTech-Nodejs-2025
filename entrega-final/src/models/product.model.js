//products.model.js
import {db} from '../config/db.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    updateDoc,
    doc
}from 'firebase/firestore';

const productsCollection = collection(db, 'products');

//Metodo para buscar un producto por su ID

export const getProductById = async (id)=>{
    const productDoc = await getDoc(doc(productsCollection, id));

    if(productDoc.exists()){
        return productDoc.data();
    }else{
        return null
    }

}

//Metodo para obtener todos los productos
export const  getAllProducts= async()=>{

    try {
        const querySnapshot = await getDocs(productsCollection);
        const products=[];
        console.log(products)
        querySnapshot.forEach((doc)=>{ products.push({id:doc.id, ...doc.data()}) } );
    
        console.log("Lista de productos")
        console.log(products)
        return products;
   
        
    } catch (error) {
        throw new Error("Error", error.message);
    }
   
}

//Metodos para guardar un producto en el archivo JSON

export const saveProduct= async (name,color)=>{
   await addDoc(productsCollection, product);
}

//Metodo para eliminar un producto por su Id
export const deleteProduct = async(id)=>{
    await deleteDoc(doc(productsCollection, id))
}
