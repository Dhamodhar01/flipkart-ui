import React, { useState } from "react";

const Banana = () => {
  const handleClick = () => {
    console.log("hello ninjas");
  };

  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };

  return (
    <div>
      <div className="class">
        <button onClick={handleClick}>click me</button>
        <button
          onClick={() => {
            handleClickAgain("dhamu");
          }}
        >
          click me again
        </button>
      </div>
    </div>
  );
};

export default Banana;
