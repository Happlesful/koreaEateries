const brandingImage = document.getElementById("branding-logo-image");
const brandingTitle = document.getElementById("branding-logo-title");
const backButton = document.getElementById("backButton");

brandingImage.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "../index.html";
});

brandingTitle.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "../index.html";
});

backButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = "../index.html";
});
