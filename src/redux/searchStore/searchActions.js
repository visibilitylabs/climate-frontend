import * as api from '../../api';
import { SHOW_LOADER } from '../loader/loaderTypes';
import { GET_ITEMS } from './searchTypes';

export const getSearchResults = (searchTerm) => async(dispatch) => {
    try {
        dispatch({ type: SHOW_LOADER, payload: true });
        const { data } = await api.getSearchResults(searchTerm);
        dispatch({ type: GET_ITEMS, payload: data });
        dispatch({ type: SHOW_LOADER, payload: false });
    } catch (error) {
        console.log(error);
        dispatch({ type: SHOW_LOADER, payload: false });
    }
}