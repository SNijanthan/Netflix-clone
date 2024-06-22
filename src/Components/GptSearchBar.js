import React, { useRef } from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResults } from "../Utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // Make an API call to GPT API and get movie results
  const handleGptSearchResult = async () => {
    // Making the query as clear as possible, So that we can get good results

    const textSearch = searchText.current.value;

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      textSearch +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example reslut: premalu, Manjumal boys, Leo, Aavesham, Don"; // Giving a good prompt to get results exactly how we want

    if (textSearch.length === 0) return null;

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = GptResults.choices?.[0]?.message?.content.split(",");
    // ["Permalu", "Leo", "Avatar", "manjumal Boys", "Star"] ---> Result of gptMovies

    // For each movie i will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    // [promise, promise, promise, promise, promise] - It will return only promise not a result since map function calls right away before API call done

    const tmdbResults = await Promise.all(promiseArray); // This Promise.all takes an array of promises and program will wait until all the promises gets resolved
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex justify-center pt-[40%] md:pt-[10%]">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 md:grid md:grid-cols-12 rounded-md bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchHolder}
          className=" m-4 p-2 md:p-4 md:m-4 placeholder:text-center placeholder:text-xs md:placeholder:text-xl rounded-md col-span-9 md:col-span-10 opacity-70 text-xs md:text-base"
          ref={searchText}
        />
        <button
          className="py-2 px-4 m-4 md:py-2 md:px4 md:m-4 bg-red-600 rounded-md hover:bg-red-700 text-white md:col-span-2 col-span-3 bg-opacity-85 md:text-base text-xs"
          onClick={handleGptSearchResult}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
