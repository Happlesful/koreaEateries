const navigationMenuDropdown = document.getElementById(
  "navigationMenuDropdown"
);

function formatMenuDropdown() {
  const w3Bar = document.createElement("div");
  w3Bar.classList.add("w3-bar");

  // Formating for the first dropdown - Location
  const LocationDropdown = document.createElement("div");
  LocationDropdown.classList.add("w3-dropdown-hover");
  const LocationButton = document.createElement("button");
  LocationButton.classList.add("w3-button");
  LocationTitle = document.createElement("h3");
  LocationTitle.innerHTML = "Location";
  LocationButton.appendChild(LocationTitle);
  const LocationDropdownContent = document.createElement("div");
  LocationDropdownContent.classList.add(
    "w3-dropdown-content",
    "w3-bar-block",
    "w3-card-4"
  );
  LocationDropdownContent.setAttribute("id", "location-dropdown");
  const LocationDropdownContent1 = document.createElement("a");
  const LocationDropdownContent2 = document.createElement("a");
  const LocationDropdownContent3 = document.createElement("a");
  const LocationDropdownContent4 = document.createElement("a");
  LocationDropdownContent1.setAttribute("id", "location-seoul");
  LocationDropdownContent2.setAttribute("id", "location-busan");
  LocationDropdownContent3.setAttribute("id", "location-daegu");
  LocationDropdownContent4.setAttribute("id", "location-gwangju");
  LocationDropdownContent1.classList.add("w3-bar-item", "w3-button");
  LocationDropdownContent2.classList.add("w3-bar-item", "w3-button");
  LocationDropdownContent3.classList.add("w3-bar-item", "w3-button");
  LocationDropdownContent4.classList.add("w3-bar-item", "w3-button");
  LocationDropdownContent1.innerHTML = "Seoul";
  LocationDropdownContent2.innerHTML = "Busan";
  LocationDropdownContent3.innerHTML = "Daegu";
  LocationDropdownContent4.innerHTML = "Gwangju";
  LocationDropdownContent.append(
    LocationDropdownContent1,
    LocationDropdownContent2,
    LocationDropdownContent3,
    LocationDropdownContent4
  );
  LocationDropdown.append(LocationButton, LocationDropdownContent);
  w3Bar.appendChild(LocationDropdown);

  ///////////////////////////////////////////
  // Formating for the second dropdown - Menu
  const MenuDropdown = document.createElement("div");
  MenuDropdown.classList.add("w3-dropdown-hover");
  const MenuButton = document.createElement("button");
  MenuButton.classList.add("w3-button");
  MenuTitle = document.createElement("h3");
  MenuTitle.innerHTML = "Menu";
  MenuButton.appendChild(MenuTitle);
  const MenuDropdownContent = document.createElement("div");
  MenuDropdownContent.classList.add(
    "w3-dropdown-content",
    "w3-bar-block",
    "w3-card-4"
  );
  MenuDropdownContent.setAttribute("id", "menu-dropdown");
  const MenuDropdownContent1 = document.createElement("a");
  const MenuDropdownContent2 = document.createElement("a");
  const MenuDropdownContent3 = document.createElement("a");
  const MenuDropdownContent4 = document.createElement("a");
  const MenuDropdownContent5 = document.createElement("a");
  const MenuDropdownContent6 = document.createElement("a");
  const MenuDropdownContent7 = document.createElement("a");
  const MenuDropdownContent8 = document.createElement("a");
  const MenuDropdownContent9 = document.createElement("a");
  MenuDropdownContent1.setAttribute("id", "menu-korean");
  MenuDropdownContent2.setAttribute("id", "menu-japanese");
  MenuDropdownContent3.setAttribute("id", "menu-chinese");
  MenuDropdownContent4.setAttribute("id", "menu-western");
  MenuDropdownContent5.setAttribute("id", "menu-cafe");
  MenuDropdownContent6.setAttribute("id", "menu-snacks");
  MenuDropdownContent7.setAttribute("id", "menu-bakery");
  MenuDropdownContent8.setAttribute("id", "menu-chicken");
  MenuDropdownContent9.setAttribute("id", "menu-bbq");
  MenuDropdownContent1.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent2.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent3.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent4.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent5.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent6.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent7.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent8.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent9.classList.add("w3-bar-item", "w3-button");
  MenuDropdownContent1.innerHTML = "Korean";
  MenuDropdownContent2.innerHTML = "Japanese";
  MenuDropdownContent3.innerHTML = "Chinese";
  MenuDropdownContent4.innerHTML = "Western";
  MenuDropdownContent5.innerHTML = "Cafe/ Dessert";
  MenuDropdownContent6.innerHTML = "Snacks";
  MenuDropdownContent7.innerHTML = "Bakery";
  MenuDropdownContent8.innerHTML = "Chicken";
  MenuDropdownContent9.innerHTML = "BBQ";
  MenuDropdownContent.append(
    MenuDropdownContent1,
    MenuDropdownContent2,
    MenuDropdownContent3,
    MenuDropdownContent4,
    MenuDropdownContent5,
    MenuDropdownContent6,
    MenuDropdownContent7,
    MenuDropdownContent8,
    MenuDropdownContent9
  );
  MenuDropdown.append(MenuButton, MenuDropdownContent);
  w3Bar.appendChild(MenuDropdown);

  ///////////////////////////////////////////
  // Formating for the third dropdown - Ratings
  const RatingsDropdown = document.createElement("div");
  RatingsDropdown.classList.add("w3-dropdown-hover");
  const RatingsButton = document.createElement("button");
  RatingsButton.classList.add("w3-button");
  RatingsTitle = document.createElement("h3");
  RatingsTitle.innerHTML = "Ratings";
  RatingsButton.appendChild(RatingsTitle);
  const RatingsDropdownContent = document.createElement("div");
  RatingsDropdownContent.classList.add("w3-dropdown-content", "w3-bar-block"),
    "w3-card-4";
  RatingsDropdownContent.setAttribute("id", "ratings-dropdown");
  const RatingsDropdownContent1 = document.createElement("a");
  const RatingsDropdownContent2 = document.createElement("a");
  const RatingsDropdownContent3 = document.createElement("a");
  RatingsDropdownContent1.setAttribute("id", "ratings-3");
  RatingsDropdownContent2.setAttribute("id", "ratings-4");
  RatingsDropdownContent3.setAttribute("id", "ratings-5");
  RatingsDropdownContent1.classList.add("w3-bar-item", "w3-button");
  RatingsDropdownContent2.classList.add("w3-bar-item", "w3-button");
  RatingsDropdownContent3.classList.add("w3-bar-item", "w3-button");
  RatingsDropdownContent1.innerHTML = "3+ stars";
  RatingsDropdownContent2.innerHTML = "4+ stars";
  RatingsDropdownContent3.innerHTML = "4.5+ stars";
  RatingsDropdownContent.append(
    RatingsDropdownContent1,
    RatingsDropdownContent2,
    RatingsDropdownContent3
  );
  RatingsDropdown.append(RatingsButton, RatingsDropdownContent);
  w3Bar.appendChild(RatingsDropdown);

  navigationMenuDropdown.appendChild(w3Bar);

  clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clear-button");
  clearButton.classList.add("navigationBarClearButton");
  clearButton.innerHTML = "Clear";
  navigationMenuDropdown.appendChild(clearButton);
}

