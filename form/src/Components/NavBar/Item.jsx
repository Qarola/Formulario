import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAirlineAction } from "../../redux/actions/index";
import "./NavBar.css";

function Item({ airline }) {
  
  //redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setAirline = () => {
    try {
      dispatch(setAirlineAction(airline));
      navigate("/form");
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <div>
        <div>
            <div className="nav-item">
              <li
               onClick={setAirline}
              >
                {airline.name}
              </li>
            </div>
        </div>
      </div>
    </>
  );
}

export default Item;
