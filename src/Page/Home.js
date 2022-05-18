import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div class="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
            class="rounded-box"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
            class="rounded-box"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
            class="rounded-box"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
            class="rounded-box"
            alt=""
          />
        </div>

        <div class="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
            class="rounded-box"
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
