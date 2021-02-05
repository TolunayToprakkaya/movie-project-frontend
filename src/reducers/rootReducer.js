import {combineReducers} from "redux";
import movies from './moviesReducer';
import newMovie from './newMovieReducer';
import casts from "./cast/castsReducer";
import newCast from "./cast/newCastReducer";

export default combineReducers({
    movies,
    newMovie,
    casts,
    newCast
})