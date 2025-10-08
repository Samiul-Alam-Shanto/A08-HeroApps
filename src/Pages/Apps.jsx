import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../components/AppsCard";
import NoAppFound from "./ErrorPages/NoAppFound";
import Loading from "../components/Loading";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");

  if (loading) {
    return <Loading />;
  }

  const word = search.toLocaleLowerCase().replace(/\s+/g, "");
  const filteredApps = apps.filter((singleApp) =>
    singleApp.title.toLocaleLowerCase().includes(word)
  );

  const searchedApps = word ? filteredApps : apps;

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="flex flex-col justify-between items-center pb-10">
        <h2 className="font-bold text-4xl">Our All Applications</h2>
        <p className="text-gray-400 pt-1">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">({filteredApps.length}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-2 ">
        {searchedApps.length > 0 ? (
          searchedApps.map((app) => <AppsCard key={app.id} app={app} />)
        ) : (
          <NoAppFound />
        )}
      </div>
    </div>
  );
};

export default Apps;
