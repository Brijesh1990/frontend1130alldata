import React from 'react'
import portfolio2 from '../../assets/user/brijesh.jpg'
export default function Banner() {
return (
<>
  {/* hero section starts */}
  <section className="home" id="home">
    {/* This div is for Background Particles */}
    <div id="particles-js" />
    {/* Particles Div Ends Here */}
    <div className="content">
      <h2>
        Hi There,
        <br /> I'm Brijesh <span>Pandey</span>
      </h2>
      <p>
        i am into
        {/* Here Type text is js file(span tag) */}
        <span className="typing-text" />
      </p>
      <a href="#about" className="btn">
        <span>About Me</span>
        <i className="fas fa-arrow-circle-down" />
      </a>
      <div className="socials">
        <ul className="social-icons">
          <li>
            <a
              className="whatsapp"
              aria-label="Whatsapp"
              href="https://api.whatsapp.com/send?phone=9316057970&text=Hi"
              target="_blank"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/bhavika-vasani-64a798239"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              className="github"
              aria-label="GitHub"
              href="https://github.com/bhavikavasani"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              className="instagram"
              aria-label="Instagram"
              href="https://instagram.com/sagrika_1179?igshid=NTA5ZTk1NTc="
              target="_blank"
            >
              <i className="fab fa-instagram" target="_blank" />
            </a>
          </li>
          <li>
            <a
              className="youtube"
              aria-label="Youtube"
              href="https://www.youtube.com/channel/UC4rWWxhave9hMagL0bItgAw"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="image">
      <img className="tilt" src={portfolio2} alt="" />
    </div>
  </section>
  {/* hero section ends */}
</>

)
}
