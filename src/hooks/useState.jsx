import { useState } from "react";

const Navbar = () => {
  const [count, SetCount] = useState(34);
  const [name, setName] = useState("Dhamu");
  const handleClick = () => {
    SetCount(23);
    setName("hari");
  };

  return (
    <div>
      <p>
        {name} is {count} year old
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Navbar;
