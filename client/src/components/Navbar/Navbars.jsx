import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import { LinkContainer } from 'react-router-bootstrap';

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
        <Button onClick={navShow} className="menU" color="primary">
          <MenuIcon/>
          {/* <p>Click</p> */}
        </Button>
        <ul>
          <LinkContainer to='/dinodrawing'> <li> DinoDrawing</li> </LinkContainer>
          <LinkContainer to='/dinodrawing'> <li> DinoDrawing</li> </LinkContainer>
          <LinkContainer to='/dinodrawing'> <li> DinoDrawing</li> </LinkContainer>
          <LinkContainer to='/dinodrawing'> <li> DinoDrawing</li> </LinkContainer>
          <LinkContainer to='/dinodrawing'> <li> DinoDrawing</li> </LinkContainer>
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
