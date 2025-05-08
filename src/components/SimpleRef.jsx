import React, { useEffect } from "react";
import { useRef } from "react";

// useRef can hold mutable values and will not trigger re-render
// it is also used to target dom(jsx) elements (i.e form, input)

const SimpleRef = () => {
  const headingCContainer = useRef(null);
  console.log(headingCContainer.current);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <div className="container">
      <h1 ref={headingCContainer} className="text-3xl text-center">
        Use Ref
      </h1>
      <form className="myform">
        <label htmlFor="sub" className="text-[20px] font-semibold my-5">
          Subscribe to our newsletter
        </label>
        <input
          ref={inputRef}
          type="email"
          placeholder="Email Address"
          className="input"
        />
        <br />
        <button className="mt-1 mybtn">Subscribe</button>
      </form>
    </div>
  );
};

export default SimpleRef;
