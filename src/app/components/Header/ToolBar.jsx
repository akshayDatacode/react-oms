import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
//import fire from "../../config/fire";

const ToolBar = ({ drawerClickHandler }) => {
  // logout() {
  //   fire.auth().signOut();
  // }
  const location = useLocation()

  useEffect(() => {
  }, [location])

  return (
    <>
      <header className="toolbar fixed-top">
        <nav className="toolbar_navigation ">
          <div className="toolbar_toggle-button">
            <DrawerToggleButton clickButton={drawerClickHandler} />
          </div>
          <div className="toolbar_logo">
            {/* <img
                className="logo_img "
                src={require("../../assets/images/wow_logo.png")}
                alt="First slide"
              /> */}
            <Link to='/'>
              <h6 className="text-dark">LOGO</h6>
            </Link>
          </div>
          {/* This is for Logo and Nev Spaccing */}
          <div className="logo-nev-spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Link to="/">
                  <span className={location.pathname === '/' && 'active border-bottom pb-2'}>
                    <i class="far fa-home-alt me-2" />Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/aboutus" spy={true} smooth={true}>
                  <span className={location.pathname === '/aboutus' && 'active border-bottom pb-2'}>
                    <i className="far fa-users me-2" />About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" spy={true} smooth={true}>
                  <span className={location.pathname === '/contact' && 'active border-bottom pb-2'}>
                    <i class="far fa-hand-heart me-2" />Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <span className={location.pathname === '/blog' && 'active border-bottom pb-2'}>
                    <i className="far fa-file-invoice me-2" />Blogs
                  </span>
                </Link>
              </li>
              {/* <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
                </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default ToolBar;
