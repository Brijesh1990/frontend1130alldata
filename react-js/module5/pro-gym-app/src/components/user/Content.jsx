import React from "react";
import trainer from '../../assets/user/images/trainer.png'
import trainer1 from '../../assets/user/images/image-trainer.png'
import trainer2 from '../../assets/user/images/image-trainer1.png'
function Content()
{
return(
<>
{/* parn Fitness content start here */}
<div
className="container-fluid m-0 p-0 mt-5 aos-item parn-fitness-content position-relative"
data-aos="zoom-in"
data-aos-easing="linear"
data-aos-duration={1500}
>
<div className="container">
{/* welcome to fitness */}
<div className="parn-welcome-fitness  p-5 p-0 m-0 container"></div>
{/* plans start here */}
<h3 className="breadcrumb-item active text-center">
50% off on selected Plans Hurry up
</h3>
<div className="row mt-5">
<div className="col-md-4">
<div className="card bg-light shadow">
<div className="card-body p-5">
<h5 className="text-dark text-center">Starter Plan </h5>
<h4 className="text-dark text-center">Rs.15500-/per years</h4>
<ul className="sidebar-plan">
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
24x7 Services
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Pnline Guidance
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
No refund policy
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
FAQ
</a>
</li>
<li>
{" "}
<button
type="button"
className="btn btn-md bg-set-color border border-0 text-white"
>
Book Your seat!
</button>
</li>
</ul>
</div>
</div>
</div>
<div className="col-md-4">
<div className="card bg-primary text-white shadow-lg">
<div className="card-body p-5">
<h5 className="text-dark text-center">Platinum Plan </h5>
<h4 className="text-dark text-center">Rs.35500-/per years</h4>
<ul className="sidebar-plan-platinum">
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
24x7 Services
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Pnline Guidance
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
No refund policy
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
FAQ
</a>
</li>
<li>
{" "}
<button
type="button"
className="btn btn-md bg-set-color border border-0 text-white"
>
Book Your seat!
</button>
</li>
</ul>
</div>
</div>
</div>
<div className="col-md-4">
<div className="card bg-light shadow">
<div className="card-body p-5">
<h5 className="text-dark text-center">Gold Plan </h5>
<h4 className="text-dark text-center">Rs.18500-/per years</h4>
<ul className="sidebar-plan">
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Provides personal Trainer
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
24x7 Services
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
Pnline Guidance
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
No refund policy
</a>
</li>
<li>
<a href="#">
<span className="bi bi-patch-check" />
FAQ
</a>
</li>
<li>
{" "}
<button
type="button"
className="btn btn-md bg-set-color border border-0 text-white"
data-bs-toggle="modal"
data-bs-target="#crt"
>
Book Your seat!
</button>
</li>
</ul>
</div>
</div>
</div>
</div>
{/* par fitness trainer */}
<div
className="fitness-trainer mt-5"
data-aos="zoom-in"
data-aos-easing="linear"
data-aos-duration={1500}
>
<h1>
Expert <span className="text-color ms-3">Trainers</span>
</h1>
<hr className="border border-1 w-25 border-danger" />
<p className="text-white">Lorem ipsum dolor sit amet, consectetur</p>
<div className="row mt-3">
<div className="col-md-4">
<img
src={trainer}
className="img-fluid w-50 h-50 justify-content-center"
/>
<p className="text-center">
<span className="text-color text-center ms-3 fs-3">
Fenil Patel
</span>
</p>
<p className="text-center fs-4">
Body massage &amp; Mussalses building
</p>
<p className="text-center">
{" "}
Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
</p>
</div>
<div className="col-md-4">
<img
src={trainer1}
className="img-fluid w-50 h-50 justify-content-center"
/>
<p className="text-center">
<span className="text-color text-center ms-3 fs-3">
Fenil Patel
</span>
</p>
<p className="text-center fs-4">
Body massage &amp; Mussalses building
</p>
<p className="text-center">
{" "}
Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
</p>
</div>
<div className="col-md-4">
<img
src={trainer2}
className="img-fluid w-50 h-50 justify-content-center"
/>
<p className="text-center">
<span className="text-color text-center ms-3 fs-3">
Fenil Patel
</span>
</p>
<p className="text-center fs-4">
Body massage &amp; Mussalses building
</p>
<p className="text-center">
{" "}
Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
</p>
</div>
</div>
</div>
</div>
</div>
</>



)
}
export default Content