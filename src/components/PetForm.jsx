import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetForm({ addPet }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // New state for image
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({ name, species, age, address, description, image }); // Include image in the pet object
    setName("");
    setSpecies("");
    setAge("");
    setAddress("");
    setDescription("");
    setImage(""); // Reset image

    navigate("/"); // Redirect to Home after adding pet
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image as a base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      <form className="pet-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}

export default PetForm;
