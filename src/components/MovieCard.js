import React from 'react'

function MovieCard({ movie }) {
    return (
        <div className='card'>
            <img src={movie.posterurl} />
            <p>{movie.name}</p>
        </div>
    )
}

export default MovieCard