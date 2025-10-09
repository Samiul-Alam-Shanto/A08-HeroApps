import React, { useState } from "react";
import Loading from "../components/Loading";
import useApps from "../Hooks/useApps";
import { getInstalledApp } from "../utilities/addToLS";
import InstalledAppCard from "../components/InstalledAppCard";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState(getInstalledApp());
  const [sort, setSort] = useState("none");
  const { apps, loading } = useApps();
  const installedAppsNum = installedApps.map((id) => Number(id));
  const myInstalledApps = apps.filter((app) =>
    installedAppsNum.includes(app.id)
  );
  // console.log(myInstalledApps);

  const sortedApps = (() => {
    if (sort === "LowToHigh") {
      return [...myInstalledApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "HighToLow") {
      return [...myInstalledApps].sort((a, b) => b.downloads - a.downloads);
    } else return myInstalledApps;
  })();

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
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select"
        >
          <option value={"none"}>Sort By Downloads</option>
          <option value={"HighToLow"}>High to Low</option>
          <option value={"LowToHigh"}>Low to High</option>
        </select>
      </div>
      <div>
        {sortedApps.map((installedApp) => (
          <InstalledAppCard
            setInstalledApps={setInstalledApps}
            installedApps={installedApps}
            key={installedApp.id}
            installedApp={installedApp}
          />
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
