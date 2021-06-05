import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Search">
        Book Search through Google
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Search"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/archive"
              className={window.location.pathname === "/archive" ? "nav-link active" : "nav-link"}
            >
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
