const cart = document.querySelector(".cart");
const shopping = document.querySelector("nav .icons .shopping");
const productBox = document.querySelector(".cart .productInCart");
let cartProducts = [];
shopping.addEventListener("click", () => {
  cart.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-to-cart");
  const productsInCart = document.querySelector(".cart .productsInCart");
  const card = e.target.closest(".product-card");
  if (e.target.closest(".add-to-cart")) {
    let product = {
      id: btn.dataset.id,
      title: btn.dataset.title,
      img: btn.dataset.img,
      alt: btn.dataset.alt,
      price: btn.dataset.price,
    };

    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (cartProducts.find((item) => item.id === product.id)) {
      const productElement = document.getElementById(product.id);

      const numSpan = productElement.querySelector(".num");

      let currQuantity = parseInt(numSpan.textContent);

      numSpan.textContent = currQuantity + 1;

      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      productsInCart.innerHTML += addProductToCart(
        product.id,
        product.title,
        product.img,
        product.alt,
        product.price,
        1,
      );
    }
    cartProducts.push({ ...product, quantity: 1 });
  } else if (e.target.closest(".plus")) {
    const cartQuantity = e.target.closest(".quantity");

    const numSpan = cartQuantity.querySelector(".num");

    let currQuantity = parseInt(numSpan.textContent);

    currQuantity += 1;

    numSpan.textContent = currQuantity;
  } else if (e.target.closest(".minus")) {
    const cartQuantity = e.target.closest(".quantity");

    const numSpan = cartQuantity.querySelector(".num");

    let currQuantity = parseInt(numSpan.textContent);

    if (currQuantity > 1) {
      currQuantity -= 1;
      numSpan.textContent = currQuantity;
    } else {
      e.target.closest(".productInCart").remove();
    }
  }
});

let addProductToCart = (id, title, img, alt, price, quantity) => {
  return `
        <div class="productInCart" id="${id}">
          <div class="image">
            <img src="${img}" alt="${alt}" />
          </div>
          <div class="product-details">
            <h2 class="title">${title}</h2>
            <div class="price">
              <span data-price="${price}">$${price}</span>
            </div>
            <div class="quantity">
              <span class="minus"
                ><button><i class="fa-solid fa-minus minus"></i></button
              ></span>
              <span class="num">${quantity}</span>
              <span class="plus"
                ><button><i class="fa-solid fa-plus plus"></i></button
              ></span>
            </div>
          </div>
        </div>`;
};
