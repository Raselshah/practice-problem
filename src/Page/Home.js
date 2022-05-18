import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
            className="rounded-box"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
            className="rounded-box"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
            className="rounded-box"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
            className="rounded-box"
            alt=""
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
            className="rounded-box"
            alt=""
          />
        </div>
      </div>
      <h2 className="text-4xl text-indigo-500 text-center mt-5">
        Welcome to our testing website
      </h2>
    </div>
  );
};

export default Home;
