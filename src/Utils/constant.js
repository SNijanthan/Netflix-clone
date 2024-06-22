export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_ICON =
  "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg";

export const TMDB_API = "618e252fbc07b061f9577d91abb390f5";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "tamil", name: "தமிழ்" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "español" },
  { identifier: "Japanese", name: "日本語" },
];

export const OPENAI_API = process.env.REACT_APP_OPENAI_API;
