const barsButon = document.querySelector("nav .icons .button");
const links = document.querySelector("nav ul");
const changeThemeBtn = document.querySelector("nav .icons .theme");

if (localStorage.getItem("light_mode") === "true") {
  document.body.classList.add("light-mode");
  changeThemeBtn.classList.replace("fa-sun", "fa-moon");
} else {
  document.body.classList.remove("light-mode");
  changeThemeBtn.classList.replace("fa-moon", "fa-sun");
}

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
// دالة بتراقب العناصر
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // لو العنصر دخل في نطاق رؤية المستخدم
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1 // يشتغل أول ما 10% من العنصر تظهر
});

// تحديد كل العناصر اللي واخدة كلاس reveal وبدء مراقبتها
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));