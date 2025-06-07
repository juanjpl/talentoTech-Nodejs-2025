
export async function deleteProductID(id) {
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    const response = await fetch(url , {
  method: 'DELETE'
});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
