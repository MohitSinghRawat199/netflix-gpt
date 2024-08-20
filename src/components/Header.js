import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
const navigate = useNavigate();
const user = useSelector(store  => store.user);

const handleSingOut =()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 ' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo'/>
      {user && <div className='flex'>
        <img className='w-12 h-12' src='https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-07/64/movie-director-white-male-512.png'
        alt='user'/>
        <button onClick={handleSingOut} className='font-bold text-white ml-3'>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header
