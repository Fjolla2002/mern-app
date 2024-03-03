import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import "../../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-col right">
            <NavLink to="/" className="logo">
              Kosova Hike
            </NavLink>
          </div>
          <div className="nav-col">
            <ul className="nav-links">
              <li className="nav-link">
                <NavLink>
                  Explore
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  About
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-col">
            <NavLink className="account">
              <FontAwesomeIcon icon={faCircleUser} /> Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar