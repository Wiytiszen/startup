import { ADD_MOVIE,REMOVE_MOVIE,EDIT_MOVIE} from './actionTypes';

let nextId = 0 ;

export const addMovie = (movie) =>({
  type:ADD_MOVIE,
  payload:{
    movie
  }
});

export const editMovie = (movie) =>({
  type:EDIT_MOVIE,
  payload: movie
});

export const removeMovie = (movie) =>({
  type:REMOVE_MOVIE,
  payload: movie
});