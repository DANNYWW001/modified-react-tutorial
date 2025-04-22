import React, { useState } from "react";

const OtherInputs = () => {
  const [review, setReview] = useState("");
  const [agree, setAgree] = useState(false);
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <form onSubmit={handleForm} className="myform">
        <h1 className="text-blue-500 font-bold text-2xl">Other Information</h1>
        <label htmlFor="pic">Upload Photo</label>
        <input
          type="file"
          id="pic"
          className="myinput"
          onChange={handleFileChange}
          accept="image/*"
        />
        {preview && (
          <img
            src={preview}
            alt="Your Photo"
            className="h-16 w-16 object-cover rounded-md"
          />
        )}
        <textarea
          className="myinput"
          placeholder="Write A Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="agree"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree" className="ml-2">
          Agree to Terms and Conditions
        </label>
        <button className="mybtn block mt-2">Submit</button>
      </form>
    </div>
  );
};

export default OtherInputs;
