import React from 'react';
import Form from './components/Form';
import MovieList from './components/MovieList';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      movies:[],
    }

    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
  }

  addMovie(movie){
    const {movies} = this.state;
     this.setState( prevState => ({movies: [...prevState.movies, movie]}));
  }
  removeMovie(id){
    this.setState(prevState => ({movies: prevState.movies.filter( movie => movie.id !== id)}));
  }

  render(){
    const {movies} = this.state;
    return (
      <div className="App">
        <header>Movie List</header>
        <Form handleAddMovie={this.addMovie}/>
        <MovieList movies={movies} handleRemoveMovie={this.removeMovie}/>
      </div>
    )
  }
}

export default App;
