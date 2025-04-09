import React from "react";
//list out the users using your map method
//for each user return an h1
//and the names should be green in color
//DRY Do not repeat yourself
const SimpleList = () => {
  const customers = ["Ade", "John", "Jane", "Peter"];
  const users = ["Bolu", "Peter", "Jack", "Paul", "Ridwan"];
  return (
    <div>
      <h1>Outputting List in React</h1>
      <div>
        {customers.map((customer, i) => {
          return <p key={i}>{customer}</p>;
        })}
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <h1 key={index} className="text-green-600 uppercase">
              {user}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleList;
