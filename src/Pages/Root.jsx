import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="lg:flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
