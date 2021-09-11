import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import {Link} from 'react-router-dom';
const Navbars = () => {
  const [Active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const onSearch = () => {
    setActive(!Active);
  };

  const navShow = () => {
    setShow(!show);
  };

  return (
    <div className={`Navbars ${show ? "ulsh" : ""}`}>
      <div className="containerss">
        <div>
        <Button onClick={navShow} className="menU" color="primary">
          <MenuIcon/>
        </Button>
        </div>    
        <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dinodrawing">DinoDrawing</Link>
            </li>
            <li>
              <Link to="/chromedino">ChromeDino</Link>
            </li>
            <li>
              <Link to="/dinofun">DinoFun</Link>
            </li>
          </ul>
          </div>  
        <div className={`searchBox ${Active ? "inputb" : ""}`}>
          <i className="searchIcon" onClick={onSearch}>
            <SearchIcon />
          </i>
          <input type="text" placeholder="Search Google or type URL" />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
