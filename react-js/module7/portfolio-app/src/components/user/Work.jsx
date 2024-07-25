import React from 'react'

export default function Work() {
  return (
    <section className="work" id="work">
  <h2 className="heading">
    <i className="fas fa-laptop-code" /> Projects <span>Made</span>
  </h2>
  <div className="box-container">
    <div className="box tilt">
      <img
        draggable="false"
        src="./assets/images/projects/Bhavika_portfolio.PNG"
        alt=""
      />
      <div className="content">
        <div className="tag">
          <h3>Portfolio Website</h3>
        </div>
        <div className="desc">
          <p>
            Personal portfolio website. Don't need much info about it, just
            scroll down. You're here only!
          </p>
          <div className="btns">
            <a href="#" className="btn" target="_blank">
              <i className="fas fa-eye" /> View
            </a>
            <a href="Github_url_paste_here" className="btn" target="_blank">
              Code <i className="fas fa-code" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="viewall">
    <a href="./projects.html" className="btn">
      <span>View All</span>
      <i className="fas fa-arrow-right" />
    </a>
  </div>
</section>

  )
}
