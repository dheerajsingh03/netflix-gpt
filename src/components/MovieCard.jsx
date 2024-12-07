import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <div className="w-44 pr-4  ">
      <img
        src={IMG_CDN_URL + poster_path}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
