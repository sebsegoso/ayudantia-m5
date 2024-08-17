import { fetchProducts } from "./api.js";
import { Product } from "./classes/Product.js";

const showProducts = async () => {
  const products = await fetchProducts(); /* obtener productos de la API */

  // representar elementos en el dom
  const rowContainer = document.getElementById("product-list");

  products.forEach((productItem) => {
    const product = new Product(productItem);
    const productCard = product.createCardElement();

    rowContainer.appendChild(productCard);
  });
};

showProducts();
