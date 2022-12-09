import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-parent' >
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="footer-title">About Us</div>
          <div className="footer-content">
            <p>
              Bliss Bookstore is a bookstore that sells books online.
            </p>
      </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-title">Contact Us</div>
            <div className="footer-content">
              <div className="footer-contact">
                <div className="footer-contact-type"><i className="bi bi-whatsapp"></i></div>
                <div className="footer-contact-value">8810523354</div>
                </div>
                <div className="footer-contact">
                  <div className="footer-contact-type"><i className="bi bi-instagram"></i></div>
                  <a className="footer-contact-value" href='https://instagram.com/blissbookstore' >@blissbookstore</a>
                </div>
                <div className="footer-contact">
                  <div className="footer-contact-type"><i className="bi bi-envelope-at"></i></div>
                  <a href="mailto:an.books.solutions.gmail.com" className="footer-contact-value">an.books.solutions@gmail.com</a>
                  </div>
                  </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="footer-title">Links</div>
                    <div className="footer-content">
                      <div className="footer-link">
                        <Link to='/'>Home</Link>
                        </div>
                        <div className="footer-link">
                          <Link to='/contact-us'>Contact</Link>
                          
                          </div>
                          <div className="footer-link">
                            <Link to='/about'>About</Link>
                            </div>
                            <div className="footer-link">
                            <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                            </div>
                            <div className="footer-link">
                            <Link to='/shipping-policy'>Shipping Policy</Link>
                            </div>
                            <div className="footer-link">
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                            </div>
                            <div className="footer-link">
                            <Link to='/cancellation-policy'>Cancellation Policy</Link>
                            </div>
                        </div>
                        </div>


      </div>
      <div className="copy-right">
        <div className="copy-right-text">
          &copy; 2021 Bliss Bookstore
          </div>
      </div>
    </div>
  )
}

export default Footer