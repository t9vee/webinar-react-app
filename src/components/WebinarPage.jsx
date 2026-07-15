import React, { useState } from "react";
import "../styles/Webinar.css";   // your CSS file
import RegistrationForm from "./RegistrationForm"; // form component
import Lobby from "./Lobby";                       // lobby component
import EventDetails from "./EventDetails";         // webinar info section

function WebinarPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    consent: false,
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsRegistered(true);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <header className="event-header">
        <div className="container">
          <h1>Webinar Title Goes Here</h1>
          <p>Join us for an insightful webinar session</p>
        </div>
      </header>

      <main className="container main-content">
        {!isRegistered ? (
          <>
            <EventDetails />
            <RegistrationForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </>
        ) : (
          <Lobby formData={formData} />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WebinarPage;
