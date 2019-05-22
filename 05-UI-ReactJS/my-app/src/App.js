import React from 'react';
import Form from './components/Form';
import MovieList from './components/MovieList';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header>Movie List</header>
          <Form/>
          <MovieList/> 
      </div>
    )
  }
}
export default App;