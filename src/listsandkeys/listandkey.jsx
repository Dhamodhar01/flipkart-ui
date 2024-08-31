import { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState([
    { id: 1, name: "Dhamu" },
    { id: 2, name: "Hari" },
    { id: 3, name: "Rishi" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `item${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={containerStyle}>
      <ul style={listStyle}>
        {items.map((item) => (
          <li key={item.id} style={listItemStyle}>
            {item.name}
            <button
              onClick={() => removeItem(item.id)}
              style={removeButtonStyle}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addItem} style={addButtonStyle}>
        Add Item
      </button>
    </div>
  );
}

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
  margin: "0",
};

const listItemStyle = {
  padding: "10px",
  marginBottom: "8px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ddd",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const addButtonStyle = {
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
};

const removeButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default DynamicList;
