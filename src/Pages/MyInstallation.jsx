import React, { useState } from "react";
import Loading from "../components/Loading";
import useApps from "../Hooks/useApps";
import { getInstalledApp } from "../utilities/addToLS";
import InstalledAppCard from "../components/InstalledAppCard";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState(getInstalledApp());
  const { apps, loading } = useApps();
  const installedAppsNum = installedApps.map((id) => Number(id));
  const myInstalledApps = apps.filter((app) =>
    installedAppsNum.includes(app.id)
  );
  // console.log(myInstalledApps);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="flex flex-col justify-between items-center pb-10">
        <h2 className="font-bold text-4xl">Our All Applications</h2>
        <p className="text-gray-400 pt-1">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">({myInstalledApps.length}) Apps Found</p>
        <select defaultValue="none" className="select">
          <option>Sort By Size</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
      </div>
      <div>
        {myInstalledApps.map((installedApp) => (
          <InstalledAppCard key={installedApp.id} installedApp={installedApp} />
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
