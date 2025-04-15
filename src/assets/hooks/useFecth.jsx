import { useState, useEffect } from "react";
import React from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await fetch(api);
    const result = await res.json();
    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [api]);

  return { data, isLoading };
};
