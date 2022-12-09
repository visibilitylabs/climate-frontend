import { SHOW_LOADER } from "./loaderTypes";

const initialState = {
    showLoader: false
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, showLoader: action.payload };
        default:
            return state;
    }
}
export default loaderReducer;