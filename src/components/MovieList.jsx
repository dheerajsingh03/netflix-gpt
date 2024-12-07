import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="py-4 text-3xl text-white">{title}</h1>
      <div className="flex overflow-scroll ">
        <div className="flex  ">
          {movies?.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
