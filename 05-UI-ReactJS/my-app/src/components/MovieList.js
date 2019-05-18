import React from 'react';

const MovieList = ({movies, handleRemoveMovie, handleEditMovie }) => {
  return(
    <div className="list">
      { movies.length ? 
        movies.map( ({name, year, duration, id}) => 
          <div className="movie" key={id}>
            <div className="movie-info">
              <p><strong>Name:</strong> {name} <strong>Year:</strong> {year} <strong>Duration:</strong>{duration}</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleRemoveMovie(id)}>x</button>
              <button onClick={() => handleEditMovie({id, name, year, duration})}>Edit</button>
            </div>
          </div> ) 
          : 
          <div className="message">There's not movies</div>}
    </div>
  )
}

export default MovieList