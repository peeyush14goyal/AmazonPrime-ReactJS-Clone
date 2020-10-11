import React from "react";
import "./styles.css";
import PrimeIcon from "../../assets/amazonIcon.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {
  return (
    <div className="header">
      <div className="iconDiv">
        <img src={PrimeIcon} alt="" className="primeIcon" />
      </div>
      <div>
        <div className="navBarDiv">
          <div className="navLinks">Home</div>
          <div className="navLinks">TV Shows</div>
          <div className="navLinks">Movies</div>
          <div className="navLinks">Kids</div>
        </div>
      </div>
      
      <div className="headerAlignEnd">
        <div className="inputOuterDiv">
          <div className="inputDiv">
            <div>
            <SearchOutlinedIcon className="searchIcon" />
            </div>
            <div>
            <input type="text" className="inputBox" placeholder="Search" />
          </div>
          </div>
        </div>
        <div>
          <AccountCircleOutlinedIcon className="account" fontSize="large"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
