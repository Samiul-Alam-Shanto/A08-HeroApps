import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "./AppsCard";
import { Link } from "react-router";
import Loading from "./Loading";

const TrendingApps = () => {
  const { apps, loading } = useApps();
  const trendingApps = apps.slice(0, 8);
  if (loading) return <Loading />;

  return (
    <div className="py-4 flex flex-col justify-center items-center text-center">
      <h2 className="font-bold text-4xl ">Trending Apps</h2>
      <p className="text-gray-400  py-2">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-5 px-2">
        {trendingApps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
      <Link to="/apps">
        <button className="relative overflow-hidden px-6 py-2 rounded-lg bg-gradient text-white font-semibold shadow-md cursor-pointer hover:scale-110 transition ease-in-out">
          <span className="relative z-10">Show All</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_2s_linear_infinite]"></span>
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
