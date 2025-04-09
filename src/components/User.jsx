import React, { useState } from "react";

//false, null

// conditionally render a UI for when the user is not logged in

function User() {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    setUser(true);
  };
  const handleLogout = () => {
    setUser(false);
  };
  return (
    <>
      {!user ? (
        <div>
          <h1>You are Not logged in</h1>
          <button onClick={handleLogin} className="mybtn">
            Log in now
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome User</h1>
          <button onClick={handleLogout} className="mybtn">
            Log out
          </button>
        </div>
      )}
    </>
  );
}

export default User;
