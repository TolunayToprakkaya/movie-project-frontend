import axios from "axios";

export const FETCH_CASTS_PENDING = "FETCH_CASTS_PENDING";
export const FETCH_CASTS_FULFILLED = "FETCH_CASTS_FULFILLED";
export const FETCH_CASTS_REJECTED = "FETCH_CASTS_REJECTED";

const header = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json"
};

export function fetchCasts() {
    return dispatch => {
        dispatch({
            type: "FETCH_CASTS",
            payload: axios.get(`/cast/fetchAllCastList`, {
                headers: header,
                data:{}
            }).then(response => response.data)
        })
    }
};