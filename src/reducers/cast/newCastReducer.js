import {NEW_CAST_PENDING, NEW_CAST_FULFILLED, NEW_CAST_REJECTED} from "../../actions/cast/newCastAction";

const initialState = {
    fetching: false,
    done: false,
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        //NEW_CAST
        case NEW_CAST_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_CAST_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            }
        case NEW_CAST_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}