const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  // change theme toggle button icon
  if (document.body.classList.contains("dark-theme")) {
    themeToggle.classList.replace("bxs-moon", "bxs-sun");
  } else {
    themeToggle.classList.replace("bxs-sun", "bxs-moon");
  }
});

