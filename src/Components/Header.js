import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE, USER_ICON } from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const GptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, navigate to sign-in/signup page
      })
      .catch((error) => {
        // An error happened, navigate to error page
        navigate("/error");
      });
  };

  // We are doing this only once hence using useEffect with empty [] :
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });

    // unSubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center flex-col md:flex-row md:justify-between">
      <img
        alt="logo"
        src={NETFLIX_LOGO}
        className="md:w-44 w-28 md:mx-0 mx-auto"
      />
      {user ? (
        <div className="flex p-2 justify-evenly items-center">
          {/* {GptSearch ? (
            <select
              className="py-2 px-4 bg-gray-900 mr-5 rounded-lg text-white bg-opacity-70"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          ) : null}
          <button
            className="bg-indigo-700 text-white md:py-2 py-2 px-2 md:px-4 rounded-lg hover:bg-opacity-90 text-xs mr-10 md:mr-0"
            onClick={handleGptSearchClick}
          >
            {GptSearch ? "Homepage" : "GPT Search"}
          </button> */}
          <img
            alt="user-icon"
            src={USER_ICON}
            className="w-8 h-8 mx-4 rounded-lg hidden md:block"
          />
          <button
            className="p-1 bg-red-600 rounded-md hover:bg-red-700 text-white text-xs md:py-2 py-2 px-2 md:px-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
