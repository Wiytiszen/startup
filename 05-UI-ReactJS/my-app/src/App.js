import React from 'react';
import Form from './components/Form';
import MovieList from './components/MovieList';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      movies:[],
      isEditing: false,
      movieToEdit: null
    }

    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  addMovie(movie){
    const {isEditing, movies, movieToEdit} = this.state;
    if(isEditing){
      const index = movies.findIndex( movie => movie.id === movieToEdit.id);
      console.log(index);
      movies[index] = movie;
      movies[index].id = movieToEdit.id;
      this.setState({movies: movies, movieToEdit: null, isEditing: false});
    }else{
     this.setState( prevState => ({movies: [...prevState.movies, movie]}));
    }
  }

  removeMovie(id){
    this.setState(prevState => ({movies: prevState.movies.filter( movie => movie.id !== id)}));
  }

  editMovie(movie){
    this.setState({movieToEdit: movie, isEditing: true});
  }

  render(){
    const {movies, movieToEdit, isEditing} = this.state;
    return (
      <div className="App">
        <header>Movie List</header>
        <Form handleAddMovie={this.addMovie} movieToEdit={movieToEdit} isEditing={isEditing}/>
        <MovieList handleEditMovie={this.editMovie} movies={movies} handleRemoveMovie={this.removeMovie}/>
      </div>
    )
  }
}

export default App;
