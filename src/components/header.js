import { useState } from "react";
import "./header.scss";
import logo from "../Assets/Logo_ML.png";
import search_icon from "../Assets/ic_Search.png";

const HeaderBar = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    onChange(value)
    console.log("aca")
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onChange(value)
    }
  };
  return (
    <header>
      <nav>
        <div className="navBar_container">
          <img
            className="navbar_logo"
            alt="Logo Mercado libre"
            src={logo}
          ></img>
          <div className="navbar_input_container">
            <input
              className="navbar_input"
              placeholder="Nunca dejes de buscar"
              value={value}
              onKeyDown={handleKeyDown}
              onChange={(event) => setValue(event.target.value)}
            ></input>
            <button className="navbar_input-icon" onClick={handleClick}>
              <img src={search_icon}></img>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderBar;
