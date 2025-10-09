import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Root = () => {
  const location = useLocation();
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    setIsRouting(true);
    const timeout = setTimeout(() => {
      setIsRouting(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {isRouting && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-white">
          <Loading />
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="lg:flex-1 ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Root;
