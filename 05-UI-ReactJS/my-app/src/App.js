import React from 'react';
import MovieList from './components/ListOfMovies';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies : [
        {id:0,title:"Up",duration :"80min"}
      ],
    }
  }
  render(){
    return(
    <div>
      <MovieList 
        movies={this.state.movies}
      />
    </div>
    );
  }
}
