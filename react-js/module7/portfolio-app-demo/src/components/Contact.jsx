import React,{useRef,useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate ,Link } from 'react-router-dom';
import axios from 'axios';
import FlashMessage from 'react-flash-message'

export default function Contact() {

    const[flash,getFlash]=useState(false);

    // stored all form data in a variables 
    const name=useRef("");
    const email=useRef("");
    const phone=useRef("");
    const message=useRef("");
    const Navigate=useNavigate();

    // create a formHandeler function 
    const addFormData=(e)=>{

        e.preventDefault();

        var insert={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
            message:message.current.value
           }

        //call api using axios   axios.post(`url`).then(()=>{ pass a message })    
        axios.post('http://localhost:4000/contactus',insert).then(()=>{
        // pass a messages
        getFlash(true);
        Navigate('/contact-with-us');

        });

        e.target.reset();
    }
      
    
  return (
    <div>
    <Navbar />
    <section className="page-section" id="contact">
    <div className="container p-5 mt-5">
      
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        {/* get a flash message  */}
        <h4 className='w-75 mx-auto text-center mt-5'>{flash && <FlashMessage duration={3000}><div className='alert alert-success text-dark'>Thanks for contact with us we will contact with you Soon!</div></FlashMessage>} </h4>

        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
       
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
               
                <form id="contactForm" onSubmit={addFormData}>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="name" ref={name} type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label for="name">Full name</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                   
                    <div className="form-floating mb-3">
                        <input className="form-control" id="email" ref={email} type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label for="email">Email address</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                   
                    <div className="form-floating mb-3">
                        <input className="form-control" id="phone" type="tel" ref={phone} placeholder="(123) 456-7890" data-sb-validations="required" />
                        <label for="phone">Phone number</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                    </div>
                
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" ref={message} type="text" placeholder="Enter your message here..."   style={{height: "10rem"}} data-sb-validations="required"></textarea>
                        <label for="message">Message</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <Link to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link>
                        </div>
                    </div>
                  
                  
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                 
                    <input  className="btn btn-primary btn-xl" id="submitButton" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
</section>

<Footer />
      
    </div>
  )
}
