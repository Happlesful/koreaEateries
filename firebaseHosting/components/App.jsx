import React from "react";
import ReactDOM from "react-dom";
import PillBadge from "./components/PillBadge";
import Tags from "./components/Tags";
import MenuDropDown from "./components/MenuDropDown";
import "https://www.w3schools.com/w3css/4/w3.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MenuDropDown />
      <PillBadge />
      <Tags />
    </>
  );
}

export default App;
