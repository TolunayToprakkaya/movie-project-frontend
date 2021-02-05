import {FETCH_CASTS_PENDING, FETCH_CASTS_FULFILLED, FETCH_CASTS_REJECTED} from "../../actions/cast/castsAction";

const initialState = {
    fetching: false,
    castList: [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        //FETCH_CASTS
        case FETCH_CASTS_PENDING:
            return {
                ...state,
                fetching: true
            }
        case FETCH_CASTS_FULFILLED:
            return {
                ...state,
                fetching: false,
                castList: action.payload
            }
        case FETCH_CASTS_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};