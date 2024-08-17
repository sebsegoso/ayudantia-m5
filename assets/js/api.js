// solo haremos las peticiones aquí
//

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al traer productos", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    return await response.json();
  } catch (error) {
    console.error(`Error al traer producto con id ${id}`, error);
    return null;
  }
};
