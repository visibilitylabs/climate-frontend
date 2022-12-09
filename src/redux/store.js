import { createStore, applyMiddleware, configureStore } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

function loadState() {
    try {
        let serializedState = localStorage.getItem("blissData");

        if (serializedState === null) {
            return initializeState();
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return initializeState();
    }
}

function saveState(state) {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem("blissData", serializedState);

    } catch (err) {}
}

function initializeState() {
    return {
        cart: {
            cartItems: [],
            total: 0,
            discount: 0,
            maxDiscount: 0,
            shipping: 70,
            finalTotal: 0,
            modeOfPayment: 'COD',
            instructions: '',
            address: {
                name: '',
                phone: '',
                address: '',
                pin: '',
                email: '',

            },
            coupon: '',
            razorpay_payment_id: '',
        },
        search: [],
        loader: {
            showLoader: false
        }
    }
};


store.subscribe(() => {
    saveState(store.getState());

})

export default store;