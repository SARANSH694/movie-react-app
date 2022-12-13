import React from 'react'
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom'

const Movie = () => {

  const { movie } = useGlobalContext()

  return (
    <>
    <section className='movie-page'>
      <div className='grid grid-4-col'>
      {movie.map((currentMovie) => {
        const {imdbID , Title , Poster } = currentMovie

        const movieName = Title.substring(0,15)
        const len = movieName.length

      return (
        <NavLink to = {`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{len >= 15 ? `${movieName}...` : movieName}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
        </NavLink>
      )
    })}
      </div>
    </section>
   
    </>
  )
}

export default Movie