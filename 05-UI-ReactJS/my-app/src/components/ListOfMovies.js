import React from 'react';
import MovieItem from './Movies';

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      this.props.movies.map(movie=>
        <MovieItem 
        key={movie.id}  
        movie={movie}/>
    )
    );
  }
}
