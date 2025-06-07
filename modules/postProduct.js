
/*
Crear un Producto Nuevo:

Si ejecutas npm run start POST products <title> <price> <category>, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.

Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras
*/

const product = { title: 'New Product', price: 29.99 };


export async function postProduct(product) {
  const url = `https://fakestoreapi.com/products`;

  try {
    const response = await fetch(url , {
    method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(product)
})
.then(response => response.json())
  .then(data => console.log(data));

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

