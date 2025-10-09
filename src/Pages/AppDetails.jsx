import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Download, HandHeart, Star } from "lucide-react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import AppDetailsError from "./ErrorPages/AppDetailsError";
import Loading from "../components/Loading";
import { addToInstallLS, getInstalledApp } from "../utilities/addToLS";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [installedApps, setInstalledApps] = useState(getInstalledApp());

  const { apps } = useApps();
  const { id } = useParams();

  const app = apps.find((p) => p.id == id);

  if (!app) {
    return <AppDetailsError />;
  }
  const {
    title,
    downloads,
    ratingAvg,
    image,
    companyName,
    description,
    size,
    reviews,
    ratings,
  } = app;

  const handleInstallBtn = (id) => {
    toast.success(`${title} Installed`);
    addToInstallLS(id);
    setInstalledApps(getInstalledApp());
  };

  const isInstalled = installedApps.includes(id);

  return (
    <div className="container mx-auto px-2 py-8">
      {/* app details */}
      <div className="flex flex-col  sm:flex-row gap-5">
        <figure className="mx-auto bg-white p-10 w-[270px] h-[270px]">
          <img src={image} alt="" />
        </figure>
        <div className="w-full flex flex-col items-start text-center  sm:text-left">
          <h2 className="font-bold text-3xl">{title}</h2>
          <h4 className="text-gray-500">
            Developed By <span className="text-gradient">{companyName}</span>
          </h4>
          <hr className="text-gray-400 my-5 w-full" />
          <div className="stats stats-horizontal">
            <div className="stat text-left pl-0">
              <Download
                size={40}
                color="#2fb683"
                strokeWidth={5}
                absoluteStrokeWidth
              />
              <div className="stat-title ">Downloads</div>
              <div className="stat-value ">
                {" "}
                {new Intl.NumberFormat("en", { notation: "compact" }).format(
                  downloads
                )}
              </div>
            </div>
            <div className="stat text-left">
              <Star
                size={40}
                color="#ff8811"
                strokeWidth={6}
                absoluteStrokeWidth
              />
              <div className="stat-title ">Average Ratings</div>
              <div className="stat-value ">{ratingAvg}</div>
            </div>
            <div className="stat text-left">
              <HandHeart
                size={40}
                color="#632ee3"
                strokeWidth={4}
                absoluteStrokeWidth
              />
              <div className="stat-title ">Total Reviews</div>
              <div className="stat-value ">
                {" "}
                {new Intl.NumberFormat("en", { notation: "compact" }).format(
                  reviews
                )}
              </div>
            </div>
          </div>
          <button
            disabled={isInstalled}
            onClick={() => handleInstallBtn(id)}
            className={`py-1 px-2 rounded-sm text-white ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] cursor-pointer"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <hr className="text-gray-400 my-5  w-full" />
      {/* chart */}
      <div className="h-96  my-5">
        <h2 className="font-bold text-3xl pb-5">Ratings</h2>
        <ResponsiveContainer>
          <BarChart data={ratings} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />

            <Tooltip />
            <Bar dataKey="count" radius={6}>
              {ratings.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.count > 100
                      ? "#7c46ea"
                      : entry.count > 50
                      ? "#9f62f2"
                      : "#c4a4f7"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr className="text-gray-400 mt-20" />

      {/* Description */}
      <div>
        <h4 className="font-bold text-3xl py-5">Description</h4>
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
