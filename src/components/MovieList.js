import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(title);
    console.log(movies);
    return (
        movies && <div className='px-6 bg-black text-white'>
            <h1 className='text-3xl py-4' >{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((movie) => <MovieCard key={movie.id} posterpath={movie.poster_path} />)}
                </div>
            </div>

        </div>
    )
}

export default MovieList
