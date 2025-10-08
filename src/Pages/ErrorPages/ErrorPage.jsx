import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <figure>
        <img src={errorImg} alt="" />
      </figure>
      <div className="flex flex-col items-center justify-center gap-3 mt-5">
        <h2 className="font-bold text-3xl text-black">Oops,page not found!</h2>
        <p className="text-gray-500">
          The page you are looking for is not available
        </p>
        <Link to="/">
          <button className="btn bg-gradient">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
