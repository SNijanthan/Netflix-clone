import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../Utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          alt="img"
          src={BACKGROUND_IMG}
          className="h-screen object-cover md:h-full"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
