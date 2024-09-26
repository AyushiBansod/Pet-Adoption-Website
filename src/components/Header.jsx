import React from "react";
import { FaBars } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

function Header({ onSidebarToggle }) {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={onSidebarToggle}>
        <FaBars />
      </button>
      <FaPaw className="paw-symbol" />
      <h1 className="header-title">Adopt a Buddy</h1>
    </header>
  );
}

export default Header;
