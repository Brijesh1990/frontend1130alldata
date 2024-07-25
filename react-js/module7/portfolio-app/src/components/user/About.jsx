import React from 'react'
import Brijesh from '../../assets/user/brijesh.jpg'

export default function About() {
  return (
    <>
        <section className="about" id="about">
  <h2 className="heading">
    <i className="fas fa-user-alt" /> About <span>Me</span>
  </h2>
  <div className="row">
    <div className="image">
      <img
        draggable="false"
        className="tilt"
        src={Brijesh}
        alt=""
      />
    </div>
    <div className="content">
      <h3>I'm Brijesh</h3>
      <span className="tag">Front-end Developer | Graphic Designer</span>
      <p>
        I am a Front-end developer based in Rajkot, India. Also I'm a graphic
        designer with over a year of experience and a focus on web development
        as well as Branding. I am very passionate about improving my coding
        skills &amp; websites. Working for myself to improve my skills.
      </p>
      <div className="box-container">
        <div className="box">
          <p>
            <span> Age: </span> 28
          </p>
          <p>
            <span> Contact : </span> +91 93160 57970
          </p>
        </div>
        <div className="box">
          <p>
            <span> email : </span> vasanibhavi1@gmail.com
          </p>
          <p>
            <span> place : </span> Rajkot, India - 360004.
          </p>
        </div>
      </div>
      <div className="resumebtn">
        <a
          href="./assets/resume/Brijesh Kumar pandey Resume.pdf"
          className="btn"
          target="_blank"
        >
          <span>Resume</span>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
