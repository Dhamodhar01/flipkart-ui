import React, { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File upload successful:", data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "auto",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <label
        style={{
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Upload File:
        <input
          type="file"
          onChange={handleFileChange}
          required
          style={{
            display: "block",
            marginTop: "5px",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Upload
      </button>
    </form>
  );
}

export default FileUploadForm;
