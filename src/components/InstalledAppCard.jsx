import { Download, Star } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const InstalledAppCard = ({
  installedApp,
  setInstalledApps,
  installedApps,
}) => {
  const { id, title, downloads, ratingAvg, image, size } = installedApp;

  const handleUninstall = (appId) => {
    const installedAppsNum = installedApps.map((id) => Number(id));
    const updatedInstalledApps = installedAppsNum.filter(
      (installedAppId) => installedAppId !== appId
    );
    const updatedInstalledAppsSTR = JSON.stringify(updatedInstalledApps);
    localStorage.setItem("appList", updatedInstalledAppsSTR);
    setInstalledApps(updatedInstalledApps);
    toast.success(`${title} Uninstalled`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between rounded-lg mt-4 bg-white p-4">
      <div className="flex gap-5 items-center">
        <figure className="bg-gray-200 p-2 rounded-lg">
          <img className="w-[80px] h-[80px]" src={image} alt="" />
        </figure>
        <div>
          <h2 className="font-bold text-xl">{title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5 font-semibold text-[#2fb683]">
              <Download size={16} strokeWidth={3} absoluteStrokeWidth />
              {new Intl.NumberFormat("en", { notation: "compact" }).format(
                downloads
              )}
            </div>
            <div className="flex items-center gap-0.5 font-semibold text-[#ff8811]">
              <Star size={16} strokeWidth={3} absoluteStrokeWidth />
              {ratingAvg}
            </div>
            <div className="text-gray-500 font-semibold">{size}MB</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(id)}
        className="btn mt-2 sm:mt-0   bg-[#2fb683] text-white "
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
