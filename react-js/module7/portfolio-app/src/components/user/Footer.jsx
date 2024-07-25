import React from 'react'

export default function Footer() {
  return (
    <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>Bhavika's Portfolio</h3>
        <p>
          Thank you for visiting my personal portfolio website. Connect with me
          over socials. <br /> <br /> Keep Rising 🚀. Connect with me on my social
          Profiles
        </p>
      </div>
      <div className="box">
        <h3>quick links</h3>
        <a href="#home">
          <i className="fas fa-chevron-circle-right" /> home
        </a>
        <a href="#about">
          <i className="fas fa-chevron-circle-right" /> about
        </a>
        <a href="#skills">
          <i className="fas fa-chevron-circle-right" /> skills
        </a>
        <a href="#education">
          <i className="fas fa-chevron-circle-right" /> education
        </a>
        <a href="#work">
          <i className="fas fa-chevron-circle-right" /> work
        </a>
        <a href="#experience">
          <i className="fas fa-chevron-circle-right" /> experience
        </a>
      </div>
      <div className="box">
        <h3>contact info</h3>
        <p>
          {" "}
          <i className="fas fa-phone" />
          +91 9316057970
        </p>
        <p>
          {" "}
          <i className="fas fa-envelope" />
          vasanibhavi1@gmail.com
        </p>
        <p>
          {" "}
          <i className="fas fa-map-marked-alt" />
          Rajkot, India-360004
        </p>
        <div className="share">
          <a
            href="mailto:vasanibhavi1@gmail.com"
            className="fas fa-envelope"
            aria-label="Mail"
            target="_blank"
          />
          <a
            aria-label="Whatsapp"
            href="https://api.whatsapp.com/send?phone=9316057970&text=Hi"
            className="fab fa-whatsapp"
            target="_blank"
          />
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/bhavika-vasani-64a798239"
            className="fab fa-linkedin"
            target="_blank"
          />
          <a
            aria-label="GitHub"
            href="https://github.com/bhavikavasani"
            className="fab fa-github"
            target="_blank"
          />
          <a
            aria-label="Instagram"
            href="https://instagram.com/sagrika_1179?igshid=NTA5ZTk1NTc="
            className="fab fa-instagram"
            target="_blank "
          />
          <a
            aria-label="Youtube"
            href="https://www.youtube.com/channel/UC4rWWxhave9hMagL0bItgAw"
            className="fab fa-youtube"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <h1 className="credit">
      Designed with <i className="fa fa-heart pulse" /> by{" "}
      <a href="https://www.linkedin.com/in/bhavika-vasani-64a798239">
        {" "}
        Bhavika Vasani
      </a>
    </h1>





  {/* scroll top btn */}
  <a
    href="#home"
    aria-label="ScrollTop"
    className="fas fa-angle-up"
    id="scroll-top"
  />
  {/* scroll back to top */}



  </section>

  )
}
