import React from "react";
import "./styles.scss";
import PrimeIcon from "../../assets/amazonIcon.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="iconDiv">
        <img src={PrimeIcon} alt="" className="primeIcon" />
      </div>
      <div>
        <div className="navBarDiv">
          <div className="navLinks">
            <a href="/">
              <div className="textLink">Home</div>
            </a>
          </div>
          <div className="navLinks">
            <Link to={`/tvShows`}>
              <div className="textLink">TV Shows</div>
            </Link>
          </div>
          <div className="navLinks">
            <a href="/movies">
              <div className="textLink">Movies</div>
            </a>
          </div>
          {/* <div className="navLinks">
            <a href="/">
              <div className="textLink">Kids</div>
            </a>
          </div> */}
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
          <AccountCircleOutlinedIcon className="account" fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
