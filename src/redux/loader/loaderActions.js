import { SHOW_LOADER } from "./loaderTypes";

export const setLoading = (showLoader) => async(dispatch) => {
    try {
        dispatch({ type: SHOW_LOADER, payload: showLoader });
    } catch (error) {
        console.log(error);
    }
}