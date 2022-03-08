import React, {useState} from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import "./NavBar.css";

function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const airlines = useSelector((state) => state.airlines.items);
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>

            {airlines.map((airline) => (
              <li className= "nav-item">
                <Item
                  key={airline.id}
                  airline={airline}
                  onClick={handleClick}
                  activeClassName="active"
                  className="nav-links active"
                />
              </li>
            ))}
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;