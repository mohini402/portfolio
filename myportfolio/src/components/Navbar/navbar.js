import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = ({
  handleContact,
  handleAboutMe,
  handleResume,
  handleProject,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="name">Portfolio</h2>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="desktopMenu">
          <Link
            className="desktopMenuListItem"
            onClick={() => {
              handleAboutMe();
              handleMenuItemClick();
            }}
          >
            ABOUT ME
          </Link>
          <Link
            className="desktopMenuListItem"
            onClick={() => {
              handleResume();
              handleMenuItemClick();
            }}
          >
            RESUME
          </Link>
          <Link
            className="desktopMenuListItem"
            onClick={() => {
              handleProject();
              handleMenuItemClick();
            }}
          >
            PROJECT
          </Link>
          <Link
            className="desktopMenuListItem"
            onClick={() => {
              handleContact();
              handleMenuItemClick();
            }}
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i
          id="bar"
          className={isOpen ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
