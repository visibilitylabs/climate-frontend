import React, {useState} from 'react'

export default function CartItem({data, updateQuantity}) {
   
  const [imgLoaded, setImgLoaded] = useState(false);

  return ( <div className="cart-item">
  <div className="cart-item-details">
    
      <div className={!imgLoaded?"cart-item-image cart-item-image-hidden":"cart-item-image"}  >
      <img src={data.coverImage} alt="book" onLoad={()=>{console.log('loaded');setImgLoaded(true)}} />
      </div>
      <div className="cart-item-name-info">

      <div className="cart-item-name">{data.title}</div>

      <div>
      <div className="cart-item-price">₹ {data.currentPrice}</div>
      {data.currentPrice<data.previousPrice&&<div className="cart-item-old-price">₹ {data.previousPrice}</div>}
      {data.currentPrice<data.previousPrice&&<div className="cart-item-discount">{Math.floor(100*(data.previousPrice-data.currentPrice)/data.previousPrice)}% off</div>}
      </div>
      </div>
      </div>
      <div className="cart-item-quantity">
          <button onClick={()=>updateQuantity(data._id, -1)} >-</button>
          <input disabled type="number" name="cart-qauntity" min={0} value={data.quantity} />
          <button onClick={()=>updateQuantity(data._id, 1)} >+</button>
          </div>
      <div className="cart-item-final-price">{data.currentPrice*data.quantity}</div>
      </div>
  )
}
