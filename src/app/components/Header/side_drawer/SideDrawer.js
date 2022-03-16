import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll"

const SideDrawer = ({
  show
}) => {
  const location = useLocation()

  useEffect(() => {
  }, [location])

  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <>
      <nav className={drawerClasses}>
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
      </nav>
    </>
  );
}

export default SideDrawer;
