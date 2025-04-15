import React from "react";
import { useState } from "react";

//controlled input - setting state values for all input field
// we attach it by passing the value prop
// after which we set up an onCHange event handler

const SimpleForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium text-blue-700">User Information</h1>
        <input
          type="text"
          placeholder="Full Name"
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
    </div>
  );
};

export default SimpleForm;
