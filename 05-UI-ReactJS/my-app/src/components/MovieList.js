import React from 'react';

const MovieList = ({movies, handleRemoveMovie }) => {
  return(
    <div className="list">
      { movies.length ? 
        movies.map( ({name, year, duration, id}) => 
          <div className="movie" key={id}>
            <div className="movie-info">
              <p>Name: {name} Year: {year} Duration: {duration}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleRemoveMovie(id)}>x</button>
            </div>
          </div> ) 
          : 
          <div className="message">There's not movies</div>}
    </div>
  )
}

export default MovieList