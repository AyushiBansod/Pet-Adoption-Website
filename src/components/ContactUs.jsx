import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)

    // Show an alert after submission
    window.alert("Your message has been sent successfully!");

    // Reset the form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handlePhoneChange = (e) => {
    // Allow only digits
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  const handlePhoneKeyPress = (e) => {
    // Prevent non-digit characters
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="contact-container">
      <center>
        <h1>Contact Us</h1>
      </center>
      <p>
        If you have any questions, concerns, or would like to learn more about
        our services, please reach out to us!
      </p>

      <h2>Get in Touch</h2>

      {/* Form section starts here */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number :</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            onKeyPress={handlePhoneKeyPress}
            required
            maxLength="10" // Limit to 10 digits
            title="Please enter a 10-digit phone number"
            inputMode="numeric" // Ensure numeric keypad on mobile
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            placeholder="Enter Your Message Here...."
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div className="service-details">
        <h2>Stay Connected With Us - </h2>
        <p>
          {" "}
          <MdEmail />
          <strong> Email:</strong> services@petadoption.com
        </p>
        <p>
          <FaPhoneSquareAlt />
          <strong> Phone:</strong> (987) 654-3210
        </p>
        <p>
          <FaLocationDot />
          <strong> Address:</strong> 456 Service Avenue, Pet City, CA 67890
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
