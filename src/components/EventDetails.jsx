import React from "react";

function EventDetails() {
  return (
    <section className="event-details">
      <h2>About This Webinar</h2>
      <p>
        Add your webinar description here. This section can include the topic,
        agenda, speaker details, learning outcomes, and key takeaways for the attendees.
      </p>
      <p>
        This page is designed similar to a standard webinar registration page,
        where users can view event details and register using the form.
      </p>
      <div className="event-meta">
        <p><strong>Date:</strong> 26 June 2026</p>
        <p><strong>Time:</strong> 4:00 PM IST</p>
        <p><strong>Duration:</strong> 60 minutes</p>
      </div>
    </section>
  );
}

export default EventDetails;
