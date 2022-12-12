import React from 'react'
import './About.css';

function About() {

    const aboutData = [
        {
          description: 'WE PROVIDE EXPRESS SHIPPING FOR 27000+ INDIAN PIN CODES',
          image: 'https://therightbookstoreindia.com/wp-content/uploads/2021/09/3887429-150x150.png',
          title: 'HOME DELIVERY'
        },
        {
          description: 'GET HANDPICKED, QUALITY BOOKS AT UNBELIEVABLE RATES',
          image: 'https://therightbookstoreindia.com/wp-content/uploads/2021/09/360_F_266259364_xLQQ1evsZQt7oSRbcJW8zH5cHlijjsdW-150x150.jpg',
          title: 'UNPARALLELED QUALITY'
        },
        {
          description: 'ALONG WITH GOOGLE PAY, PHONEPE, PAYTM, IMPS/NEFT, CARD PAYMENTS',
          image: 'https://therightbookstoreindia.com/wp-content/uploads/2021/09/images-2-100x100.png',
          title: 'COD AVAILABLE'
        },
        {
          description: 'INSTANT REFUND/RETURN/REPLACEMENT FACILITY',
          image: 'https://therightbookstoreindia.com/wp-content/uploads/2021/09/images-150x150.png',
          title: 'UNPARALLELED QUALITY'
        },
      ]
  return (
    <div>
    <div className='banner-img'>
        <div className="banner-text">
            <h1>About Us</h1>
        </div>
    </div>
    <div className="about-container">
        <div className="about-section-1">
            <div className="about-section-1-text">
                <h1>Who we are</h1>
                <p>
                We are a team of engineers and Students who share a common passion for reading. 
                </p>
            </div>
            <div className="img-right">
                <img src="./logo512.png" alt="book" />
            </div>
        </div>
        <div className='section-about container'>
          <div className='row px-5 px-sm-3 px-md-0 my-5 row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 g-md-5'>
              {
                aboutData.map((item, index) => {
                  return (
                    <div className='col'key={index} >
                      <div className='section-about-container-item-title text-center'>
                        <img src={item.image} width={50} height={50}/>
                        <span>{item.title}</span>
                      </div>
                      <div className='section-about-container-item-des'>
                        {
                          item.description
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        <div className="about-section-2">
            <div className="about-section-2-text">
                <h1>What Motivates us?</h1>
                <p>
                   It is the passion of reading that we have that has driven us to make books available to every part of India ❤️
                   </p>
            </div>
            <iframe className='iframe-right' src="https://instagram.com/climatesolutions" height={670}  frameborder="0"></iframe>
        </div>
  
      </div>
    </div>
  )
}

export default About