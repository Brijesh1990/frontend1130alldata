import React from 'react'

export default function Education() {
  return (
    <section className="education" id="education">
    <h1 className="heading">
      <i className="fas fa-graduation-cap" /> My <span>Education</span>
    </h1>
    <p className="qoute">
      Education is not the learning of facts, but the training of the mind to
      think.
    </p>
    <div className="box-container">
      <div className="box">
        <div className="image">
          <img draggable="false" src="./assets/images/educat/ignou.webp" alt="" />
        </div>
        <div className="content">
          <h3>MASTERS IN COMPUTER APPLICATION | MCA </h3>
          <p>Indira Gandhi National Open University | IGNOU </p>
          <h4>2022-2024 | pursuing</h4>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img
            draggable="false"
            src="./assets/images/educat/college.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <h3>BACHELOR OF COMPUTER APPLICATION | BCA</h3>
          <p>Matushri Virbaima Mahila College | MVM</p>
          <h4>2013-2015 | Completed | CGPA - 7.167</h4>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img draggable="false" src="./assets/images/educat/IANT.jpg" alt="" />
        </div>
        <div className="content">
          <h3>CHNA - COMPUTER HARDWARE &amp; NETWORKING ADMINISTRATION</h3>
          <p>IANT | 2016 - 2017</p>
          <h4>A GRADE</h4>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img draggable="false" src="./assets/images/educat/school.jpg" alt="" />
        </div>
        <div className="content">
          <h3>HSC Commerce </h3>
          <p>Nalanda Vidhya Mandir </p>
          <h4>2012 | Completed | 74%</h4>
        </div>
      </div>
    </div>
  </section>
  
  )
}
