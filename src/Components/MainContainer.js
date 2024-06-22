import React from "react";
import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoPlayback from "./VideoPlayback";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early return (if(!movies) return)
  if (movies === null) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="md:pt-0 pt-[20%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlayback movieId={id} />
    </div>
  );
};

export default MainContainer;
