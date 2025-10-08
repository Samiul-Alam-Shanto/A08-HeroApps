import { Download, Star } from "lucide-react";
import React from "react";

const InstalledAppCard = ({ installedApp }) => {
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
  } = installedApp;
  return (
    <div className="flex items-center justify-between rounded-lg mt-4 bg-white p-4">
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
      <button className="btn bg-[#2fb683] text-white">Uninstall</button>
    </div>
  );
};

export default InstalledAppCard;
