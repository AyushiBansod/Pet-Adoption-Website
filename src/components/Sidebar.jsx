import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Sidebar = forwardRef(({ isOpen, onLinkClick }, ref) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} ref={ref}>
      <ul>
        <li>
          <Link to="/" onClick={onLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-post" onClick={onLinkClick}>
            Create Post
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onLinkClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;
