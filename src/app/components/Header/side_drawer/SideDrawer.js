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
      </nav>
    </>
  );
}

export default SideDrawer;
