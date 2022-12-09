import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/cart/cartActions';
import { Link } from 'react-router-dom'
import './BookItem.css'

function BookItem({data}) {

    const dispatch = useDispatch();
    let state = useSelector(state => state.cart);
    function addItemToCart()
    {
        dispatch(addCartItem({...data, quantity:1}));
    }
    
  return (
    <div className="book-item-container">
    <Link  to={'/store/'+data._id} style={{textDecoration:'none'}} >
      <div className='book-item-details' >

        <div className="book-item-image-container">
            <img className='book-item-image' src={data.coverImage} alt={data.title} />
        </div>
        <div className="book-title-div">
          <span className="book-item-title">{data.title}</span>{data.author!=''&&data.author&&<div> by <span className="book-item-author">{data.author}</span></div>}
        </div>
        <div className="price-div">
                <span className="book-item-price me-2">₹{data.currentPrice}</span>
                { data.currentPrice<data.previousPrice&&<span className="book-item-old-price">₹{data.previousPrice}</span>}
        </div>
      </div>
    </Link>
      <div className="btn-container">
          <span className="btn btn-primary add-to-cart-btn " onClick={()=>addItemToCart()} >Add to Cart</span>
          <button className='btn btn-secondary'><i className="bi bi-bookmark-heart"></i> Add to Wishlist </button>
      </div>
      </div>
  )
}

export default BookItem