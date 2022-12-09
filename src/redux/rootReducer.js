import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducer';
import loaderReducer from './loader/loaderReducer';
import searchReducer from './searchStore/searchReducer';


const rootReducer = combineReducers({
    cart: cartReducer,
    search: searchReducer,
    loader: loaderReducer
})

export default rootReducer;