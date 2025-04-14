import React from "react";
import { useState, useEffect } from "react";

// when you have a state change react re--renders
// component life cycle is in 3 ways
// first is mounting phase (alsoo called initial render)
// second is a changing phase
// unmount phase is the last phase this is when the component leaves thee chaninng phase
// useEffects are used to run side effects (initialling loading, or whenn the componnent changees)
// useEffect takes in two things (a call back func, optional dependecy array list)
/// cb, optional dependency array list [] - once(initial)

const SimpleEffect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(20);

  useEffect(() => {
    console.log("useeffect ran");
  }, [num]);

  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>
      <h1 className="text-3xl">{count}</h1>
      <button className="mybtn" onClick={() => setCount(count + 1)}>
        Change
      </button>
      <h1 className="text-3xl">{num}</h1>
      <button className="mybtn" onClick={() => setNum(num + 1)}>
        Change
      </button>
    </div>
  );
};

export default SimpleEffect;
