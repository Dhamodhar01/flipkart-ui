// import React, { useState } from "react";
// import ChildComponent from "./props1";

// const ParentComponent = () => {
//   const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
//   const deleteItem = (index) => {
//     setItems(items.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ color: "#333" }}>Items List</h1>
//       {items.map((item, index) => (
//         <ChildComponent
//           key={index}
//           index={index}
//           item={item}
//           deleteItem={deleteItem}
//           style={{
//             border: "1px solid #ddd",
//             padding: "10px",
//             margin: "5px 0",
//             borderRadius: "5px",
//             backgroundColor: "#f9f9f9",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;
