import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PetForm from "./components/PetForm";
import PetPosts from "./components/PetPosts";
import Home from "./components/Home";
import PetGallery from "./components/PetGallery";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
  const [localPets, setLocalPets] = useState([]);
  const [apiPets, setApiPets] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("/api/pets");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiPets(data);
      } catch (error) {}
    };

    fetchPets();
  }, []);

  const addPet = (newPet) => {
    setLocalPets((prevLocalPets) => {
      return [...prevLocalPets.slice(1), newPet];
    });
  };

  const combinedPets = [...localPets, ...apiPets];

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  // Prevent horizontal scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
    }
  }, [isSidebarOpen]);

  return (
    <Router>
      <div className="App">
        <Header onSidebarToggle={toggleSidebar} />
        <Sidebar
          isOpen={isSidebarOpen}
          onLinkClick={closeSidebar}
          ref={sidebarRef}
        />
        <div className="main-wrapper">
          <main className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<Home pets={combinedPets} />} />
              <Route
                path="/create-post"
                element={<PetForm addPet={addPet} />}
              />
              <Route path="/posts" element={<PetPosts pets={combinedPets} />} />
              <Route
                path="/petgallery"
                element={<PetGallery pets={combinedPets} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
