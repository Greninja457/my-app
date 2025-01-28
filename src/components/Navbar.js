import React from "react";
import PropTypes from "prop-types";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "cmp-name",
  mode,
  toggler,
  changeAlert,
  toggleBMode,
}) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
      style={{
        transition: "0.3s",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ color: mode === "light" ? "black" : "white" }}
        >
          <b>{title}</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                about
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                href="/"
                style={{ color: mode === "light" ? "black" : "white" }}
              >
                Disabled
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <label
              className="form-check-label mx-3"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: mode === "light" ? "black" : "white" }}
            >
              Dark/Light
            </label>
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                toggler();
                mode === "dark"
                  ? changeAlert({
                      message: "Changed to light mode",
                      type: "success",
                    })
                  : changeAlert({
                      message: "Changed to dark mode",
                      type: "success",
                    });
              }}
            />
          </div>
          <div className="form-check form-switch">
            <label
              className="form-check-label mx-3"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: mode === "light" ? "black" : "white" }}
            >
              Blue/Light
            </label>
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                toggleBMode();
                mode === "blue"
                  ? changeAlert({
                      message: "Changed to light mode",
                      type: "success",
                    })
                  : changeAlert({
                      message: "Changed to blue mode",
                      type: "success",
                    });
              }}
            />
          </div>
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 ${mode}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                backgroundColor:
                  mode === "light"
                    ? "white"
                    : mode === "dark"
                    ? "#343a40"
                    : "rgb(91, 167, 249)",
                color: mode === "light" ? "black" : "white",
              }}
            />
            <button className={`btn btn-outline-primary ${mode}`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
