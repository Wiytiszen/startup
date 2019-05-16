import React from 'react';
import MovieList from './components/ListOfMovies';
import CreateMovie from './components/CreateMovie';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies : [
        {id:0,title:"Up",duration :"80min"}
      ],
    }
    this.createMovie = this.createMovie.bind(this);
  }
  createMovie(movie){

    const {title,duration} = movie;
    if(title && duration){
      this.setState({
        movies: [ ...this.state.movies,{id:0,title,duration}]
      }) ;
    }
  }
  render(){
    return(
    <div>
      <CreateMovie createMovie ={this.createMovie}/>
      <MovieList 
        movies={this.state.movies}
      />
    </div>
    );
  }
}
