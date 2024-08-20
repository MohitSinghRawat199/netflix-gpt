import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const dispatch = useDispatch();

  const [isSignInForm, setisSigninForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInFrom = () => {
    setisSigninForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // sign in and singh up user
    if (!isSignInForm) {
      //  Sign Up now

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: email.current.value, photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LQY6AAOZvnFPFRCGOn9-TwK5QN7IC7xBKQ&s"
          }).then(() => {
            // Profile updated!
            // ...
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,dispplayName:displayName,photoURL:photoURL}));
          
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
    else {
      // Sign In

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" "+errorMessage);
          
        });
    }
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_medium.jpg'
          alt='background' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
        className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full bg-gray-700' />}

        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700' />

        <input
          ref={password}
          type='Password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

        <button className='p-4 my-6 
        bg-red-700 w-full'
          onClick={handleButtonClick}
        >{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInFrom}>{isSignInForm ? "New to Netflix Sign Up Now" : "Already Register? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
