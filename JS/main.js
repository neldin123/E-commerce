const changeThemeBtn = document.querySelector("nav .icons .theme");
const isLight = localStorage.getItem("light_mode") === "true";
const categoriesBtns = document.querySelectorAll(
  ".products-container .categories button",
);
const savedCategory = localStorage.getItem("active_category");
const savedRange = localStorage.getItem("range_value");
const minRangeText = document.querySelector("span.min-range");
const pagesBtns = document.querySelectorAll(".pages button.page");
let priceRange = document.querySelector("#range");

document.body.classList.toggle("light-mode", isLight);
changeThemeBtn.classList.toggle("fa-sun", isLight);
changeThemeBtn.classList.toggle("fa-moon", !isLight);

changeThemeBtn.addEventListener("click", () => {
  const isNowLight = document.body.classList.toggle("light-mode");

  changeThemeBtn.classList.toggle("fa-moon", isNowLight);
  changeThemeBtn.classList.toggle("fa-sun", !isNowLight);

  localStorage.setItem("light_mode", isNowLight);
});

if (savedCategory) {
  categoriesBtns.forEach((cat) => {
    cat.classList.toggle("active", cat.dataset.cat === savedCategory);
  });
}

categoriesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    categoriesBtns.forEach((btn) => btn.classList.remove("active"));

    e.currentTarget.classList.add("active");

    localStorage.setItem(
      "active_category",
      e.currentTarget.getAttribute("data-cat"),
    );
  });
});

if (savedRange) {
  priceRange.value = savedRange;
  minRangeText.textContent = `$${savedRange}`;
}

priceRange.addEventListener("input", function () {
  localStorage.setItem("range_value", this.value);
  minRangeText.textContent = `$${priceRange.value}`;
});

function resetFilters() {
  localStorage.removeItem("active_category");
  localStorage.removeItem("range_value");

  categoriesBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  priceRange.value = 99;

  minRangeText.textContent = `$99`;

  document
    .querySelectorAll('.manufacturer input[type="checkbox"]')
    .forEach((input) => {
      input.checked = false;
    });
}
pagesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    pagesBtns.forEach((btn) => btn.classList.remove("active"));

    e.currentTarget.classList.add("active");
  });
});
