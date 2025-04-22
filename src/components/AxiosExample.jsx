import React from "react";
import axios from "axios";
const axiosInstance = axios.create({ baseURL: "https://dummyjson.com" });


const AxiosExample = () => {
  const getData = async () => {
    /// using axios to fettchh data
    const { data } = await axiosInstance("/products");
    console.log(data);
  };
  getData();


  const getRecipes = async () => {
    /// using axios to fettchh data
    const { data } = await axiosInstance("/recipes");
    console.log(data);
  };
  getRecipes();
  return <div>AxiosExample</div>;
};

export default AxiosExample;
