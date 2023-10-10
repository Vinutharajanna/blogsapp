import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import logo from '../images/logo.png';
import {useStateValue} from '../StateProvider';



function NavBar() {
  const [{blogs} ]=useStateValue();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <div className="nav-icon" onClick={handleClick}>
            {click ? <ClearIcon/> : <DehazeIcon/>}
          </div>
          <NavLink exact="true" to="/" className="nav-logo">
            <img src={logo} alt="logo" className='img__AmazonLogo'/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/post-blog"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="header__option">
                    <span className="header__optionLineOne">Post a</span>
                    <span className="header__optionLineTwo">Blog</span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="header__option">
                    <span className="header__optionLineOne">Home</span>
                    <span className="header__optionLineTwo">Page</span>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                <div className="header__option">
                    <span className="header__optionLineOne blogs__count">{blogs?.length}</span>
                    <span className="header__optionLineTwo">{blogs?.length>1 ? "Blogs" : "Blog"}</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;