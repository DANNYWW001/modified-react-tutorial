import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { useFetch } from "../assets/hooks/useFecth";
// display name, image, ingredient, instryctionns and preparation


const Recipe = () => {
  const {
    data:{recipes},
    isLoading,
  } = useFetch('https://dummyjson.com/recipes');

  // const [recipes, setRecipes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const res = await fetch(recipeUrl);
  //     const data = await res.json();
  //     console.log(data);
  //     setRecipes(data.recipes);
  //     setIsLoading(false);
  //   };
  //   fetchRecipe();
  // }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#000000" />
      </div>
    );
  }
  return (
    <div className="max-w-[1240px] mx-auto">
      <h1 className="text-center font-bold text-2xl">
        Prepare Your Favourite Dish
      </h1>
      <section className="flex flex-col items-center">
        {recipes.map((recipe) => {
          const {
            id,
            name,
            image,
            ingredients,
            instructions,
            prepTimeMinutes,
            mealType,
          } = recipe;
          return (
            <div className="my-3.5 p-5 mx-auto" key={id}>
              <h1 className="font-bold text-2xl my-2">{`Name: ${name}`}</h1>
              <img
                src={image}
                alt={name}
                className="h-[70%] w-full object-center"
              />
              <p className="text-xl font-medium text-blue-400">{`Preparation Time: ${prepTimeMinutes} minutes`}</p>
              <div>
                <h1 className="text-2xl font-bold text-pink-700">
                  Ingredients
                </h1>
                <ol className=" text-pink-700 list-decimal">
                  {ingredients.map((ing, index) => {
                    return <li key={index}>{ing}</li>;
                  })}
                </ol>
                <h1 className="text-green-700 font-bold text-2xl">
                  How To Prepare
                </h1>
                <ol className=" text-green-700 list-decimal">
                  {instructions.map((ing, index) => {
                    return <li key={index}>{ing}</li>;
                  })}
                </ol>
                {mealType.map((ing, index) => {
                  return (
                    <p
                      className="text-yellow-500 text-xl"
                      key={index}
                    >{`Meal Type: ${ing}`}</p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Recipe;
