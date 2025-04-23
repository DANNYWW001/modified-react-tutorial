import React from "react";
import { tweets } from "../data";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <div className="max-w-[1210px] mx-auto py-7">
      <section className="flex gap-3">
        <div className="border border-secondary p-5 w-[300px]">
          <h1 className="text-3xl font-bold">Trending Topics</h1>
          <ol className="list-decimal">
            <li>Sport</li>
            <li>Fashion</li>
            <li>Technology</li>
            <li>Finance</li>
            <li>Football</li>
          </ol>
        </div>
        <div className="border border-secondary p-3 w-[600px]">
          <h1 className="text-3xl font-bold">Timeline</h1>
          {/* {list of tweets api} */}
          <section className="flex flex-col gap-3">
            {tweets.map((singleTweet) => {
              const { id, profileName, handle, comments, likes, tweet } =
                singleTweet;
              return (
                <div key={id} className="border-y-2 border-gray-400 p-2">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-2xl font-bold">{profileName}</h1>
                    <span className="text-gray-300">@{handle}</span>
                  </div>
                  <p className="my-2">{tweet}</p>
                  <div className="flex gap-3 items-center">
                    <p>{likes} likes</p>
                    <p>{comments.length} comments</p>
                  </div>
                  <Link to={`/timeline/${id}`}>Read More</Link>
                </div>
              );
            })}
          </section>
        </div>
        <div className="border border-secondary p-3 w-[300px]">
          <h1 className="text-xl font-bold">Welcome John Doe</h1>
          <p className="text-gray-300">@johndoe001</p>
          <p className="my-3">Frontend wan wound me</p>
          <input type="text" placeholder="Search for Users" className="input" />
        </div>
      </section>
    </div>
  );
};

export default Timeline;
