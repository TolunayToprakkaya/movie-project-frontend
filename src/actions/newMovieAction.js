import axios from "axios";

export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_BY_ID_PENDING = "FETCH_MOVIE_BY_ID_PENDING";
export const FETCH_MOVIE_BY_ID_FULFILLED = "FETCH_MOVIE_BY_ID_FULFILLED";
export const FETCH_MOVIE_BY_ID_REJECTED = "FETCH_MOVIE_BY_ID_REJECTED";

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";

export function newMovieCreate({name, title, cover}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post(`/movie/createNewMovie`, {
                name,
                title,
                cover
            })
        })
    }
}

export function fetchMovieById(movieId) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIE_BY_ID",
            payload: axios.get(`/movie/inquireMovieById/${movieId}`, {
                data: {}
                }).then(response => response.data)
        })
    }
}

export function updateMovie({ movieId, name, title, cover}) {
    return dispatch => {
        dispatch({
            type: "UPDATE_MOVIE",
            payload: axios.put(`/movie/updateMovie/${movieId}`, {
                name,
                title,
                cover
            })
        })
    }
}