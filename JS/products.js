const recentProducts = document.querySelector(
  ".recent-products .card-container",
);
const productsContainer = document.querySelector(
  ".products-container .products-cards",
);
const catBtns = document.querySelectorAll(
  ".products-container .categories button",
);
const searchBar = document.querySelector("nav .search");
const limitHome = 4;
const limitProducts = 100;
let allData = [];

async function fetchingData() {
  try {
    const response = await fetch("products.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    const data = json.recent_products || [];
    allData = json.recent_products || [];
    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }

    const currentPath = window.location.pathname;
    if (currentPath === "/index.html" || currentPath === "/") {
      displayProducts(data, 1, recentProducts);
    } else if (currentPath === "/products.html") {
      displayProducts(data, 1, productsContainer); // Assuming same container; adjust if different
    }
  } catch (error) {
    console.error("An Error Happened: ", error);
  }
}

function displayProducts(data, page, container) {
  if (!container) {
    console.error("Container not found");
    return;
  }

  const currentPath = window.location.pathname;
  let limit;
  if (currentPath === "/index.html" || currentPath === "/") {
    limit = limitHome;
  } else if (currentPath === "/products.html") {
    limit = limitProducts;
  } else {
    console.error("Invalid path");
    return;
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentProducts = data.slice(startIndex, endIndex);

  container.innerHTML = currentProducts
    .map((product) => {
      const specsHTML = Object.entries(product.specifications || {})
        .map(([key, value]) => {
          const specIcons = {
            power: "fa-bolt",
            wattage: "fa-bolt",
            vram: "fa-memory",
            speed: "fa-gauge-high",
            threads: "fa-microchip",
            latency: "fa-clock",
            radiator_size: "fa-fan",
            screen_type: "fa-desktop",
            socket: "fa-circle-dot",
            form_factor: "fa-ruler-combined",
            refresh_rate: "fa-wave-square",
            resolution: "fa-expand",
          };
          const icon = specIcons[key] || "fa-info-circle";
          return `
            <div class="spec-item">
              <i class="fa-solid ${icon}"></i>
              <span>${value}</span>
            </div>`;
        })
        .join("");

      return `
        <div class="product-card" id="${product.id}">
          <div class="image">
            <img src="${product.image_url}" alt="${product.title}" loading="lazy" />
          </div>
          <div class="product-details">
            <div class="category">
              <span>${product.category}</span>
              <div>
                <i class="fa-solid fa-star"></i>
                <span>${product.rating}</span>
              </div>
            </div>
            <h2 class="title">${product.title}</h2>
            <div class="details">
              ${specsHTML}
            </div>
            <div class="price">
              <span data-price="${product.price}">${product.currency}${product.price.toFixed(2)}</span>
              <button class="add-to-cart"
                data-id="${product.id}"
                data-title="${product.title}"
                data-price="${product.price}"
                data-img="${product.image_url}"
                data-alt="${product.title}">
                  <span><i class="fa-solid fa-cart-shopping"></i></span>
                  <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

searchBar.addEventListener("input", (e) => {
  const value = e.currentTarget.value.toLowerCase();

  const filtered = allData.filter((product) => {
    return (
      product.title.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    );
  });
  displayProducts(filtered, 1, productsContainer);
});

catBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedCat = btn.dataset.cat;

    const filtered = allData.filter((product) => {
      return product.category.startsWith(selectedCat);
    });
    displayProducts(filtered, 1, productsContainer);
  });
});

fetchingData();
