import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


  const movies = useSelector((store) => store.movies);

  return (
    movies?.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>  
      <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topMovies}/>
      <MovieList title={"UpComing Movies"} movies={movies.upComingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryContainer
