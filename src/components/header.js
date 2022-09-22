import "./header.scss";
import logo from "../Assets/Logo_ML.png";
import search_icon from '../Assets/ic_Search.png';

import btnSearch from './btnsearch';

const HeaderBar = () => {
  return (
    <header>
      <nav>
        <div className="navBar_container">
          <img className="navbar_logo" alt="Logo Mercado libre" src={logo}></img>
          <div className="navbar_input_container">
       
            <input className="navbar_input" placeholder="Nunca dejes de buscar"></input>
            <button className="navbar_input-icon"onClick={btnSearch}><img src={search_icon}></img></button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderBar;
