import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, UserIcon } from '../utils/constant';

const Header = () => {
const navigate = useNavigate();
const user = useSelector(store  => store.user);
const dispatch = useDispatch();


const handleSingOut =()=>{
  signOut(auth).then(() => {
  
  }).catch((error) => {

  });
}



useEffect(()=>{

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {

      const {uid,email,displayName,photoURL} = user;

      dispatch(addUser({uid:uid,email:email,dispplayName:displayName,photoURL:photoURL}));
      navigate("/browse");
      
    } else {
      // User is signed out
      // ...
    dispatch(removeUser());
    navigate("/");
    
    }
  });

  return ()=> unsubscribe();

},[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='logo'/>
      {user && <div className='flex'>
        <img className='w-12 h-12' src={UserIcon}
        alt='user'/>
        <button onClick={handleSingOut} className='font-bold text-white ml-3'>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header
