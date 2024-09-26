import React from "react";
import { PiPawPrintThin } from "react-icons/pi";
const About = () => {
  return (
    <div className="about-container">
      <center>
        {" "}
        <h1>ABOUT OUR ADOPTION SERVICE</h1>
      </center>
      <p>
        Welcome to our pet adoption website! We are dedicated to finding loving
        homes for pets in need.
      </p>
      <p>
        Our mission is to promote pet adoption and ensure that every animal
        finds a forever family. We believe that pets bring joy, companionship,
        and unconditional love into our lives.
      </p>
      <h2>
        <PiPawPrintThin /> Why Adopt ?
      </h2>
      <p>
        Adopting a pet means giving a homeless animal a second chance. Here are
        a few reasons why adoption is the best option:
      </p>
      <ul>
        <li>
          Save a Life: Many pets in shelters are waiting for a loving home.
        </li>
        <li>
          Variety: Shelters have a wide variety of animals, including different
          breeds, sizes, and ages.
        </li>
        <li>
          Cost-Effective: Adoption fees are generally much lower than buying a
          pet from a breeder.
        </li>
        <li>
          Support: By adopting, you're supporting your local shelter and its
          mission.
        </li>
      </ul>
      <h2>
        {" "}
        <PiPawPrintThin /> Involved -
      </h2>
      <p>
        We encourage everyone to consider adopting a pet. If you're not ready to
        adopt, there are other ways to help:
      </p>
      <ul>
        <li>Volunteer: Help us care for the animals.</li>
        <li>
          Donate: Contributions help us provide food, shelter, and medical care.
        </li>
        <li>Spread the Word: Share our mission with friends and family.</li>
      </ul>
    </div>
  );
};

export default About;
