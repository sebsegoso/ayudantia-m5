import { fetchProductById, fetchProducts } from "./api.js";
import { Product } from "./classes/Product.js";

const showProductModal = async (id) => {
  const productData = await fetchProductById(id);
  if (!productData) return;

  const modalBody = document.querySelector(".modal-body");
  const product = new Product(productData);
  modalBody.innerHTML = product.createModalContent();

  const myModal = new bootstrap.Modal(document.getElementById("productModal"));
  myModal.show();
};

const showProducts = async () => {
  const products = await fetchProducts(); /* obtener productos de la API */

  // representar elementos en el dom
  const rowContainer = document.getElementById("product-list");

  products.forEach((productItem) => {
    const product = new Product(productItem);
    const productCard = product.createCardElement();

    productCard.addEventListener("click", () => {
      showProductModal(product.id);
    });

    rowContainer.appendChild(productCard);
  });
};

showProducts();
