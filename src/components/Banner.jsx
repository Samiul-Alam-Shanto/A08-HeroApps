import React from "react";
import playStoreImg from "../assets/playStore.png";
import appStoreImg from "../assets/appleStore.png";

const Banner = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="flex flex-col items-center justify-center text-center">
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
          <button className="flex items-center gap-1 border border-gray-300 p-2 rounded-lg   font-bold hover:bg-gray-50 cursor-pointer hover:scale-110 transition ease-in">
            <img src={playStoreImg} alt="" />
            <a target="_blank" href="https://play.google.com/store/games?hl=en">
              Google Play
            </a>
          </button>
          <button className="flex items-center gap-1 border border-gray-300 p-2 rounded-lg   font-bold hover:bg-gray-50 cursor-pointer hover:scale-110 transition ease-in">
            <img src={appStoreImg} alt="" />
            <a target="_blank" href="https://www.apple.com/app-store/">
              App Store
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
