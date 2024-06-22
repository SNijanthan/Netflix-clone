import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

// There are 2 ways to get video ID
// 1. Using useState 2. Using Redux
// Since already we are using redux, we created another action as "addTrailerVideo" and we are using it to retrieve trailers dynamically

const VideoPlayback = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoPlayback;
