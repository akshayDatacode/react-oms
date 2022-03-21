import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"
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
                  <i className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" spy={true} smooth={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" spy={true} smooth={true}>
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" spy={true} smooth={true}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <i className="mr-2" /> Blogs
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
