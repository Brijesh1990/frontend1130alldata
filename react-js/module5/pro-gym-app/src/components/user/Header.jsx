import React from "react";
import ordernow from '../../assets/user/images/order-now.png'
function Header()
{
return(
<>
{/* parn Fitness header start here */}
<section id="parn-header">
<div className="container-fluid">
{/* parn Fitness navigations  start here */}
<div className="row">
<div className="col-md-8">
<nav
className="navbar navbar-expand-md"
data-aos="fade-left"
data-aos-duration={3000}
>
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
<div className="col-md-4">
<nav
className="navbar navbar-expand-md"
data-aos="fade-left"
data-aos-duration={3000}
>
<ul className="navbar-link nav-link">
<li>
<a
href="#"
data-bs-toggle="modal"
data-bs-target="#login"
data-bs-dismiss="modal"
className="nav-item active"
>
LogIn
</a>
</li>
<li>
<a href="register.html" className="nav-item page-scroll">
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
<div
className="banner-text p-5 mt-5"
data-aos="fade-left"
data-aos-duration={3000}
>
<h1>
make your body <br />
<span className="text-color">beautiful</span>
</h1>
<p className="text-white">Lorem ipsum dolor sit amet, consectetur</p>
<button
type="button"
className="btn btn-md bg-set-color border border-0 text-white"
>
Get In touch
</button>
</div>
</div>
{/* online booking */}
<div className="container shadow-lg bg-white w-75 h-50">
<div className="row">
<div className="col-md-4 m-0 p-0">
<img src={ordernow} className="img-fluid" />
</div>
<div className="col-md-8 p-5">
<form method="post">
<h3 className="text-center">FREE 7 DAYS</h3>
<h1 className="text-center">ONLINE BOOKING</h1>
<div className="row">
<div className="form-group col-md-4 mt-3">
<select name="people" className="form-control">
<option value={3}>3 People</option>
<option value={2}>2 People</option>
<option value={1}>1 People</option>
<option value={5}>5 People</option>
</select>
</div>
<div className="form-group col-md-4 mt-3">
<input
type="date"
name="date"
placeholder="Date *"
className="form-control"
/>
</div>
<div className="form-group col-md-4 mt-3">
<input
type="datetime-local"
name="time"
className="form-control"
placeholder="Time *"
/>
</div>
<div className="form-group col-md-4 mt-3">
<input
type="date"
name="name"
placeholder="Phone *"
className="form-control"
/>
</div>
<div className="form-group col-md-4 mt-3">
<input
type="text"
name="Phone"
className="form-control"
placeholder="Phone *"
/>
</div>
<div className="form-group col-md-4 mt-3">
<input
type="text"
name="email"
className="form-control"
placeholder="Email *"
/>
</div>
</div>
<div className="text-center form-group ms-0 mt-5">
<input
type="submit"
name="send"
defaultValue="GET IN TOUCH"
className="btn btn-sm btn-block  get-in-touch  bg-set-color border border-0 p-2 text-white"
placeholder="Email *"
/>
</div>
</form>
</div>
</div>
</div>
</section>
</>

)
}
export default Header