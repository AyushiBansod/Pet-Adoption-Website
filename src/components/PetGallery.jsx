import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

const PetGallery = ({ adoptNowClicked }) => {
  const [pets, setPets] = useState([]);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const dogResponse = await fetch(
          "https://api.thedogapi.com/v1/images/search?limit=5"
        );
        const dogData = await dogResponse.json();

        const catResponse = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=5"
        );
        const catData = await catResponse.json();

        const nameResponse = await fetch(
          "https://randomuser.me/api/?results=10"
        );
        const nameData = await nameResponse.json();

        const combinedPets = [...dogData, ...catData].map((pet, index) => {
          const isDog = pet.url.includes("dog");
          const randomName =
            nameData.results[index % nameData.results.length].name.first;
          const age = Math.max(1, Math.floor(Math.random() * 10));

          return {
            name: randomName,
            species: isDog ? "Dog" : "Cat",
            age: age,
            image: pet.url,
            address: `Random Address ${index + 1}`,
          };
        });

        setPets(combinedPets);
      } catch (error) {}
    };

    fetchPets();
  }, []);

  const isOnPetGalleryPage = location.pathname === "/PetGallery"; // Check if on the PetGallery route

  return (
    <div
      className={`pet-gallery ${
        adoptNowClicked || isOnPetGalleryPage ? "with-gap" : ""
      }`}
    >
      {pets.map((pet, index) => (
        <div key={index} className="pet-card">
          <img src={pet.image} alt={pet.name} />
          <h3>{pet.name}</h3>
          <p>Species: {pet.species}</p>
          <p>Age: {pet.age} years</p>
          <p>Address: {pet.address}</p>
        </div>
      ))}
    </div>
  );
};

export default PetGallery;
