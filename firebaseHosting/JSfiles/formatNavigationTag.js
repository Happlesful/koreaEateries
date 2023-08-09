{
  /* <p>Tags: <span class="w3-tag w3-teal">New!</span></p>
    <span class="badge rounded-pill text-bg-info">Info</span> */
}

const navigationTag = document.getElementById("navigationTag");

function formatNavigationTag(restaurant, location, menu, ratings) {
  navigationTag.innerHTML = "";

  const navigationTagContainer = document.createElement("p");
  const tagRestaurant = document.createElement("span");
  const tagLocation = document.createElement("span");
  const tagMenu = document.createElement("span");
  const tagRatings = document.createElement("span");

  tagRestaurant.classList.add("badge", "rounded-pill", "text-bg-restaurant");
  tagLocation.classList.add("badge", "rounded-pill", "text-bg-location");
  tagMenu.classList.add("badge", "rounded-pill", "text-bg-menu");
  tagRatings.classList.add("badge", "rounded-pill", "text-bg-ratings");

  tagRestaurant.setAttribute("id", "tag-restaurant");
  tagLocation.setAttribute("id", "tag-location");
  tagMenu.setAttribute("id", "tag-menu");
  tagRatings.setAttribute("id", "tag-ratings");

  if (restaurant != "" || location != "" || menu != "" || ratings != "0") {
    navigationTagContainer.innerHTML = "Tags: ";
  }

  if (restaurant != "") {
    tagRestaurant.innerHTML = restaurant;
    navigationTagContainer.append(tagRestaurant);
  }

  if (location != "") {
    if (location === "서울") {
      location = "Seoul";
    }
    if (location === "부산") {
      location = "Busan";
    }
    if (location === "대구") {
      location = "Daegu";
    }
    if (location === "광주") {
      location = "Gwangju";
    }
    tagLocation.innerHTML = location;
    navigationTagContainer.append(tagLocation);
  }

  if (menu != "") {
    if (menu === "한정식") {
      menu = "Korean";
    }
    if (menu === "일식") {
      menu = "Japanese";
    }
    if (menu === "중식") {
      menu = "Chinese";
    }
    if (menu === "양식") {
      menu = "Western";
    }
    if (menu === "카페") {
      menu = "Cafe/ Dessert";
    }
    if (menu === "분식") {
      menu = "Snacks";
    }
    if (menu === "베이커리") {
      menu = "Bakery";
    }
    if (menu === "치킨") {
      menu = "Chicken";
    }
    if (menu === "바베큐") {
      menu = "BBQ";
    }
    tagMenu.innerHTML = menu;
    navigationTagContainer.append(tagMenu);
  }

  if (ratings != "0") {
    tagRatings.innerHTML = "> " + ratings + " stars";
    navigationTagContainer.append(tagRatings);
  }

  navigationTag.append(navigationTagContainer);
}
