import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topMovies = useSelector((store) => store.movies.topRatedMovies);
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topMovies && topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
