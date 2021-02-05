import axios from "axios";

export const NEW_CAST_PENDING = "NEW_CAST_PENDING";
export const NEW_CAST_FULFILLED = "NEW_CAST_FULFILLED";
export const NEW_CAST_REJECTED = "NEW_CAST_REJECTED";

export function newCastCreate({name, lastname, photo, birthday, birthplace, biography, isActor, isActress}) {
    return dispatch => {
        dispatch({
            type: "NEW_CAST",
            payload: axios.post(`/cast/createNewCast`, {
                name, lastname, photo, birthday, birthplace, biography, isActor, isActress
            })
        })
    }
}