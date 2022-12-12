import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addCartItem } from '../../redux/cart/cartActions';
import './ProductPage.css'
import {toastify, ToastContainer, toast} from 'react-toastify';
import { setLoading } from '../../redux/loader/loaderActions';
function ProductPage() {

//     const data= {
//         id:1,
//         title:'The Alchemist',
//         author:'Paulo Coelho',
//         currentPrice:200,
//         previousPrice:250,
//         description:'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. ',
// coverImage:'https://picsum.photos/2000',
//         availableQuantity:10,
//         isOnSale:true,
//         tags:['Adventure','Fiction','Fantasy','Novel']
//     };
    const [data, setData]=useState({});
    const location = useLocation();
    const bookId=location.pathname.split('/')[2];
    const url=`https://beta.blissbookstore.in/climate/products/${bookId}`
    useEffect(()=>{
        dispatch(setLoading(true));
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setData(data.data);
            dispatch(setLoading(false));
        })
        .catch(()=>{
            toast.error('Error fetching data');
            dispatch(setLoading(false));
        })
    },[])
    useEffect(()=>{
        // restore scroll
        window.scrollTo(0,0);
    })
    const dispatch=useDispatch();
    const navigate=useNavigate();
    function addItemToCart()
    {
        // toast('Item added to cart');
        dispatch(addCartItem({...data, quantity:1}));
    }
    function buyNow()
    {
        dispatch(addCartItem({...data, quantity:1}));
        navigate('/cart');
    }
  return (
      <div className='padded-container'>
        <div className="container col-12 col-md-10 offset-md-1 my-4">
            <div className="row">
                <div className="col-12 col-sm-8">
                <img className='img-fluid' src={data.coverImage} alt={data.title} />
                </div>
                <div className="col-12 col-sm-4">
                    <div className="text-muted small">Climate Solutions</div>
                    <div className="product-title">{data.title}</div>
                    <div className="product-author">{data.author}</div>
                    <div className="product-price-container">
                    <div className="product-price">₹{data.currentPrice}</div>
                    {
                        data.currentPrice<data.previousPrice&&
                        <div className="product-old-price">₹{data.previousPrice}</div>
                    }
                    </div>
                    {
                        data.currentPrice<data.previousPrice&&<div className="cart-item-discount product-item-discount">{Math.floor(100*(data.previousPrice-data.currentPrice)/data.previousPrice)}% OFF</div>
                    }
                    <div className="product-tags">
                        {data.tags?.map((tag,index)=>(
                            <span className="tag" key={index}>{tag}</span>
                        ))}
                    </div>
                    {/*<div className="product-quantity">Available Quantity: {data.availableQuantity}</div>*/}
                    <div className="product-actions d-flex flex-column g-3">
                            <button className="btn btn-outline-dark mb-2" onClick={()=>addItemToCart()} >Add to Cart</button>
                            <button className="btn btn-dark" onClick={()=>buyNow()} >Buy Now</button>
                    </div>
                    <div className="product-description" dangerouslySetInnerHTML={{__html:data.description}} ></div>
                </div>
            </div>
            
        </div>
        
        
                
    </div>
  )
}

export default ProductPage