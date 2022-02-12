import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

let elementsArray = [
  { id: "1", name: "Vivair" },
  { id: "2", name: "Avianca" },
  { id: "3", name: "American Airlines" },
  { id: "4", name: "Copa Airlines" },
  { id: "5", name: "Latam" },
];

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {elementsArray.map((el) => (
              <li className="na-item">
                <NavLink
                  exact
                  to="/form"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {el.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"} //"fa-regular fa-xmark" : "fa-regular fa-bars"}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}


//{swal(`Hello, welcome!, we know you want to travel in an ${el.name}, please fill out the following form:`)}
