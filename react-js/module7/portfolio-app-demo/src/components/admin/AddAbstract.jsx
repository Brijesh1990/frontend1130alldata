import React ,{useRef,useState} from 'react';
import { Container,Row} from 'react-bootstrap';
import { useNavigate ,Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import FlashMessage from 'react-flash-message'
export default function AddAbstract() {
  
const[flash,getFlash]=useState(false);
// stored all form data in a variables 
const name=useRef("");
const email=useRef("");
const mobile=useRef("");
const objectives=useRef("");
const Navigate=useNavigate();
// create a formHandeler function 
const addFormData=(e)=>{
e.preventDefault();

var insert={
name:name.current.value,
email:email.current.value,
mobile:mobile.current.value,
objectives:objectives.current.value
}

//call api using axios   axios.post(`url`).then(()=>{ pass a message })    
axios.post('http://localhost:4000/add-abstract',insert).then(()=>{
// pass a messages
getFlash(true);
Navigate('/admin-login/add-abstract');

});

e.target.reset();

}


return (
<div>
<AdminHeader />
<Container fluid className="m-0 p-0">
<Row>
<div className='col-md-3 bg-secondary'>
<AdminSidebar />
</div>
<div className='col-md-8'>
{/* Ad Portfolio here here */}

<h4 className='text-dark mt-5'>&nbsp;Add your Objective</h4>

{/* get a flash message  */}
<h4 className='w-75 mx-auto text-center mt-5'>{flash && <FlashMessage duration={3000}><div className='alert alert-success text-dark'>Your abstract is added successfully!</div></FlashMessage>} </h4>

<form onSubmit={addFormData}>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Name</label>
<input type="text" ref={name} className="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Email</label>
<input type="text" ref={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Mobile</label>
<input type="text" ref={mobile} className="form-control" id="exampleFormControlInput1" placeholder="Phone *" />
</div>
<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Enter Objectives</label>
<textarea ref={objectives} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
<input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddAbstract" id="exampleFormControlInput1" />

<input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />

</div>
</form>

</div>
</Row>
</Container>
<AdminFooter />
</div>
)
}
