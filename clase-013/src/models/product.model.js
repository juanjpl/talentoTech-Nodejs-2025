//products.model.js
import {db} from '../data/data.js';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
}from 'firebase/firestore';

const productsCollection = collection(db, 'products');

//Metodo para buscar un producto por su ID

async function  getProductById(id){
    const productDoc = await getDoc(doc(productsCollection, id));

    if(productDoc.exists()){
        return productDoc.data();
    }else{
        return null
    }

}

//Metodo para obtener todos los productos
async function getAllProducts(){
    const querySnapshot = await getDocs(productsCollection);
    const products=[];
    querySnapshot.forEach((doc)=>{
        products.push({id:doc.id, ...doc.data()});
    });
    return products;
}

//Metodos para guardar un producto en el archivo JSON

async function saveProduct(name,color){
   await addDoc(productsCollection, product);
}

//Metodo para eliminar un producto por su Id
async function deleteProduct(id){
    await deleteDoc(doc(productsCollection, id))
}

export default {getProductById, getAllProducts, saveProduct, deleteProduct}