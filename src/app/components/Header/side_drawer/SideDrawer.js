import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SideDrawer = ({
  show,
  drawerClickHandler
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
            <Link to="/" onClick={() => drawerClickHandler()}>
              <span className={location.pathname === '/' && 'active border-bottom pb-2'}>
                <i class="far fa-home-alt me-2" />Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={() => drawerClickHandler()}>
              <span className={location.pathname === '/aboutus' && 'active border-bottom pb-2'}>
                <i className="far fa-users me-2" />About Us
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => drawerClickHandler()}>
              <span className={location.pathname === '/contact' && 'active border-bottom pb-2'}>
                <i class="far fa-hand-heart me-2" />Contact Us
              </span>
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => drawerClickHandler()}>
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
      </nav>
    </>
  );
}

export default SideDrawer;
