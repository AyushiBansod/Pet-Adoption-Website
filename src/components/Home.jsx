import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PetGallery from "./PetGallery";
import PetPosts from "./PetPosts";

function Home({ pets }) {
  // Receive pets as a prop
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAdoptNowClicked, setIsAdoptNowClicked] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleAdoptNow = () => {
    setIsAdoptNowClicked(true);
    navigate("/PetGallery");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          <span className="visually-hidden">
            {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </span>
        </button>
        <div className="header-section">
          <div
            className="image-container"
            style={{ transform: `translateY(-${scrollPosition}px)` }}
          >
            <img
              src="front.png"
              alt="Adopt Now - Image showing available pets"
              className="header-image"
            />
            <div className="overlay-text">
              <h1>Pet Adoption Made Easy</h1>
            </div>
            <div className="adopt-now-box" onClick={handleAdoptNow}>
              <p>Adopt Now</p>
            </div>
          </div>
        </div>
        <PetPosts pets={pets} /> {/* Render PetPosts with pets prop */}
        <PetGallery adoptNowClicked={isAdoptNowClicked} />
      </main>
    </div>
  );
}

export default Home;
