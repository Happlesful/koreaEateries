const main = document.getElementById("section-restaurant");
const form = document.getElementById("form");
const queryRestaurant = document.getElementById("query-restaurant");

function renderRestaurant() {
  fetch("http://127.0.0.1:8080/MangoPlateMatJib.json")
    .then((response) => response.json())
    .then((data) => {
      const restaurants = data.restaurants;
      // console.log(restaurants);
      restaurants.forEach((item) => {
        formatRestaurant(item);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

function searchRestaurant(query) {
  fetch("http://127.0.0.1:8080/MangoPlateMatJib.json")
    .then((response) => response.json())
    .then((data) => {
      const restaurants = data.restaurants;
      // console.log(restaurants);
      // Filter the data based on the query
      const filteredData = restaurants.filter((item) => {
        const itemName = item.Name.toLowerCase();
        return itemName.includes(query.toLowerCase());
      });

      // console.log(filteredData);

      filteredData.forEach((item) => {
        formatRestaurant(item);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

window.addEventListener("DOMContentLoaded", renderRestaurant());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //clears previous result to nothing if None
  main.innerHTML = "";
  //find the query

  //search.value is the query obtained from the search bar
  if (queryRestaurant.value) {
    //searchRestaurant and clear the search box
    searchRestaurant(queryRestaurant.value);
    queryRestaurant.value = "";
  }
});
