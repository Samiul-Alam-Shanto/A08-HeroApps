import React from "react";
import Banner from "../components/Banner";
import TrendingApps from "../components/TrendingApps";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <TrendingApps />
    </div>
  );
};

export default Home;
