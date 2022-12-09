import { GET_ITEMS } from "./searchTypes";

const initialState = [];

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.payload;
        default:
            return state;
    }
}

export default searchReducer;