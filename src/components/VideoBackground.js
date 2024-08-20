import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant'

const VideoBackground = ({ movieId }) => {
    const [trailerId,setTrailerId]=useState(null);


    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/533535/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerId(trailer.key);

    };


    useEffect(() => {
        getMovieVideo();
    }, [])



    return (
        <div>
            <iframe
            src={"https://www.youtube.com/embed/"+trailerId}
            title="YouTube video player" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground
