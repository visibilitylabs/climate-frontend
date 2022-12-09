import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../component/BookItem/BookItem';
import './home.css'
/*import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider"
var slider = tns({
  container: '.car',
  items: 3,
  slideBy: 'page',
  autoplay: false
});*/
// const booksData = [
//   {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },
//   {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },
//   {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   },  {
//     image: 'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg'
//   }
// ]

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
const bannerGridData=[
  {
    title:'New Arrivals',
    subTitle:'All at 50% OFF!',
    actionButton:'Browse Collection',
    actionButtonLink:'/store/category/NEW%20ARRIVALS',
    backgroundImage:'https://ik.imagekit.io/blissbookstore/blissimg1.jpg'
  },
  {
    title:'Best Sellers in Fiction',
    subTitle:'All at 50% OFF!',
    actionButton:'Browse Collection',
    actionButtonLink:'/store/category/FICTION',
    backgroundImage:'https://ik.imagekit.io/blissbookstore/blissimg2.jpg'
  },
  {
    title:'Best Sellers in Non Fiction',
    actionButtonLink:'/store/category/NON%20FICTION',
    subTitle:'All at 50% OFF!',
    actionButton:'Browse Collection',
    backgroundImage:'https://ik.imagekit.io/blissbookstore/blissimg3.jpg'
  }
]

// const bookProdData=[
//   {
//     title:'The summer i turned pretty',
//     author:'Jenny Han',
//     price:219,
//     image:'https://therightbookstoreindia.com/wp-content/uploads/2022/09/1663308588.jpg',
//     oldPrice:999,
//     }
// ]

const faqData=[
  {
    question:'How do I place an order?',
    answer:'You can place an order by following the steps given below: <ol><li>Visit the book page on our website and click on the "Add to Cart" button.</li><li>Once the book is added to your cart, you can either continue shopping or proceed to checkout.</li><li>Once you are done shopping, click on the "Proceed to Checkout" button.</li><li>Enter your billing and shipping address and click on the "Place Order" button.</li></ol>'
  },
  {
    question:'Do you deliver all over India?',
    answer:'Yes we do! We have our guaranteed home delivery service across the country. Above 28000 pincodes are serviceable as of now.'
  },
  {
    question:'Is Shipping Free?',
    answer:'We offer free shipping above <b>₹ 499 </b>. For orders below <b>₹ 499</b>, we charge a nominal shipping fee of ₹ 40.'
  },
  {
    question:'Are all the books brand new?',
    answer:'Yes, All the books are brand new.'
  },
  {
    question:'Will I get a tracking link?',
    answer:'Definitely! The tracking links will be automatically mailed to the customer’s mail id once the order is packed. Customers will receive email updates when the order is packed, picked up by the courier and finally when its shipped. All the updates will also be shared on SMS. You can just order and relax!'
  },
  {
    question:'Do you have customer support?',
    answer:'Yes, We offer Instagram and WhatsApp support. You can reach out to us @blissbookstore or+91 8810523354  '
  },
]

const FaqItem=({data, index})=>{
  const [isOpen,setOpen]=useState(index==0?true:false)
  
  return(
    <div className={isOpen?"faq-item faq-expanded":"faq-item"} >
        <button  className='faq-question' onClick={()=>setOpen(!isOpen)} >
        <span>
        {data.question}
        </span>
        <i className="fas fa-caret-right"></i>
        </button>
      <div className="faq-answer ">
        <p dangerouslySetInnerHTML={{__html:data.answer}} />
      </div>
    </div>
  )
}

