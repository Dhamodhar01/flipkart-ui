// import React, { Component } from "react";

// const styles = `
// .form-container {
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   background-color: #f9f9f9;
// }

// .form-container div {
//   margin-bottom: 15px;
// }

// .form-container label {
//   display: block;
//   margin-bottom: 5px;
//   font-weight: bold;
// }

// .form-container input,
// .form-container textarea,
// .form-container select {
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// }

// .form-container button {
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   border-radius: 4px;
//   cursor: pointer;
// }

// .form-container button:hover {
//   background-color: #0056b3;
// }
// `;

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       comment: "",
//       topic: "React",
//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };

//   handleCommentChange = (event) => {
//     this.setState({
//       comment: event.target.value,
//     });
//   };

//   handleTopicChange = (event) => {
//     this.setState({
//       topic: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
//     event.preventDefault();
//   };

//   render() {
//     const { username, comment, topic } = this.state;
//     return (
//       <div>
//         <style>{styles}</style>
//         <div className="form-container">
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <label>Username</label>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={this.handleUsernameChange}
//               />
//             </div>
//             <div>
//               <label>Comment</label>
//               <textarea
//                 value={comment}
//                 onChange={this.handleCommentChange}
//               ></textarea>
//             </div>
//             <div>
//               <label>Topic</label>
//               <select value={topic} onChange={this.handleTopicChange}>
//                 <option value="React">React</option>
//                 <option value="Angular">Angular</option>
//                 <option value="Vue">Vue</option>
//               </select>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Form;
