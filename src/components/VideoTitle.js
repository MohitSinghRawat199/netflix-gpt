import React from 'react';



const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-t from-black w-screen aspect-video'>
      <h1 className='
      text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-2 px-10 text-lg rounded-lg hover:bg-opacity-50'>Play</button>
        <button className='mx-2 bg-gray-400 text-black p-2 px-10 text-lg bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