export const Home = () => {
  
  return (
    <div className="home">

    <div className='home-section-1'>
      <div className="home-backdrop-filter"></div>
        <div className="home-backdrop">
          <div className='home-title'>
            FOR THE <span className="theme-text">BLISS</span><br/> IN READING
          </div>
          <div className='home-semititle'>60%-70% Off On All Books</div>
          <div className='home-semititle'>New and Best Quality Books</div> 
        <Link  to={'store'}>
          <button className="home-button">
          VISIT STORE
          </button>
           </Link>
        </div>
    </div>

    <div className='home-section-3 container-fluid'>
      <div className="section-3-grid row row-cols-1 row-cols-md-3">
        {
          bannerGridData.map((item, index) => {
            return <div className="p-2" key={index} >
              <div className="section-3-grid-item col col-12" style={{backgroundImage:'url('+item.backgroundImage+')'}} >
              <div className="grid-item-title">{item.title}</div>
              <div className="grid-item-subtitle">{item.subTitle}</div>
                <Link to={item.actionButtonLink}style={{textDecoration:"none", color:'black'}} >
              <button className="btn btn-secondary grid-action-button">
                {item.actionButton}
              </button>
                </Link>
            </div>
            </div>
          }
          )
        }
      
      </div>
    </div>
    <div className="home-section-4">
    {/* <BookItem data={bookProdData[0]} /> */}
    </div>

    <div className='section-about container'>
      <div className='row px-5 px-sm-3 px-md-0 my-5 row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 g-md-5'>
          {
            aboutData.map((item, index) => {
              return (
                <div className='col' key={index} >
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

      <div className='banner container-fluid'>
        <div className='banner-first'>
        ENJOY FREE SHIPPING ON ORDERS ABOVE ₹499/-
          </div>
        <div className='banner-second'>
        FREE BOOKMARK WITH EVERY BOOK!
        </div>
        <div>
        FREE CUSTOM NOTES!
          </div>
      </div>
      <div className="section-books-sold">
        <div className="books-sold-grid row p-5 g-3 theme-bg">
          <div className="col">
          <div className="books-sold-grid-item col">
            <div className="books-sold-grid-item-value">1000+</div>
            <div className="books-sold-grid-item-title ">orders delivered</div>
          </div>
          </div>
          <div className="col">
          <div className="books-sold-grid-item col">
              <div className="books-sold-grid-item-value">1000+</div>
              <div className="books-sold-grid-item-title ">Books Sold</div>

          </div>
          </div>
          
          <div className="col">
          <div className="books-sold-grid-item col">
              <div className="books-sold-grid-item-value">1000+</div>
              <div className="books-sold-grid-item-title ">Customers Served</div>
          </div>
          </div>
        </div>
    </div>
    <div className="section-customer-testimonial">
      <div className="section-customer-testimonial-title">What Our Customers Say</div>
      <div className="section-customer-testimonial-grid row">

          
          <div className="section-customer-testimonial-grid-item">
            <div className="section-customer-testimonial-grid-item-image">
          </div>
          <div className="section-customer-testimonial-grid-item-description">"Finally they r here and I'm so freaking happy 🤗
They are in good condition all of em...
Nicely packed and plus the bookmarks are cute 💫🤍
Thankyou so much again.
I'll definitely buy more books very soon 😃"</div>
          <div className="testimonial-author-container">
              {/* <img src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/316056470_499160862180193_2756822559832714124_n.jpg" width={100} height={100}/> */}
            <div>
            <div className="testimonial-author-name">Farhan</div>
            <div className="testimonial-author-handle">sugaringcandy.o.x</div>
            </div>
          </div>


    </div>
    <div className="section-customer-testimonial-grid-item ">
            <div className="section-customer-testimonial-grid-item-image">
          </div>
          <div className="section-customer-testimonial-grid-item-description">"Hey just received books
They r perfect.. the cute bookmarks.. quick delivery... and the quality
Is also perfect
Thank you soo much
Hoping to order plenty in the near future..😁❤️"</div>
          <div className="testimonial-author-container">
              {/* <img src="https://picsum.photos/200" width={100} height={100}/> */}
            <div>
            <div className="testimonial-author-name">Reader's reading</div>
            <div className="testimonial-author-handle">dhruvikagarg24</div>
            </div>
          </div>


    </div>
    <div className="section-customer-testimonial-grid-item ">
            <div className="section-customer-testimonial-grid-item-image">
          </div>
          <div className="section-customer-testimonial-grid-item-description">"The package and the quality is all over very good....



And I'm happy with the books 🥺❤
__twinkle__in__time__'s profile picture
Lemme just finish these... Maybe I'll order some more later ❤"</div>
          <div className="testimonial-author-container">
              {/* <img src="https://picsum.photos/200" width={100} height={100}/> */}
            <div>
            <div className="testimonial-author-name">❤❤SWIYA❤❤</div>
            <div className="testimonial-author-handle">__twinkle__in__time__</div>
            </div>
          </div>


    </div>
    </div>
    <div className="section-customer-testimonial-grid row">

          
          <div className="section-customer-testimonial-grid-item">
            <div className="section-customer-testimonial-grid-item-image">
          </div>
          <div className="section-customer-testimonial-grid-item-description">
          hey, the books came in today and they're all in good condition. thank you so much ❤️</div>
          <div className="testimonial-author-container">
              {/* <img src="https://picsum.photos/200" width={100} height={100}/> */}
            <div>
            <div className="testimonial-author-name">itirkaaa</div>
            <div className="testimonial-author-handle">itirkaaa</div>
            </div>
          </div>


    </div>
    <div className="section-customer-testimonial-grid-item ">
            <div className="section-customer-testimonial-grid-item-image">
          </div>
          <div className="section-customer-testimonial-grid-item-description">"The books were nicely packed. Can't wait to read them. "</div>
          <div className="testimonial-author-container">
              {/* <img src="https://picsum.photos/200" width={100} height={100}/> */}
            <div>
            <div className="testimonial-author-name">Vishal</div>
            <div className="testimonial-author-handle">vishal_bagchi</div>
            </div>
          </div>


    </div>
    </div>
    </div>
    <div className="section-faq mb-5 container-fluid">
      <div className="section-faq-title">FAQ</div>
      <div className="section-faq-sub-title text-muted">Most Frequent questions and answers</div>
      <div className="section-faq-grid">
        {faqData.map((item, index) => {
          // console.log(item);
          return <FaqItem data={item}  key={index}  index={index} />})}
    </div>
    </div>
    </div>
    )
}


   // Huge Banner image
        // Books carousel tentative
        // coupons info tentative
        // Collections grid 
        // bestsellers grid 
        // quality description
        // in one page
        //  make your combo
        //  free shipping
        // order numbers
        // customer testimonials
        // faq
        // footer