const $openMenu = document.getElementById("open-menu");
const $closeMenu = document.getElementById("close-menu");
const $filter = document.getElementById("filter");
const $scrollMenu = document.getElementById("menu");

$openMenu.addEventListener("click", function () {
  $scrollMenu.style.display = "block";
});
$closeMenu.addEventListener("click", function () {
  console.log("hallo");
});
$filter.addEventListener("click", function () {
  console.log("hallo");
});
