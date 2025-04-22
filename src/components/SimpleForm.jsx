import React from "react";
import { useState } from "react";


//you must prevent default behavior, your submit function can either be attached to the form as onChange or attached to the button as onclick
//controlled input - setting state values for all input field
// we attach it by passing the value prop
// after which we set up an onCHange event handler

const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);

    if (!firstName.trim() || !lastName) {
      setError("Please fill all fields");
    }

    setUsers([...users, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium text-blue-700">User Information</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="mybtn mx-[170px]" type="submit">
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <div className="myform">
          <h1 className="text-blue-500 text-2xl font-medium">List Of Users</h1>
          {users.map((user, index) => {
            return (
              <p key={index}>
                {user.firstName} {user.lastName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimpleForm;
