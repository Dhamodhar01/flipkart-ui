import React, { useState } from "react";

function EditableList() {
  const [items, setItems] = useState([
    { id: 1, name: "saivamshi" },
    { id: 2, name: "Rishi" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const startEditing = (item) => {
    setEditId(item.id);
    setEditName(item.name);
  };

  const saveEdit = () => {
    setItems(
      items.map((item) =>
        item.id === editId ? { ...item, name: editName } : item
      )
    );
    setEditId(null);
    setEditName("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditName("");
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
      <h2>Editable List</h2>
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
            {editId === item.id ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                <button onClick={saveEdit} style={buttonStyle}>
                  Save
                </button>
                <button onClick={cancelEdit} style={buttonStyle}>
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{ flexGrow: 1 }}>{item.name}</div>
            )}
            <button
              onClick={() => setItems(items.filter((i) => i.id !== item.id))}
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
            { id: items.length + 1, name: `Item ${items.length + 1}` },
          ])
        }
        style={buttonStyle}
      >
        Add Item
      </button>
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

export default EditableList;
