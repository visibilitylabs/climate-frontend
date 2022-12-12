import axios from 'axios'
import { getUserId } from '../common/userIdService';

// const url = 'https://beta.blissbookstore.in/climate';
const fallbackUrl = 'https://zippy-scythe-energy.glitch.me';
const url = 'https://beta.blissbookstore.in/climate';

let userId = getUserId();

export const getBooksPaginated = (pageNo, pageSize) => axios.get(`${url}/products?pageNo=${pageNo}&pageSize=${pageSize}`);
// export const getBooksBySearch=(searchQuery)=>axios.get(`${url}/books/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const updateCart = (cart) => axios.post(`${url}/cart`, cart);

export const getSearchResults = (searchTerm) => axios.get(`${url}/products/search/${searchTerm}`);

export const placeOrder = (cart) => axios.post(`${url}/orders`, {...cart, userId });

export const getCoupon = (coupon) => axios.get(`${url}/coupons/code/${coupon}`);

export const getRazorpayKey = () => axios.get(`${url}/orders/razorpay`);

export const logEvent = () => axios.post(`${fallbackUrl}/event`, { userId });