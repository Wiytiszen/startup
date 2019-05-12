import React from 'react';
import ListOfMovies from './components/ListOfMovies';
import CreateMovie from './components/CreateMovie';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <CreateMovie />
        <ListOfMovies />
      </div>
    );
  }
}