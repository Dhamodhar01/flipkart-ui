import React, { useState } from "react";

function UserProfile() {
  // Initialize state with an object
  const [profile, setProfile] = useState({
    name: "hari",
    age: 30,
  });

  // Update the name property
  const updateName = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name: "Jane Doe",
    }));
  };

  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default UserProfile;
