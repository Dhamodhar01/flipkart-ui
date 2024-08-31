// import React, { useState } from "react";

// const formStyle = {
//   maxWidth: "500px",
//   margin: "0 auto",
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
// };

// const labelStyle = {
//   display: "block",
//   marginBottom: "8px",
//   fontWeight: "bold",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "8px",
//   marginBottom: "10px",
//   borderRadius: "4px",
//   border: "1px solid #ddd",
// };

// const textareaStyle = {
//   width: "100%",
//   padding: "8px",
//   marginBottom: "10px",
//   borderRadius: "4px",
//   border: "1px solid #ddd",
//   minHeight: "100px",
// };

// const errorStyle = {
//   color: "red",
//   fontSize: "0.875rem",
//   margin: "0",
// };

// const buttonStyle = {
//   padding: "10px 15px",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "4px",
//   cursor: "pointer",
// };

// function ValidatedForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form Data Validated and Submitted:", formData);
//       alert("Form submitted successfully!");
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <label style={labelStyle}>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         {errors.name && <p style={errorStyle}>{errors.name}</p>}
//       </label>
//       <br />
//       <label style={labelStyle}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           style={inputStyle}
//         />
//         {errors.email && <p style={errorStyle}>{errors.email}</p>}
//       </label>
//       <br />
//       <label style={labelStyle}>
//         Message:
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           style={textareaStyle}
//         />
//         {errors.message && <p style={errorStyle}>{errors.message}</p>}
//       </label>
//       <br />
//       <button type="submit" style={buttonStyle}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default ValidatedForm;
