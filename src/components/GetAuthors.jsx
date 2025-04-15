import React from "react";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useFetch } from "../assets/hooks/useFecth";
// have a loading state
// display the list of authors (image, name, profession, add a link to visit their wikipedia pprofile description)
const url = "https://example-data.draftbit.com/authors?_limit=10";

const GetAuthors = () => {
  const {isLoading, data: authors} = useFetch(url)
  // const [authors, setAuthors] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchAuthors = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setAuthors(data);
  //     setIsLoading(false);
  //   };
  //   fetchAuthors();
  // }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#000000" />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="flex items-center justify-center text-2xl">List Of Authors</h1>
      <section className="shadow-xl flex flex-wrap gap-5">
        {authors.map((author) => {
          const {id, person, imgUrl, professions, description, sourceUrl} =
            author;
          return (
            <div key={id} className="w-[250px] border-2 rounded-2xl mx-auto ">
              <img src={imgUrl} alt={person} className="w-full object-center h-[60%] "  />
              <div>
                <h1 className="text-2xl font-medium ">{person}</h1>
                <p className="text-xl">{professions}</p>
                <p className="text-xl">{description}</p>
                <a href={sourceUrl} target="_blank" className="text-blue-500 text-xl">Read More...</a>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default GetAuthors;
