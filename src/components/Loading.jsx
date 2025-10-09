import React from "react";
import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-9xl flex items-center font-black">
          L{"  "}
          <span className="w-28  animate-spin scale-125">
            <img src={logo} alt="" />
          </span>
          {"  "}O A D I N G
        </h1>
      </div>
    </div>
  );
};

export default Loading;
