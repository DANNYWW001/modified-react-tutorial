import React from "react";
import { Link } from "react-router-dom";

const SingleTweet = () => {
  return (
    <div>
      <Link to="/timeline" className="btn btn-primary max-w-[1210px] mx-auto">Back to timeline</Link>
    </div>
  );
};

export default SingleTweet;
