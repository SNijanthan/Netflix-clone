import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  //Fetching trailer and updating store with trailer video data
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer"); // filter the video by type "TRAILER"
    const trailer = filterData.length ? filterData[0] : json.results[0]; // If "TRAILER" is not present play any video (teaser or Featurette)in the background
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
