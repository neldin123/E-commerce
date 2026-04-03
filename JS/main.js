const barsButon = document.querySelector("nav .icons .button");
const links = document.querySelector("nav ul");
const changeThemeBtn = document.querySelector("nav .icons .theme");

changeThemeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    changeThemeBtn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("light_mode", "true");
  } else {
    changeThemeBtn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("light_mode", "false");
  }
});
