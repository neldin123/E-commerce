// select button
const barsButon = document.querySelector("nav .icons .button");
// select links
const links = document.querySelector("nav ul");
// select change theme btn
const changeThemeBtn = document.querySelector("nav .icons .theme");

barsButon.addEventListener("click", (e) => {
  e.preventDefault();
  links.classList.toggle("open");
  if (links.classList.contains("open")) {
    barsButon.classList.replace("fa-bars", "fa-x");
  } else {
    barsButon.classList.replace("fa-x", "fa-bars");
  }
});
changeThemeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    changeThemeBtn.classList.replace("fa-sun", "fa-moon");
  } else {
    changeThemeBtn.classList.replace("fa-moon", "fa-sun");
  }
});
