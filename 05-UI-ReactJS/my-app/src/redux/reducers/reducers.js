import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../actionTypes";

const initialState = {
    movies:[{id: 0, name: 'Terminator', duration: '120', year: '1983'}],
    isEditing: false,
    movieToEdit: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE: {
      const {movie} = action.payload;
      const {isEditing} = state;
      const newArray = state.movies;
      if (isEditing){
        const index = state.movies.findIndex( movieToEdit => movieToEdit.id === movie.id);
        console.log(index);
        newArray[index] = movie;
        return Object.assign({}, state, { movies: newArray, isEditing: false, movieToEdit: null});
      }else{
        return {
          ...state,
          movies:[...state.movies,movie],
        }
      }
      
    }
    case REMOVE_MOVIE: {
      const { id } = action.payload;
      return {
        ...state,
        movies: state.movies.filter( movie => movie.id !== id)
      }
    }
    case EDIT_MOVIE: {
      const movieToEdit = action.payload;
      return {
        ...state,
        isEditing: true,
        movieToEdit
      }
    }
    default:
      return state;
    };
  }
