let rightarow = document.querySelector(".one_button");
rightarow.addEventListener("click", () => {
  history.go(-1);
  history.pushState({}, "", "index.html");
});
