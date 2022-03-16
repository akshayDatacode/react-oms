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
            LOGO
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
              {
                window.location.hash === '#/' &&
                <>
                  <li>
                    <LinkScroll to="aboutus" spy={true} smooth={true}>
                      About Us
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll to="service" spy={true} smooth={true}>
                      Service
                    </LinkScroll>
                  </li>
                </>
              }
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
