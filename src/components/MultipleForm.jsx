import React, { useState } from "react";
// multiple inputs using one state value to handle all fields

const MultipleForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    age: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, age } = user;
    if ((!fullName.trim() || !email.trim() || !age.trim())) {
      setError("Please provide all values");
      return;
    }
    // do what you want to do
    console.log(user);
    // default back to the beginning

    setError("");
    setUser({ fullName: "", email: "", age: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="myform">
        <h1 className="text-2xl text-blue-500 font-bold mt-5 mx-4">
          User Information
        </h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          className="myinput"
          placeholder="Full Name"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="myinput"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="myinput"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button className="mybtn uppercase mx-[150px]">submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;
