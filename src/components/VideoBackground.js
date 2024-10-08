import {useSelector } from 'react-redux';
import useMoviTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
    
    useMoviTrailer(movieId);

    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
            title="YouTube video player" 
            allow="autoplay;" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground
