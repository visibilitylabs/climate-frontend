import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center " style={{height:'100vh'}} >
    <div style={{textAlign:'center'}} >Thank you for ordering from us ❤️❤️<br></br>

You shall receive all the updates regarding delivery and tracking on SMS. <br></br>
Feel free to ask any questions <br/>
You will recieve estimated date soon.</div>
    <Link to="/">Go to Home</Link>
    </div>
  )
}
