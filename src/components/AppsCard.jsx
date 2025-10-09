import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { id, title, downloads, ratingAvg, image } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 p-2 shadow-sm hover:scale-110 transition ease-in-out">
        <figure className="rounded-lg">
          <img className="w-full h-[250px] " src={image} alt="Logo" />
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
    </Link>
  );
};

export default AppsCard;
