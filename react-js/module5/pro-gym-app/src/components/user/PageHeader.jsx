import React from "react";
function PageHeader()
{
    return (
<section id="page-header">
  <div className="container-fluid">
    {/* parn Fitness navigations  start here */}
    <div className="row shadow">
      <div className="col-md-9">
        <nav className="navbar navbar-expand-md">
          {/* logo */}
          <a href="/" className="navbar-brand text-white ms-5">
            Fitness<span className="text-color">ss</span>
          </a>
          {/* navbar link */}
          {/* toggler */}
          <button
            type="button"
            className="navbar-toggler bg-white"
            data-bs-toggle="collapse"
            data-bs-target="#coll"
          >
            <i className="bi bi-grid-3x3-gap" />
          </button>
          <div className="collapse navbar-collapse" id="coll">
            <ul className="navbar-link" data-aos="fade-left">
              <li>
                <a href="/" className="nav-item active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="nav-item page-scroll">
                  About us
                </a>
              </li>
              <li>
                <a href="/trainers" className="nav-item page-scroll">
                  Trainers
                </a>
              </li>
              <li>
                <a href="/blogs" className="nav-item page-scroll">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact-us" className="nav-item page-scroll">
                  Contactus
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-md-3">
        <nav className="navbar navbar-expand-md">
          <ul className="navbar-link">
            <li>
              <a href="login.html" className="nav-item active">
                LogIn
              </a>
            </li>
            <li>
              <a href="#" className="nav-item page-scroll">
                SignUp
              </a>
            </li>
            <li>
              <a
                href="plan.html"
                className="nav-item page-scroll border border-1 border-white p-1"
              >
                Choose Plan
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    {/* parn Fitness banner  start here */}
    {/* banner text */}
    <div className="page-banner p-5 mt-0">
      <h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb fs-3">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li
              className="breadcrumb-item active text-white current-page-contact fs-0"
              aria-current="page"
            >
              Contact us
            </li>
          </ol>
        </nav>
      </h1>
    </div>
  </div>
</section>


         
    )
    
}

export default PageHeader