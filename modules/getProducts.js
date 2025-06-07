/*
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
*/

export async function getProducts() {
  const url = 'https://fakestoreapi.com/products';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

