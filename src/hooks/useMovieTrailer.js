import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,

      API_OPTIONS
    );

    const json = await data.json();

    const trailers = json.results.filter((video) => video.type === "Trailer");

    const trailer = trailers[0];

    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};
