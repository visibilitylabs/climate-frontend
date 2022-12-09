import * as api from '../../api';
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, PLACE_ORDER } from './cartTypes';
import { toast } from 'react-toastify';

export const addCartItem = (item) => async(dispatch) => {
    try {
        // console.log('in reducer')
        toast.success('Item added to cart', {
            position: 'bottom-center',
            autoClose: 2000,
            closeOnClick: true,

        });
        dispatch({ type: ADD_ITEM, payload: item });
    } catch (error) {
        console.log(error);
    }
}

// export const removeItem = (id) => async(dispatch) => {
//     try {
//         await api.removeItem(id);
//         dispatch({ type: REMOVE_ITEM, payload: id });
//     } catch (error) {
//         console.log(error);
//     }
// }


export const updateCartItem = (cart) => async(dispatch) => {
    try {
        // console.log(cart);
        // const { data } = await api.updateCart(cart);

        dispatch({ type: UPDATE_ITEM, payload: cart });
    } catch (error) {
        console.log(error);
    }
}

export const placeOrder = (cart, callback) => async(dispatch) => {
    try {
        cart = {...cart, cartItems: cart.cartItems.map(item => ({ _id: item._id })) }
        const { data } = await api.placeOrder(cart);
        dispatch({ type: PLACE_ORDER, payload: cart });
        callback();
    } catch (error) {
        console.log(error);
    }
}