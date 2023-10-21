import React, { useState,useEffect } from "react";
import Routers from "../../routers/Routers";
import "./Header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import usericon from "../../../src/assets/images/usericon.png";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const[isClicked,setIsClicked]=useState(false)
  const toggleMenu = () => {
    // Prevent event propagation
    if (window.innerWidth < 768) {
      setMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header>
      <div className="header">
        <Container>
          <Row>
            <div className="nav__wrapper">
              <div className="main-header">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="heading-content">
                  <h1>FreshMart</h1>
                  <p>The Best In Market</p>
                </div>
              </div>

              <div className="navigation">
                <div className="menu">
                  <li className="nav__item">
                    <Link
                      className="nav__link"
                      to="/home"
                      activeclassname="active"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM13 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001H11V13.0001H13V19.0001Z"></path>
                        </svg>
                      </div>
                      <h4>Home</h4>
                    </Link>
                  </li>
                  <li className="nav__item"
                    >
                    <Link
                      className="nav__link"
                      to="/shop"
                      activeclassname="active"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path>
                        </svg>
                      </div>
                     <h4 >Shop</h4> 
                    </Link>
                  </li>
                  <div className="icons">
                    <li className="nav__item"
                        >
                      <Link
                        className="nav__link"
                        to="/cart"
                        activeclassname="active"
                      >
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                          </svg>
                        </div>
                      </Link>
                    </li>

                    <li className="nav__item">
                      <Link
                        className="nav__link"
                        to="/cart"
                        activeclassname="active"
                      >
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                          </svg>
                        </div>
                      </Link>
                    </li>
                  </div>
                </div>

                <span className="user-img"
                onClick={toggleMenu} >
                  
                  <img src={usericon} alt="profile"  />
                </span>
              </div>
            </div>
          </Row>
        </Container>
        </div>
        <div>
        {isMobileMenuOpen && (
          <div className="mobile-menu" onClick={closeMenu}>
            <ul className="mobile-menu-list">
              <li className="nav__item">
                <a href="/home">Home</a>
              </li>
              <li className="nav__item">
                <a href="/shop">Shop</a>
              </li>
              <li className="nav__item">
                <a href="/cart">Cart</a>
              </li>
              <li className="nav__item">
                <a href="/shop">Shop</a>
              </li>
              <li className="nav__item">
                <a href="/shop">CheckOut</a>
              </li>
              <li className="nav__item">
                <a href="/shop">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
