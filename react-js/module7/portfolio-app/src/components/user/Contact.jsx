import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Brijesh from '../../assets/user/brijesh.jpg'
export default function Contact() {
  return (
<>    
<Header />
<section className="contact" id="contact">
  <h2 className="heading">
    <i className="fas fa-headset" /> Get in <span>Touch</span>
  </h2>
  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={Brijesh} alt="" />
      </div>
      <form method="post" action="mail.php">
        <div className="form-group">
          <div className="field">
            <input type="text" name="name" placeholder="Name" required="" />
            <i className="fas fa-user" />
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Email" required="" />
            <i className="fas fa-envelope" />
          </div>
          <div className="field">
            <input type="text" name="phone" placeholder="Phone" />
            <i className="fas fa-phone-alt" />
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              name="message"
              required=""
              defaultValue={""}
            />
            <i className="fas fa-comment-dots" />
          </div>
        </div>
        <div className="button-area">
          <button type="submit" name="sub">
            Submit <i className="fa fa-paper-plane" />
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
<Footer />
</>
  )
}
