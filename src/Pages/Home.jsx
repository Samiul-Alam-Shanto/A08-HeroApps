import React from "react";
import Banner from "../components/Banner";
import TrendingApps from "../components/TrendingApps";
import useApps from "../Hooks/useApps";
import Loading from "../components/Loading";

const Home = () => {
  const { loading } = useApps();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <Banner />
      <TrendingApps />
    </div>
  );
};

export default Home;
