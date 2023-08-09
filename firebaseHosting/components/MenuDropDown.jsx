const MenuDropDown = () => {
  return (
    <div className="w3-bar">
      <div className="w3-dropdown-hover">
        <button className="w3-button">Location</button>
        <div
          className="w3-dropdown-content w3-bar-block w3-card-4"
          id="location-dropdown"
        >
          <a
            href="#"
            className="w3-bar-item w3-button"
            id="location-dropdown-1"
          >
            Seoul
          </a>
          <a
            href="#"
            className="w3-bar-item w3-button"
            id="location-dropdown-2"
          >
            Busan
          </a>
          <a
            href="#"
            className="w3-bar-item w3-button"
            id="location-dropdown-3"
          >
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
    </div>
  );
};
