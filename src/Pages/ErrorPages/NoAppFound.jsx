import React from "react";
import errorImg1 from "../../assets/App-Error.png";
import { Link } from "react-router";

const NoAppFound = () => {
  return (
    <div className="flex flex-col items-center justify-center col-span-4">
      <figure>
        <img src={errorImg1} alt="" />
      </figure>
      <div className="flex flex-col items-center justify-center gap-3 mt-5">
        <h2 className="font-bold text-3xl text-black">Sorry,App not found!</h2>
        <p className="text-gray-500">
          The App you are looking for is not available
        </p>
        <Link to="/">
          <button className="btn bg-gradient">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NoAppFound;
