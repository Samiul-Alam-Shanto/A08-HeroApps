import React from "react";
import logo from "../assets/logo.png";
import githubImg from "../assets/github.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeStyle = ({ isActive }) =>
    `mx-2 px-2 font-medium text-xl  ${
      isActive
        ? "text-gradient underline underline-offset-4 decoration-solid decoration-3 decoration-purple-500"
        : "text-black     "
    }`;
  const links = (
    <>
      <NavLink to="/" className={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/apps" className={activeStyle}>
        Apps
      </NavLink>
      <NavLink to="" className={activeStyle}>
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-8" src={logo} alt="" />
          <p className="font-bold text-2xl text-gradient ">HERO.IO</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Samiul-Alam-Shanto"
          target="_blank"
          className="btn  bg-gradient "
        >
          <img src={githubImg} alt="github logo" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
