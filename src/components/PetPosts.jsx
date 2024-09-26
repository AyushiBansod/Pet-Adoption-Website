// PetPosts.jsx
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator"; // Import the LoadingIndicator component

const PetPosts = ({ pets }) => {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate an API call or loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or your fetch duration)
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <LoadingIndicator />; // Show loading indicator while fetching
  }

  return (
    <div className="pet-posts-wrapper">
      {pets.map((pet, index) => (
        <div key={index} className="pet-card">
          <img src={pet.image} alt={pet.name} className="pet-image" />
          <h3 className="pet-name">{pet.name}</h3>
          <p className="pet-species">Species: {pet.species}</p>
          <p className="pet-age">Age: {pet.age}</p>
          <p className="pet-address">Address: {pet.address}</p>
          <p className="pet-description">{pet.description}</p>{" "}
          {/* Display description */}
        </div>
      ))}
    </div>
  );
};

export default PetPosts;
