import React from "react";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useFetch } from "../assets/hooks/useFecth";

// dispay firstName, lastName, image, city, gender, address(... , city, state)

const userurl = "https://dummyjson.com/users";

const FetchUser = () => {
  const {data:{users}, isLoading} = useFetch(userurl)
  // const [users, setUsers] = useState([]);
  // const [isGoing, setIsGoing] = useState(true);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch(userurl);
  //     const data = await res.json();
  //     console.log(data.users);
  //     setIsGoing(false);
  //     setUsers(data.users);
  //   };
  //   getUsers();
  // }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <MoonLoader color="#000000" />
      </div>
    );
  }

  return (
    <div className="max-w-[1220px] mx-auto">
      <h1 className="text-[40px] font-bold">List Of Users</h1>
      <section className="flex flex-col items-center gap-5 lg:flex-row lg:flex-wrap">
        {users.map((user) => {
          const { id, firstName, lastName, gender, image, address } = user;
          return (
            <div key={id} className="w-full max-w-[380px] h-[400px] shadow-md">
              <img
                src={image}
                alt={firstName}
                className="w-full h-[65%] object-center"
              />
              <div className="text-[18px] font-semibold px-4">
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p className="uppercase">{gender}</p>
                <p>{`${address.address}, ${address.city}, ${address.state}`}</p>
                <p></p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUser;
