import {NEW_MOVIE_PENDING, NEW_MOVIE_FULFILLED, NEW_MOVIE_REJECTED,
    FETCH_MOVIE_BY_ID_PENDING, FETCH_MOVIE_BY_ID_FULFILLED, FETCH_MOVIE_BY_ID_REJECTED,
    UPDATE_MOVIE_PENDING, UPDATE_MOVIE_FULFILLED, UPDATE_MOVIE_REJECTED} from "../actions/newMovieAction";

const initialState = {
    fetching: false,
    done: false,
    movie: {
        fetching: false
    },
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        //NEW_MOVIE
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        //FETCH_MOVIE_BY_ID
        case FETCH_MOVIE_BY_ID_PENDING:
            return {
                ...state,
                movie: {
                    fetching: true
                }
            }
        case FETCH_MOVIE_BY_ID_FULFILLED:
            return {
                ...state,
                movie: {
                    ...action.payload,
                    fetching: false
                }
            }
        case FETCH_MOVIE_BY_ID_REJECTED:
            return {
                ...state,
                movie: {
                    fetching: false
                }
            }
        //UPDATE_MOVIE
        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}