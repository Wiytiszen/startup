import React from 'react';
import { connect } from "react-redux";
import * as actions from '../redux/actionTypes';

class MovieList extends React.Component {

  render(){
  const { movies, removeMovie, editMovie } = this.props;
  return(
    <div className="list">
      {movies.length ? 
        movies.map( ({name, year, duration, id}) => 
          <div className="movie" key={id}>
            <div className="movie-info">
              <p><strong>Name:</strong> {name} <strong>Year:</strong> {year} <strong>Duration:</strong>{duration}</p>
            </div>
            <div className="buttons">
              <button onClick={() => removeMovie(id)}>x</button>
              <button onClick={() => editMovie({id, name, year, duration})}>Edit</button>
            </div>
          </div> ) 
          : 
          <div className="message">There's not movies</div>}
    </div>
  )
  }
}

const mapStateToProps = (state) => ({
      movies: state.movies, 
});
const mapDispatchToProps = (dispatch) => {
  return{
    removeMovie: (id)=> dispatch({type: actions.REMOVE_MOVIE, payload: {id}}),
    editMovie: (movie) => dispatch({type: actions.EDIT_MOVIE, payload: movie})
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);


/*

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

*/