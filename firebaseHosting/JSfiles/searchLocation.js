const queryLocation = document.getElementById("query-location");

function searchLocation(query) {
  fetch("http://127.0.0.1:8080/MangoPlateMatJib.json")
    .then((response) => response.json())
    .then((data) => {
      const restaurants = data.restaurants;
      // console.log(restaurants);
      // Filter the data based on the query
      const filteredData = restaurants.filter((item) => {
        const itemLocation = item.Location.toLowerCase();
        return itemLocation.includes(query.toLowerCase());
      });

      // console.log(filteredData);

      filteredData.forEach((item) => {
        formatRestaurant(item);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

//for searchLocation and searchRestaurant, we will filter through the result separately first and
//find the common restaurants between the two results

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //clears previous result to nothing if None
  main.innerHTML = "";
  //find the query

  //search.value is the query obtained from the search bar
  if (queryLocation.value) {
    //searchRestaurant and clear the search box
    searchLocation(queryLocation.value);
    queryLocation.value = "";
  }
});