formatMenuDropdown();

{
  /* 
<div className="w3-bar">

  <div className="w3-dropdown-hover">
    <button className="w3-button">Location</button>
    <div
      className="w3-dropdown-content w3-bar-block w3-card-4"
      id="location-dropdown"
    >
      <a href="#" className="w3-bar-item w3-button" id="location-dropdown-1">
        Seoul
      </a>
      <a href="#" className="w3-bar-item w3-button" id="location-dropdown-2">
        Busan
      </a>
      <a href="#" className="w3-bar-item w3-button" id="location-dropdown-3">
        Daegu
      </a>
    </div>
  </div>


  <div className="w3-dropdown-hover">
    <button className="w3-button">Menu</button>
    <div
      className="w3-dropdown-content w3-bar-block w3-card-4"
      id="menu-dropdown"
    >
      <a href="#" className="w3-bar-item w3-button">
        Food1
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Food2
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Food3
      </a>
    </div>
  </div>


  <div className="w3-dropdown-hover">
    <button className="w3-button">Ratings</button>
    <div
      className="w3-dropdown-content w3-bar-block w3-card-4"
      id="ratings-dropdown"
    >
      <a href="#" className="w3-bar-item w3-button">
        &gt; 3 stars
      </a>
      <a href="#" className="w3-bar-item w3-button">
        &gt; 4 stars
      </a>
      <a href="#" className="w3-bar-item w3-button">
        = 5 stars
      </a>
    </div>
  </div>

</div>; */
}
