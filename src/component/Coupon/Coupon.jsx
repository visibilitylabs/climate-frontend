import React from 'react'
import { useState } from 'react'
import './Coupon.css'
import { getCoupon } from '../../api';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../redux/cart/cartActions';
import { toast } from 'react-toastify';

export default function Coupon({cartData}) {
    const [couponVal, setCouponVal]=useState(cartData.coupon||'');
    const [applied, setApplied]=useState(couponVal==''?false:true);
    const dispatch=useDispatch();
    function onApply(){
        if(couponVal=='')
        {
            toast.error('Please enter a coupon code',
            {
                position: "top-center",
            }
            );
            return;
        }
        const capital=couponVal.toUpperCase();

        getCoupon(capital).then(res=>{
         if(res.data)
         {
            if(res.data.minValue>=cartData.total)
            {
                toast.error('Minimum cart value should be '+res.data.minValue,
                {
                    position: "top-center",
                }
                );
                return;
            }
            toast.success('Coupon Applied',
            {
                position: "top-center",
            }
            );
            cartData.discount=res.data.discount;
            cartData.maxDiscount=res.data.maxDiscount;
            cartData.coupon=couponVal;
            dispatch(updateCartItem(cartData));
            setApplied(true);
         }
            else
            {
                toast.error('Invalid Coupon Code',
                {
                    position: "top-center",
                }
                );
            }
        })
    }
    function onRemove(){
        cartData.discount=0;
        cartData.maxDiscount=0;
        cartData.coupon='';
        dispatch(updateCartItem(cartData));
        setApplied(false);
    }
  return (
      <div className="coupon-container p-3 d-flex justify-content-center">
                            <div className="coupon-heading">Coupon</div>
                            <div className="coupon-input-container">
                                <input type="text" placeholder="Enter Coupon Code" value={couponVal} onChange={(e)=>{setCouponVal(e.target.value)}} disabled={applied} />
                            </div>
                            <div className="coupon-apply-button">
                                {applied? <button onClick={()=>onRemove()}>Remove</button>: <button onClick={()=>onApply()}>Apply</button>
                                }
                            </div>
                        </div> 
  )
}
