import React from "react";
import playStoreImg from "../assets/playStore.png";
import appStoreImg from "../assets/appleStore.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="container mx-auto py-5 ">
      <div className="flex flex-col items-center justify-center text-center ">
        <h2 className="font-bold text-6xl ">
          We Build <br />{" "}
          <span className="text-gradient font-black">Productive</span> Apps
        </h2>
        <p className="text-gray-400  max-w-2/3 mt-4">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-5 mt-5">
          <button className="flex items-center gap-1 border border-gray-300 p-2 rounded-lg cursor-pointer font-bold hover:bg-gray-50 hover:shadow-lg  hover:scale-110 transition ease-in">
            <img src={playStoreImg} alt="" />
            <a target="_blank" href="https://play.google.com/store/games?hl=en">
              Google Play
            </a>
          </button>
          <button className="flex items-center gap-1 border border-gray-300 p-2 rounded-lg  cursor-pointer font-bold hover:bg-gray-50 hover:shadow-lg  hover:scale-110 transition ease-in">
            <img src={appStoreImg} alt="" />
            <a target="_blank" href="https://www.apple.com/app-store/">
              App Store
            </a>
          </button>
        </div>
      </div>
      <div>
        <img className="mx-auto mt-8 px-2" src={heroImg} alt="Mobile" />
        <div className="bg-gradient text-white flex flex-col gap-5 p-8">
          <h3 className="font-bold text-5xl text-center">
            Trusted by Millions, Built for You
          </h3>
          <div className="stats stats-vertical lg:stats-horizontal ">
            <div className="stat text-center">
              <div className="stat-title text-white">Total Downloads</div>
              <div className="stat-value text-white">29.6M</div>
              <div className="stat-desc text-white">
                21% More Than Last Month
              </div>
            </div>
            <div className="stat text-center">
              <div className="stat-title text-white">Total Reviews</div>
              <div className="stat-value text-white">906K</div>
              <div className="stat-desc text-white">
                46% More Than Last Month
              </div>
            </div>
            <div className="stat text-center">
              <div className="stat-title text-white">Active Apps</div>
              <div className="stat-value text-white">40+</div>
              <div className="stat-desc text-white">30 More Will Launch</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
