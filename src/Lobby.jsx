import React from "react";

function Lobby({ formData }) {
  return (
    <section className="lobby-box">
      <h2>🎉 You’re Registered!</h2>
      <p>
        Thank you, {formData.firstName}! You are now registered for the webinar.
        A confirmation email will be sent to <strong>{formData.email}</strong>.
      </p>
      <p>
        The webinar will begin on <strong>26 June 2026</strong> at <strong>4:00 PM IST</strong>.
      </p>
      <p>
        Meanwhile, you can explore the agenda or join the lobby chat once it opens.
      </p>
    </section>
  );
}

export default Lobby;
