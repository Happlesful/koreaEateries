const main = document.getElementById("section-restaurant");

function formatRestaurant(item) {
  const div_row = document.createElement("div");
  div_row.setAttribute("class", "row");
  const div_column = document.createElement("div");
  div_column.setAttribute("class", "column");
  const div_card = document.createElement("div");
  div_card.setAttribute("class", "card");
  const image = document.createElement("img");
  image.setAttribute("class", "restaurant");
  image.setAttribute("id", "image");
  const title = document.createElement("h3");
  title.setAttribute("id", "title");
  const link = document.createElement("a");
  const loc = document.createElement("p");

  image.src = item.Image;
  link.appendChild(image);
  link.href =
    "../foodIndex.html?id=" +
    `${item.Id}` +
    "&name=" +
    `${item.Name}` +
    "&location=" +
    `${item.Location}` +
    "&ratings=" +
    `${item.Ratings}` +
    "&menu=" +
    `${item.Menu}` +
    "&price=" +
    `${item.Price}` +
    "&image=" +
    `${item.Image}` +
    "&website=" +
    `${item.Website}`;
  title.innerHTML = `${item.Name}` + " " + "(" + `${item.Ratings}` + ")";
  loc.innerHTML = `${item.Location}`;
  div_card.appendChild(link);
  div_card.appendChild(title);
  div_card.appendChild(loc);
  div_column.appendChild(div_card);
  div_row.appendChild(div_column);

  main.appendChild(div_row);
}
