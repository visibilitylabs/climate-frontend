import React, { useEffect, useState } from 'react'
import CartItem from '../../component/CartItem/CartItem'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux';
import { placeOrder, updateCartItem } from '../../redux/cart/cartActions';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import Coupon from '../../component/Coupon/Coupon';
import * as api from '../../api/index';
function Cart() {

    const dispatch = useDispatch();
    let state = useSelector(state => state.cart);
    const [instructions, setInstructions] = useState(state.instructions);
    const [address, setAddress] = useState(state.address);
    const [editMode, setEditMode] = useState(isAddressEmpty()?true:false);
    const paymentModeCod="COD", paymentModeOnline="ONLINE";
    const navigate=useNavigate();
    function updateQuantity(_id, operator)
    {
        // console.log(_id, operator, state);
        const newState=state;
        let itemIndex=state.cartItems.findIndex(item=>item._id===_id);
        if(itemIndex===-1)
        {
            return;
        }
        newState.total-=newState.cartItems[itemIndex].currentPrice*newState.cartItems[itemIndex].quantity;
        newState.cartItems[itemIndex].quantity+=operator;
        if(newState.cartItems[itemIndex].quantity===0)
        {
            newState.cartItems.splice(itemIndex, 1);
            // console.log(newState.cartItems);
        }
        else
        newState.total+=newState.cartItems[itemIndex].quantity*+newState.cartItems[itemIndex].currentPrice;
        // newState.finalTotal=newState.total-(newState.total*newState.discount/100<newState.maxDiscount?newState.total*newState.discount/100:newState.maxDiscount);
        // console.log(newState.total)
        // console.log(state);

        dispatch(updateCartItem(newState));
    }
    function navigateToThankyou()
    {
        navigate('/thankyou');
    }
    function updatePaymentMode(mode)
    {
        const newState=state;
        newState.modeOfPayment=mode;
        if(mode===paymentModeCod)
        {
            newState.shipping=70;
        }
        else
        {
            newState.shipping=40;
        }
        dispatch(updateCartItem(newState));
        toast.success("Payment mode Updated", 
        {
            position: "bottom-center",
        }
        );
    }

    function updateInstruction()
    {
        const newState=state;
        newState.instructions=instructions;
        dispatch(updateCartItem(newState));
        toast.success("Instructions Updated",
        {
            position: "bottom-center",
        }
        );
    }
    
    function updateAddress()
    {
        if(isAddressEmpty()||isAddressUnusable())
        {
            toast.error("Please enter all the fields", 
            {
                position: "bottom-center",
            }
            );
            return;
        }
        const newState=state;
        newState.address=address;
        setEditMode(false);
        dispatch(updateCartItem(newState));
        toast.success("Address Updated",
        {
            position: "bottom-center",
        }
        );
    }

    function isAddressEmpty()
    {
        // console.log(address.name===""&&address.phone===""&&address.pin===""&&address.address==="")
        // if(state.address.name===""||state.address.phone===""||state.address.pin===""||state.address.address==="")
        // return true;
        return address.name===""&&address.phone===""&&address.pin===""&&address.address==="";
    }
    function isAddressUnusable(){
        return address.name===""||address.phone===""||address.pin===""||address.address==="";
    }
    function isAddressStateUnusable()
    {
        return state.address.name===""||state.address.phone===""||state.address.pin===""||state.address.address==="";
    }
    // console.log(editMode)
    function onPlaceOrder(){
        if(state.cartItems==[])
        {
            toast.error("Cart is Empty",
            {
                position: "bottom-center",
            }
            );
            return;
        }
        if(isAddressStateUnusable())
        {
            toast.error("Please add address",
            {
                position: "bottom-center",
            }
            );
            return;
        }
        // dispatch(placeOrder(state, navigateToThankyou));
        checkoutHandler();
    }
    let subTotal = state.total;
    let discount = subTotal * state.discount / 100;

    async function  checkoutHandler()
    {
        // implement razorpay checkout 

        if(state.modeOfPayment===paymentModeCod)
        {
            dispatch(placeOrder(state, navigateToThankyou));
        }
        else
        {
            // const {data:{key}}=await api.getRazorpayKey();
            const key="rzp_live_cTLFttoHPjPu67";
            if(!key)
            {
                toast.error("Something went wrong",
                {
                    position: "bottom-center",
                }
                );
                return;
            }
            // console.log("online");
            console.log(key);
            const options = {
                key: key,
                amount: state.total*100,
                currency: "INR",
                name: state.address.name,
                description: "Pay Online",
                // image: "https://picsum.photos/200",
                handler: function (response){
                    // console.log(response);
                    console.log(response);
                    state.razorpay_payment_id=response.razorpay_payment_id;
                    dispatch(placeOrder(state, navigateToThankyou));
                },
                prefill: {
                    name: state.address.name,
                    email: state.address.email,
                    contact: state.address.phone,
                },
                notes: {
                    address: state.address.address,
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();            
        }

    }

    return (
        <div className='padded-container'>
            {/* <div className="enjoy-free-shipping">
                <div className="enjoy-free-shipping-text">
                    <h1>Enjoy Free Shipping</h1>
                    <p>On all orders above Rs. 500</p>
                </div>

            </div> */}
            <div className="cart-container">
                {/* <div className="cart-heading">Cart</div> */}
                <div className="cart-sub-container ">
                    <div className="left-panel pb-5">
                        <div className='checkout-heading'>
                            <span className='heading-text-checkout'>Checkout</span>
                            <span className='btn btn-primary' >Delivery</span>
                        </div>
                       <Coupon cartData={state}></Coupon>
                        {/* todo: add coupon logic and state such that when there's no coupon added, it closes the accordion of input */}
                        <div className="address-container p-4">
                            <div className="address-sub-container">
                            <div className="address-heading fs-4">Shipping Details</div>
                            {editMode?
                            (state.address!=address||isAddressEmpty()?
                                <button className='add-order-instruction' onClick={()=>updateAddress()} >{isAddressEmpty()?"Add":"Update"}</button>
                                :
                                '')
                            :
                            <button className='add-order-instruction' onClick={()=>setEditMode(true)} >Edit</button>}
                            </div>
                            <div className="address-input-container name-input">
                                <input type="text" placeholder="Name" value={address.name} disabled={!editMode} onChange={(e)=>{setAddress({...address,name:e.target.value} )}}  />
                            </div>
                            <div className="address-input-container complete-address">
                                <input type="text" placeholder="Complete Address" value={address.address}disabled={!editMode} onChange={(e)=>{setAddress({...address,address:e.target.value} )}}/>
                            </div>
                            <div className="address-input-container pincode-input">
                                <input type="text" placeholder="Pincode"value={address.pin} disabled={!editMode} onChange={(e)=>{setAddress({...address,pin:e.target.value} )}}/>
                            </div>
                            <div className="address-input-container phone-input">
                                <input type="text" placeholder="Phone" value={address.phone}disabled={!editMode} onChange={(e)=>{setAddress({...address,phone:e.target.value} )}}/>
                            </div>
                            <div className="address-input-container email-input">
                                <input type="text" placeholder="Email" value={address.email}disabled={!editMode} onChange={(e)=>{setAddress({...address,email:e.target.value} )}}/>
                            </div>
                        </div>
                        <div className="order-instructions-container p-4">
                            <div className="order-instructions-sub-container">
                            <div className="order-instructions-heading">Order Instructions</div>
                            {(instructions!==state.instructions||instructions=='')&&<button className='add-order-instruction' onClick={()=>updateInstruction()} >{state.instructions==''?"Add":"Update"}</button>}
                            </div>
                            <div className="order-instructions-input-container">
                                <textarea placeholder="Enter any special instructions here" onChange={(e)=>{setInstructions(e.target.value)}} value={instructions}/>
                                </div>
                        </div>
                    </div>
                    {
                        state.cartItems.length>0&&<div className="right-panel">
                        <div className="order-summary">Order Summary</div>
                        <div className="cart-items-container">
                            {/* {console.log(state.cartItems, "Cart is coming")} */}
                            {state.cartItems.map(item=><CartItem key={item._id} data={item} updateQuantity={updateQuantity}/>)}
                                    </div>
                                    <div className="final-price-container">
                                            <div className="final-price-text">Subtotal</div>
                                            <div className="final-price">₹ {state.total}</div>
                                    </div>
                                    {
                                        state.discount>0&&
                                        <div className="final-price-container">
                                                <div className="final-price-text">Discount</div>
                                                <div className="final-price cart-item-discount">- ₹{(discount < state.maxDiscount ? discount : state.maxDiscount)}</div>
                                        </div>
                                    }
                                    <div className="payment-method">
                                        <div className="payment-method-heading">Payment Method</div>
                                        <div className="payment-method-options">
                                            <div className="payment-method-option custom-control custom-radio ">
                                                <input onChange={()=>updatePaymentMode(paymentModeCod)} type="radio" name="payment-method" checked={state.modeOfPayment==paymentModeCod} id="paymentModeCod"/>
                                                <label className="custom-control-label" htmlFor="paymentModeCod">
                                                    Cash on Delivery</label>
                                                </div>
                                                <div className="payment-method-option custom-control custom-radio ">
                                                <input onChange={()=>updatePaymentMode(paymentModeOnline)} type="radio" name="payment-method" checked={state.modeOfPayment==paymentModeOnline} id="paymentModeOnline"/>
                                                <label className="custom-control-label" htmlFor="paymentModeOnline">
                                                    Pay Online</label>
                                                </div>
                                                </div>
                                    </div>
                                    <div className="final-price-container">
                                            <div className="final-price-text">Shipping</div>
                                            <div className="final-price">{state.shipping>0?"₹ "+state.shipping:"FREE"}</div>
                                    </div>
                                    <div className="place-order-div">
                                        <div className="grand-total">
                                            <div className="grand-total-text">Grand Total</div>
                                            <div className="grand-total-price">₹ {state.finalTotal}</div>
                                        </div>
                                        <div className="place-order-button">
                                            <button className='btn-primary' onClick={()=>onPlaceOrder()} >Place Order</button>
                                            
                                            
                                            </div>

                                    </div>
                                    </div>
}
{
    state.cartItems.length==0&&<div className="right-panel empty-cart-panel">
        <img src="https://p.kindpng.com/picc/s/714-7147174_png-file-svg-transparent-background-shopping-cart-icon.png" alt="" />
        <div className="empty-cart-text">Your cart is empty</div>
        <Link to="/store">
            <button>Go To Store</button>
        </Link>
    </div>
}
                                    </div>
                                    
                                    </div>
                    </div>
                    )
}

export default Cart