import React from "react";
// template, functionaliites
//write js{}
const Dynamic = () => {
  const myName = "John Doe";
  return (
    <div className="text-3xl text-center">
      <h1>DYNAMIC VALUES</h1>
      <p>My name is {myName}</p>
      <p>{1 + 1}</p>
    </div>
  );
};

export default Dynamic;
