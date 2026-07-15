// src/services/api.js

// Example: Register a user for the webinar
export async function registerUser(data) {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

// Example: Fetch webinar details (optional)
export async function getWebinarDetails() {
  try {
    const response = await fetch("/api/webinar");
    if (!response.ok) {
      throw new Error("Failed to fetch webinar details");
    }
    return await response.json();
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
