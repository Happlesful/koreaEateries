const form = document.getElementById("form");
const brandingImage = document.getElementById("branding-logo-image");
const brandingTitle = document.getElementById("branding-logo-title");
const queryRestaurant = document.getElementById("query-restaurant");
const queryLocation = document.getElementById("query-location");
const queryMenu = document.getElementById("query-menu");
let queryRatings = "0";

// Ids used in the navigation bar menu
const locationSeoul = document.getElementById("location-seoul");
const locationBusan = document.getElementById("location-busan");
const locationDaegu = document.getElementById("location-daegu");
const locationGwangju = document.getElementById("location-gwangju");
const menuKorean = document.getElementById("menu-korean");
const menuJapanese = document.getElementById("menu-japanese");
const menuChinese = document.getElementById("menu-chinese");
const menuWestern = document.getElementById("menu-western");
const menuCafe = document.getElementById("menu-cafe");
const menuSnacks = document.getElementById("menu-snacks");
const menuBakery = document.getElementById("menu-bakery");
const menuChicken = document.getElementById("menu-chicken");
const menuBBQ = document.getElementById("menu-bbq");
const ratings3 = document.getElementById("ratings-3");
const ratings4 = document.getElementById("ratings-4");
const ratings5 = document.getElementById("ratings-5");
const clearButton = document.getElementById("clear-button");

const itemsPerPage = 24;
let totalPages = 0;
let filteredItems = [];

async function searchAndDisplayItems() {
  const restaurants = await readMatJibData();
  // console.log(restaurants);
  // Filter the data based on the query
  // Filter the items based on both criteria
  filteredItems = restaurants.filter((item) => {
    const matchRestaurant = queryRestaurant.value
      ? item.Name.toLowerCase().includes(queryRestaurant.value.toLowerCase())
      : true;
    const matchLocation = queryLocation.value
      ? item.Location.toLowerCase().includes(queryLocation.value.toLowerCase())
      : true;
    const matchMenu = queryMenu.value
      ? item.Menu.toLowerCase().includes(queryMenu.value.toLowerCase())
      : true;
    const matchRatings = queryRatings
      ? parseFloat(item.Ratings) >= parseFloat(queryRatings)
      : true;
    return matchRestaurant && matchLocation && matchMenu && matchRatings;
  });

  //items in the array to be displayed
  // console.log(filteredItems);

  // // Display the filtered items in the output
  // main.innerHTML = "";
  // filteredItems.forEach((item) => {
  //   formatRestaurant(item);
  // });

  // Calculate total pages for pagination (global variable)
  totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  //reset the current page to 1 after searching (global variable)
  currentPage = 1;
  displayItems(currentPage);
  formatNavigationTag(
    queryRestaurant.value,
    queryLocation.value,
    queryMenu.value,
    queryRatings
  );
  formatPagination(currentPage);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentPage = 1;
  searchAndDisplayItems();
});

function initialRender() {
  searchAndDisplayItems();
  createPagination(currentPage);
}

let currentPage = 1;
initialRender();

function displayItems(pageNum) {
  length = filteredItems.length;
  totalPages = Math.ceil(length / itemsPerPage);
  const start = (pageNum - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = filteredItems.slice(start, end);

  main.innerHTML = "";
  paginatedItems.forEach((item) => {
    formatRestaurant(item);
  });
  formatPagination(pageNum);
}

document.addEventListener("DOMContentLoaded", function () {
  const previousButton = document.getElementById("previousButton");
  const nextButton = document.getElementById("nextButton");
  const pages = document.querySelectorAll(".page");

  previousButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayItems(currentPage, filteredItems);
      formatPagination(currentPage);
      console.log(currentPage);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayItems(currentPage, filteredItems);
      formatPagination(currentPage);
      console.log(currentPage);
    }
  });

  pages.forEach((page) => {
    page.addEventListener("click", () => {
      currentPage = parseInt(page.innerHTML);
      displayItems(currentPage, filteredItems);
      formatPagination(currentPage);
      console.log(currentPage);
    });
  });
});

brandingImage.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRestaurant.value = "";
  queryLocation.value = "";
  queryMenu.value = "";
  queryRatings = "0";
  searchAndDisplayItems();
});

brandingTitle.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRestaurant.value = "";
  queryLocation.value = "";
  queryMenu.value = "";
  queryRatings = "0";
  searchAndDisplayItems();
});

clearButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRestaurant.value = "";
  queryLocation.value = "";
  queryMenu.value = "";
  queryRatings = "0";
  searchAndDisplayItems();
});

locationSeoul.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryLocation.value = "서울";
  searchAndDisplayItems();
});

locationBusan.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryLocation.value = "부산";
  searchAndDisplayItems();
});

locationDaegu.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryLocation.value = "대구";
  searchAndDisplayItems();
});

locationGwangju.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryLocation.value = "광주";
  searchAndDisplayItems();
});

// const menuKorean = document.getElementById("menu-korean");
// const menuJapanese = document.getElementById("menu-japanese");
// const menuChinese = document.getElementById("menu-chinese");
// const menuWestern = document.getElementById("menu-western");
// const menuCafe = document.getElementById("menu-cafe");
// const menuSnacks = document.getElementById("menu-snacks");
// const menuBakery = document.getElementById("menu-bakery");
// const menuChicken = document.getElementById("menu-chicken");
// const menuBBQ = document.getElementById("menu-bbq");

menuKorean.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "한정식";
  searchAndDisplayItems();
});

menuJapanese.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "일식";
  searchAndDisplayItems();
});

menuChinese.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "중식";
  searchAndDisplayItems();
});

menuWestern.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "양식";
  searchAndDisplayItems();
});

menuCafe.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "카페";
  searchAndDisplayItems();
});

menuSnacks.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "분식";
  searchAndDisplayItems();
});

menuBakery.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "베이커리";
  searchAndDisplayItems();
});

menuChicken.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "치킨";
  searchAndDisplayItems();
});

menuBBQ.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryMenu.value = "바베큐";
  searchAndDisplayItems();
});

//Implement a query menu to the navigation menu bar and add the menus event listener
//Also implement a query ratings to and an event listener for it

// const ratings3 = document.getElementById("ratings-3");
// const ratings4 = document.getElementById("ratings-4");
// const ratings5 = document.getElementById("ratings-5");

ratings3.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRatings = "3";
  searchAndDisplayItems();
});

ratings4.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRatings = "4";
  searchAndDisplayItems();
});

ratings5.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  main.innerHTML = ""; // Clear the previous results
  queryRatings = "4.5";
  searchAndDisplayItems();
});
