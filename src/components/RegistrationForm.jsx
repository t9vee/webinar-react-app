import React from "react";

function RegistrationForm({ formData, handleChange, handleSubmit }) {
  return (
    <section className="registration-box">
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        {["firstName", "lastName", "email", "company", "jobTitle"].map((field) => (
          <div className="form-group" key={field}>
            <label htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
              {["firstName", "lastName", "email", "company"].includes(field) && "*"}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required={["firstName", "lastName", "email", "company"].includes(field)}
            />
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Singapore">Singapore</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <label htmlFor="consent">
            I agree to receive communications related to this webinar.
          </label>
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </section>
  );
}

export default RegistrationForm;
