const paginationContainer = document.getElementById("pagination-container");
const itemsPerPage = 50;
let totalPages = 0;

const renderItems = async () => {
  let uri = "http://127.0.0.1:8080/MangoPlateMatJib.json";
  const db = await fetch(uri);
  const data = await db.json();
  return data.restaurants;
};

async function displayItems(pageNum) {
  const items = await renderItems();
  length = items.length;
  totalPages = Math.ceil(length / itemsPerPage);
  const start = (pageNum - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  main.innerHTML = "";
  paginatedItems.forEach((item) => {
    formatRestaurant(item);
  });
}

let currentPage = 1;
displayItems(currentPage);
createPagination(currentPage);

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const pages = document.querySelectorAll(".page");

previousButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayItems(currentPage);
    formatPagination(currentPage);
    console.log(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayItems(currentPage);
    formatPagination(currentPage);
    console.log(currentPage);
  }
});

pages.forEach((page) => {
  page.addEventListener("click", () => {
    currentPage = parseInt(page.innerHTML);
    displayItems(currentPage);
    formatPagination(currentPage);
    console.log(currentPage);
  });
});
