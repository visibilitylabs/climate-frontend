import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div >
        <div className="banner-img">
            <div className="banner-text">
                <h1>Contact Us</h1>
                </div>
        </div>
            <div className="row p-5">
                <div className="col-12 col-md-6">
                    <div className="contact-details">
                        <div className="contact-title">Queries?</div>
                        <div className="contact-detail">
                            <div className="contact-detail-type"><i className="bi bi-whatsapp"></i></div>
                            <div className="contact-detail-value">9871093837</div>
                        </div>
                        
                        <div className="contact-detail">
                            <div className="contact-detail-type"><i className="bi bi-instagram"></i></div>
                            <a className="contact-detail-value" href='https://instagram.com/climatesolutions' >climatesolutions</a>
                        </div>
                        <div className="contact-detail">
                            <div className="contact-detail-type"><i className="bi bi-envelope-at"></i></div>
                                <a href="mailto:help@climatesolutions.in" className="contact-detail-value">
                                    help@climatesolutions.in
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-3 mt-sm-0 border rounded p-3">
                    <div className="contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="message" rows="3" placeholder='Message' ></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark rounded">Submit</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Contact