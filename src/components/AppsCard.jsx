import { Download, Star } from "lucide-react";
import React from "react";

const AppsCard = ({ app }) => {
  console.log(app);

  const { title, downloads, ratingAvg, image } = app;
  return (
    <div className="card bg-base-100 p-2 shadow-sm">
      <figure className="rounded-lg">
        <img
          className="w-full h-[250px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <div className="badge font-bold text-green-400 bg-green-100">
            <Download size={16} absoluteStrokeWidth />
            {new Intl.NumberFormat("en", { notation: "compact" }).format(
              downloads
            )}
          </div>
          <div className="badge bg-orange-100 text-orange-500">
            <Star size={16} absoluteStrokeWidth />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
