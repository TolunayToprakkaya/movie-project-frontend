import axios from 'axios';

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
}

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get(`/movie/fetchAllMovieList`,{
                headers: headers,
                data: {}
                }).then(response => response.data)
        })
    }
}

export function deleteMovie(movieId) {
    return dispatch => {
        dispatch({
            type: "DELETE_MOVIE",
            payload: axios.delete(`/movie/deleteMovieById/${movieId}`, {
                headers: headers,
                data: {}
                }).then(response => Object.assign({}, response, { movieId }))
        })
    }
}

/*
export function fetchMovies() {
    return async dispatch => {
        const response = await axios.get(`/movie/fetchAllMovieList`, {
            headers: headers,
            data: {}
        }).catch(error => console.log("Action/moviesAction.js -> error -> ", error));

        console.log("Action/moviesAction.js -> response -> ", response);

        dispatch({
            type: "FETCH_MOVIES",
            payload: response.data,
        });
    }
}
 */

/*
export function fetchMovies() {
    return dispatch => {
        axios.get(`/movie/fetchAllMovieList`, {
            headers: headers,
            data: {}
            })
            .then(response => console.log("Action/moviesAction.js -> response -> ", response))
            .then(response => response.data)
            .then(data => dispatch({
                type: "FETCH_MOVIES",
                payload: data
            }))
            .catch(error => console.log("Action/moviesAction.js -> error -> ", error));
    }
}
*/

/*
import axios from "axios";

const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
};

export function fetchMovies() {
    console.log("action run...");
    return async (dispatch) => {
        console.log("async action run..");

        const response = await axios.get(`/movie/fetchAllMovieList`, {
            headers: headers,
            data: {}
        });

        console.log(response.data);

        dispatch({
            type: "FETCH_MOVIES",
            payload: response.data,
        });
    };
}
*/