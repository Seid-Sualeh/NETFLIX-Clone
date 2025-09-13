import React from "react";
import "./Header.css";
import image from '../../assets/images//download (2).png';
import SearchIcon  from "@mui/icons-material/SearchOutlined";
import NotificationsNameIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArowDropDownIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBoxOutlined";
function Header() {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header_left">
          <ul>
            <li> <img src={image} className="logo-image" alt="netflix logo" /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
          
            <li><SearchIcon /></li>
            <li><NotificationsNameIcon/> </li>
            <li><AccountBoxIcon /></li>
            <li><ArowDropDownIcon /></li> 
          </ul>
         </div>
      </div>
    </div>
  );
}

export default Header;
