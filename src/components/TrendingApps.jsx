import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "./AppsCard";

const TrendingApps = () => {
  const { apps } = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div className="py-4 flex flex-col justify-center items-center text-center">
      <h2 className="font-bold text-4xl ">Trending Apps</h2>
      <p className="text-gray-400  py-2">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-2">
        {trendingApps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
      <button className="btn bg-gradient text-white">Show All</button>
    </div>
  );
};

export default TrendingApps;
