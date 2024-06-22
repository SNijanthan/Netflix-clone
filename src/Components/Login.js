import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validation";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BACKGROUND_IMG, USER_ICON } from "../Utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: USER_ICON,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="img"
          src={BACKGROUND_IMG}
          className="h-screen object-cover md:h-auto"
        />
      </div>
      <form
        className="absolute bg-black md:w-3/12 w-full p-12 md:my-36 my-20 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-semibold md:text-3xl text-lg py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? null : (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 bg-gray-500 w-full rounded-md placeholder-gray-400 text-sm bg-opacity-70"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-3 my-4 bg-gray-500 w-full rounded-md placeholder-gray-400 text-sm bg-opacity-70"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-500 rounded-md placeholder-gray-400 text-sm bg-opacity-70"
        />
        <p className="text-red-600 text-sm py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-600 rounded-md w-full hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-3 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
