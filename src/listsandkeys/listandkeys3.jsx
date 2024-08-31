import React, { useState } from "react";

function ConfirmableList() {
  const [items, setItems] = useState([
    { id: 1, name: "Dhamu" },
    { id: 2, name: "Rishi" },
    { id: 3, name: "Rishi" },
    { id: 4, name: "Ashwin" },
    { id: 5, name: "Ramesh" },
    { id: 6, name: "srikar" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const confirmRemove = (item) => {
    setItemToRemove(item);
    setIsDialogOpen(true);
  };

  const handleRemove = () => {
    setItems(items.filter((item) => item !== itemToRemove));
    setIsDialogOpen(false);
    setItemToRemove(null);
  };

  const cancelRemove = () => {
    setIsDialogOpen(false);
    setItemToRemove(null);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h2>Confirmable List</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.name}
            <button
              onClick={() => confirmRemove(item)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setItems([
            ...items,
            { id: items.length + 1, name: `Task ${items.length + 1}` },
          ])
        }
        style={buttonStyle}
      >
        Add Task
      </button>

      {isDialogOpen && (
        <div style={dialogStyle}>
          <p>Are you sure you want to remove this item?</p>
          <button onClick={handleRemove} style={buttonStyle}>
            Yes
          </button>
          <button onClick={cancelRemove} style={buttonStyle}>
            No
          </button>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: "5px",
};

const dialogStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  zIndex: 1000,
};

export default ConfirmableList;
