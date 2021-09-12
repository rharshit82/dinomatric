import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbars = () => {
  const [Active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const onSearch = () => {
    setActive(!Active);
  };

  const navShow = () => {
    setShow(!show);
  };
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className={`Navbars ${show ? "ulsh" : ""}`}>
        <div className="containerss">
           <Button onClick={navShow} className="menU" color="primary">
             <MenuIcon/>
            </Button>

         <ul>
           {isAuthenticated? <li className="navlinks">
              <Link to="/humanblog">DinoBlog</Link>
            </li>: null}
            
            <li className="navlinks">
              <Link to="/dinodrawing">Dino Drawing</Link>
            </li>
            <li className="navlinks">
              <Link to="/chromedino">Chrome Dino</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinofun">DinoFun</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinofacts">DinoFacts</Link>
            </li>
            <li className="navlinks">
              <Link to="/dinoshowcase">Dino Showcase</Link>
            </li>
            <li className="navlinks">
              <Link to="/prehistoricquiz">Prehistoric Quiz</Link>
            </li>
           
         </ul>  

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
