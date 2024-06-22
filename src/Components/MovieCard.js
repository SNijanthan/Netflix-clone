import React from "react";
import { IMAGE_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 hover:scale-105">
      <img alt="Poster" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
