import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, PLACE_ORDER } from "./cartTypes";

// {
//     _id: 1,
//     title: 'The Alchemist',
//     currentPrice: 200,
//     quantity: 1,
//     oldPrice: 500,
// }

const initialState = {
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
};

const minFreeShipping = 499;

// cartItem: {
//     book_id,
//     quantity,
//     price
// }

const cartReducer = (state = initialState, action) => {
    let subTotal, discount, finalTotal;
    switch (action.type) {
        case ADD_ITEM:
            // console.log('add to cart', action.payload);

            subTotal = state.total + action.payload.currentPrice;
            discount = subTotal * state.discount / 100;
            if (state.subTotal > minFreeShipping) {
                state.shipping = 0;
            } else {
                action.payload.modeOfPayment == 'COD' ? action.payload.shipping = 70 : action.payload.shipping = 40;
            }
            finalTotal = subTotal + state.shipping - (discount < state.maxDiscount ? discount : state.maxDiscount);
            // console.log(state)
            const hasItem = state.cartItems.find(item => item._id === action.payload._id);
            if (hasItem) {
                subTotal = state.total + action.payload.currentPrice;
                discount = subTotal * state.discount / 100;
                finalTotal = subTotal + state.shipping - (discount < state.maxDiscount ? discount : state.maxDiscount);

                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? {...item, quantity: item.quantity + 1 } : item),
                    total: subTotal,
                    finalTotal: finalTotal
                }
            }
            return {

                ...state,
                cartItems: [...state.cartItems, action.payload],
                total: subTotal,
                discount: discount,
                finalTotal: finalTotal,
            };
        case UPDATE_ITEM:
            // console.log(action.payload, "NEW PAYLOAD");
            // console.log(action.payload)
            if (action.payload.cartItems == []) {
                action.payload.total = 0;
            }
            if (action.payload.total > minFreeShipping) {
                action.payload.shipping = 0;
            } else {
                action.payload.modeOfPayment == 'COD' ? action.payload.shipping = 70 : action.payload.shipping = 40;
            }
            subTotal = action.payload.total + action.payload.shipping;
            discount = subTotal * action.payload.discount / 100;
            finalTotal = subTotal - (discount < action.payload.maxDiscount ? discount : action.payload.maxDiscount);
            return {
                ...action.payload,
                finalTotal: finalTotal
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item._id !== action.payload._id),
            };
        case PLACE_ORDER:
            return {
                ...initialState,
                cartItems: [],
                address: state.address
            };
        default:
            return state;
    }
};

export default cartReducer;