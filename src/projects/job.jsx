import React, { useState } from "react";

function JobProfile() {
  const [profile, setProfile] = useState({
    jobTitle: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    description:
      "Developing innovative solutions and leading a team of developers.",
  });

  const [form, setForm] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...form });
    alert("Profile updated successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Job Profile</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "calc(100% - 22px)",
              }}
            />
          </label>
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Company:
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "calc(100% - 22px)",
              }}
            />
          </label>
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Location:
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              style={{
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "calc(100% - 22px)",
              }}
            />
          </label>
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Description:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              style={{
                marginLeft: "10px",
                padding: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                width: "calc(100% - 22px)",
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Update Profile
        </button>
      </form>

      <div style={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}>
        <h2>Current Profile</h2>
        <p>
          <strong style={{ display: "inline-block", width: "120px" }}>
            Job Title:
          </strong>{" "}
          {profile.jobTitle}
        </p>
        <p>
          <strong style={{ display: "inline-block", width: "120px" }}>
            Company:
          </strong>{" "}
          {profile.company}
        </p>
        <p>
          <strong style={{ display: "inline-block", width: "120px" }}>
            Location:
          </strong>{" "}
          {profile.location}
        </p>
        <p>
          <strong style={{ display: "inline-block", width: "120px" }}>
            Description:
          </strong>{" "}
          {profile.description}
        </p>
      </div>
    </div>
  );
}

export default JobProfile;
