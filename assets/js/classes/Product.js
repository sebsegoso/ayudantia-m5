export class Product {
  constructor({ id, title, price, description, category, image, rating }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }

  createCardElement() {
    const card = document.createElement("article");
    card.className = "col-12 col-sm-6 col-md-4 col-lg-3 product-card";
    card.innerHTML = `
       <div class="card h-100 cursor-pointer">
            <img class="card-img-top h-100 object-fit-cover" src="${this.image}" alt="${this.title}" />
            <div class="card-body">
                <h3 class="card-title">${this.title}</h3>
                <p class="card-text">${this.price}</p>
            </div> 
       </div>   
    `;
    return card;
  }

  createModalContent() {
    return `
        <img class="img-fluid mb-3" src="${this.image}" alt="${this.title}" />
        <h4>${this.title}</h4>
        <p>${this.description}</p>
        <p><strong>Category:</strong> ${this.category}</p>
        <p><strong>Price:</strong> ${this.price}</p>
        <p><strong>Rating:</strong> ${this.rating.rate} (${this.rating.count})</p>
    `;
  }
}
