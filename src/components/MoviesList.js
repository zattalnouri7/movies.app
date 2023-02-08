import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({ movies, text, rate }) {
  return (
    <div className='box'>
      {movies.filter((el) => el.name.toUpperCase().includes(text.toUpperCase()) && el.rating >= rate).map((el) => <MovieCard movie={el} />).reverse()}
    </div>
  )
}

export default MoviesList