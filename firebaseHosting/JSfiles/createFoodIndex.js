const foodInfo = document.getElementById("foodInfo");

function createFoodIndex(
  id,
  name,
  location,
  ratings,
  menu,
  price,
  image,
  website
) {
  const foodInfoBox = document.createElement("div");
  foodInfoBox.setAttribute("class", "foodInfoBox");
  foodInfoBox.setAttribute("id", "foodInfoBox");

  const foodInfoBoxLink = document.createElement("a");
  foodInfoBoxLink.setAttribute("href", website);
  foodInfoBoxLink.setAttribute("target", "_blank");
  foodInfoBoxLink.setAttribute("class", "foodInfoBoxLink");
  foodInfoBoxLink.setAttribute("id", "foodInfoBoxLink");
  const foodInfoBoxImage = document.createElement("img");
  foodInfoBoxImage.setAttribute("src", image);
  foodInfoBoxImage.setAttribute("alt", "image of food");
  foodInfoBoxImage.setAttribute("class", "foodInfoBoxImage");
  foodInfoBoxImage.setAttribute("id", "foodInfoBoxImage");
  foodInfoBoxLink.appendChild(foodInfoBoxImage);
  foodInfoBox.appendChild(foodInfoBoxLink);

  const foodInfoBoxText = document.createElement("div");
  foodInfoBoxText.setAttribute("class", "foodInfoBoxText");
  foodInfoBoxText.setAttribute("id", "foodInfoBoxText");

  const foodInfoBoxTextName = document.createElement("h3");
  foodInfoBoxTextName.innerHTML = "Name of food:";
  const foodInfoBoxTextNamedesc = document.createElement("p");
  foodInfoBoxTextNamedesc.innerHTML = name;
  const foodInfoBoxTextLocation = document.createElement("h3");
  foodInfoBoxTextLocation.innerHTML = "Location of restaurant:";
  const foodInfoBoxTextLocationdesc = document.createElement("p");
  foodInfoBoxTextLocationdesc.innerHTML = location;
  const foodInfoBoxTextRating = document.createElement("h3");
  foodInfoBoxTextRating.innerHTML = "Rating:";
  const foodInfoBoxTextRatingdesc = document.createElement("p");
  foodInfoBoxTextRatingdesc.innerHTML = ratings + " stars";
  const foodInfoBoxTextMenu = document.createElement("h3");
  foodInfoBoxTextMenu.innerHTML = "Menu type:";
  const foodInfoBoxTextMenudesc = document.createElement("p");
  foodInfoBoxTextMenudesc.innerHTML = menu;
  const foodInfoBoxTextPrice = document.createElement("h3");
  foodInfoBoxTextPrice.innerHTML = "Approximate price:";
  const foodInfoBoxTextPricedesc = document.createElement("p");
  foodInfoBoxTextPricedesc.innerHTML = "₩" + price;

  foodInfoBoxText.append(foodInfoBoxTextName);
  foodInfoBoxText.append(foodInfoBoxTextNamedesc);
  foodInfoBoxText.append(foodInfoBoxTextLocation);
  foodInfoBoxText.append(foodInfoBoxTextLocationdesc);
  foodInfoBoxText.append(foodInfoBoxTextRating);
  foodInfoBoxText.append(foodInfoBoxTextRatingdesc);
  foodInfoBoxText.append(foodInfoBoxTextMenu);
  foodInfoBoxText.append(foodInfoBoxTextMenudesc);
  foodInfoBoxText.append(foodInfoBoxTextPrice);
  foodInfoBoxText.append(foodInfoBoxTextPricedesc);

  foodInfo.append(foodInfoBox);
  foodInfo.append(foodInfoBoxText);
}

function foodIndexing() {
  const keyVal = window.location.search;
  const urlParms = new URLSearchParams(keyVal);

  const IdParm = urlParms.get("id");
  const NameParm = urlParms.get("name");
  const LocationParm = urlParms.get("location");
  const RatingsParm = urlParms.get("ratings");
  let MenuParm = urlParms.get("menu");
  const PriceParm = urlParms.get("price");
  const ImageParm = urlParms.get("image");
  const WebsiteParm = urlParms.get("website");

  if (MenuParm.includes("한정식")) {
    MenuParm = "Korean";
  }
  if (MenuParm.includes("일식")) {
    MenuParm = "Japanese";
  }
  if (MenuParm.includes("중식")) {
    MenuParm = "Chinese";
  }
  if (MenuParm.includes("양식")) {
    MenuParm = "Western";
  }
  if (MenuParm.includes("카페")) {
    MenuParm = "Cafe, Dessert";
  }
  if (MenuParm.includes("분식")) {
    MenuParm = "Snacks";
  }
  if (MenuParm.includes("베이커리")) {
    MenuParm = "Bakery";
  }
  if (MenuParm.includes("치킨")) {
    MenuParm = "Chicken";
  }
  if (MenuParm.includes("바베큐")) {
    MenuParm = "BBQ";
  }
  if (MenuParm.includes("해산물")) {
    MenuParm = "Seafood";
  }
  if (MenuParm.includes("샐러드")) {
    MenuParm = "Salad";
  }
  if (MenuParm.includes("면")) {
    MenuParm = "Noodles";
  }
  if (MenuParm.includes("탕")) {
    MenuParm = "Soup";
  }

  createFoodIndex(
    IdParm,
    NameParm,
    LocationParm,
    RatingsParm,
    MenuParm,
    PriceParm,
    ImageParm,
    WebsiteParm
  );
}

foodIndexing();
