import React from "react";
import book from './assets/images/book.gif'
function ExternalApp()
{
return(
<>
<div className="parent">

<div className="box1">
<img src={book} alt="book" />
</div>
<div className="box2"> <h1 align='center'>Book Appointments</h1>

<form>
<input type="text" placeholder="Name *" />
<br/><br/>

<input type="text" placeholder="email *" />
<br/><br/>

<input type="text" placeholder="Phone *" />
<br/><br/>

<input type="text" placeholder="subject *" />
<br/><br/>

<input type="text" placeholder="message *" />
<br/><br/>

<input type="submit" placeholder="Name *" />

</form>

</div>
</div>
</>
)
}

export default ExternalApp