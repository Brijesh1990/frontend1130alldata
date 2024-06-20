import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
function Contact()
{
return (
<>
<PageHeader />
<div
className="container mt-5 aos-item"
data-aos="fade-up"
data-aos-once="true"
>
<h2>Contact with Us or Get in Touch with Us</h2>
<hr className="border border-1 w-25 border-dark" />
<div className="row mt-5">
<div className="col-md-5">
<p style={{ fontSize: 16, fontWeight: 100 }}>
<b style={{ fontWeight: 600 }}>Office Address :</b> Fitness 5, Near,
Karuna nidhan University main Road, Kotecha Cir, Rajkot, Gujarat 360005
</p>
<p>
<iframe
src="https://www.google.com/maps/embed?pb=!4v1693053915824!6m8!1m7!1sbv4TcZqq-Dx903EV_2dd1Q!2m2!1d22.29236083852552!2d70.7822074913603!3f103.50395324288387!4f12.882834064546032!5f0.7820865974627469"
width="100%"
height={350}
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>{" "}
</p>
</div>
<div className="col-md-7">
<h3>Contact us</h3>
<hr className="border border-1 w-25 border-dark" />
<form method="post" action="mail.php">
<div className="row">
<div className="col-md-6">
<div className="input-group mt-3   d-flex">
<span className="input-group-text">
<i className="bi bi-person" />
</span>
<input
type="text"
name="firstname"
placeholder="FirstName *"
className="form-control  "
required=""
/>
</div>
</div>
<div className="col-md-6">
<div className="input-group col-md-6 mt-3  d-flex">
<span className="input-group-text">
<i className="bi bi-person" />
</span>
<input
type="text"
name="lastname"
placeholder="LastName *"
className="form-control  "
required=""
/>
</div>
</div>
</div>
<div className="col-md-12">
<div className="input-group  mt-3">
<span className="input-group-text">
<i className="bi bi-inbox" />
</span>
<input
type="text"
name="email"
placeholder="Email *"
className="form-control"
required=""
/>
</div>
</div>
<div className="col-md-12">
<div className="input-group  mt-3">
<span className="input-group-text">
<i className="bi bi-phone" />
</span>
<input
type="text"
name="phone"
placeholder="Phone *"
className="form-control"
required=""
/>
</div>
</div>
<div className="col-md-12">
<div className="input-group  mt-3">
<span className="input-group-text">
<i className="bi bi-subscript" />
</span>
<input
type="text"
name="subject"
placeholder="Subject *"
className="form-control"
required=""
/>
</div>
</div>
<div className="col-md-12">
<div className="input-group  mt-3">
<span className="input-group-text">
<i className="bi bi-messenger" />
</span>
<textarea
name="message"
placeholder="Message *"
className="form-control"
required=""
defaultValue={" "}
/>
</div>
</div>
<div className="form-input col-md-12 mt-3">
<button
type="submit"
name="send"
value="Send"
className="btn btn-dark text-white btn-sm w-25"
>
Send <i className="bi bi-send" />{" "}
</button>
<input
type="reset"
name="reset"
defaultValue="Reset"
className="btn btn-danger text-white btn-sm w-25"
/>
</div>
</form>
</div>
</div>
</div>

<Footer />

</>
)    
}

export default Contact