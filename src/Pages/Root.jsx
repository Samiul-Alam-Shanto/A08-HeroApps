import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import useApps from "../Hooks/useApps";
import Loading from "../components/Loading";

const Root = () => {
  const { loading } = useApps();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
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
