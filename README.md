# NETFLIX CLONE

# THINGS COMPLETED

- Create React App
- Configured tailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app to production
- Create SignUp User Account
- Implement SignIn user API (Firebase)
- Created Redux store with userSlice
- Implemented Sign Out
- Update Profile API (Firebase)
- Fetch movies from TMDB Movies
- Bug Fix : Sign Up user displayName and profile picture update
- Bug Fix: If the user is not logged-in redirect to "/" login page (onAuthStateChanged API call moved to HEADER since its presented in both sign-in/browse)
- Bug Fix: If the user is logged-in redirect to "/browse" browse page (All the navigate part will be taken care in HEADER itself not anywhere else)
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file
- Registered TMDB APP and created an app & get access token
- Get data from TMDB "NOW PLAYING" movies list API
- Created customer hook for "Now playing Movies"
- Created movieSlice
- Update store with movies Data
- Fetch Data for trailer video
- Update store with trailer Video Data
- Embedded the youtube video and make it auto-play and mute
- tailwind classes to make main container look awesome
- Built Secondary Container
- Built Movie List
- Built Movie Card
- TMDB Image CDN URL
- Built custom hooks: usePopularMovies, useUpcomingMovies, useNowPlayingMovies
- GPT Search Page
- GPT Search Bar
- Multi-language feature in GPT Search bar
- Get openAI API key
- Gpt search API call
- Fetched GPT movie Suggestions from TMDB
- Created GPT Slice and added data
- Reused movie List component to make movie suggestion container
- Added .env file for securing API keys
- Added .env file to gitignore
- Made the website responsive

# STRUCTURE OF THE COMPLETE APP

- Login/SignUp Page

  - Sign In / Sign up form
  - Redirect to browse page

- Browse (/browse) (After login successful)

  - Header
  - Main Movie
  - Trailer in Background
  - Title and Description
  - Movies Suggestions in list - MoviesList (n number of movies)

- Netflix GPT

  - SearchBar
  - Movie Suggestions

# STRUCTURE OF THE BROWSE PAGE

- Divided as 2 sections
  - Main container
    - Video Background
    - Movie Title and description
  - Second Container
    - MoviesList (Different categories)
      - Cards (Contain multiple movies as card)

# STRUCTURE OF SECONDARY CONTAINER

- MoviesList - Popular
  - Multiple Movies
- MoviesList - Now Playing
  - Multiple Movies
- MoviesList - Trending
  - Multiple Movies
- MoviesList - Horror
  - Multiple Movies
