import React ,{useRef,useState,useEffect} from 'react';
import { Container,Row} from 'react-bootstrap';
import { useNavigate ,Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import axios from 'axios';
import FlashMessage from 'react-flash-message'

export default function AddPortfolio() {
// fetch slills category inside of addportfolio 
const[data,setData]=useState([]);
useEffect(()=>{
  axios.get(`http://localhost:4000/skils-category`).then((response)=>{
    setData(response.data);

  })
})

// display all add portfolio data
// fetch slills category inside of addportfolio 
const[item,setItem]=useState([]);
useEffect(()=>{
  axios.get(`http://localhost:4000/add-portfolio`).then((response)=>{
    setItem(response.data);

  })
})
const[flash,getFlash]=useState(false);
// stored all form data in a variables 
const skillscategory=useRef("");
const photo=useRef("");
const descriptions=useRef("");
const Navigate=useNavigate();
// create a formHandeler function 
const addFormData=(e)=>{
e.preventDefault();

var insert={
skillscategory:skillscategory.current.value,
photo:photo.current.value,
descriptions:descriptions.current.value

}

//call api using axios   axios.post(`url`).then(()=>{ pass a message })    
axios.post('http://localhost:4000/add-portfolio',insert).then(()=>{
// pass a messages
getFlash(true);
Navigate('/admin-login/add-portfolio');

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

<h4 className='text-dark mt-5'>&nbsp;Add Portfolio</h4>

{/* get a flash message  */}
<h4 className='w-75 mx-auto ms-2 mt-5'>{flash && <FlashMessage duration={3000}><div className='alert alert-success text-dark'>Your Portfolio is added successfully!</div></FlashMessage>} </h4>
<form onSubmit={addFormData}>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">select skill Category</label>
<select ref={skillscategory} className="form-control" id="exampleFormControlInput1" placeholder="skills category">
<option value="">-select skills category-</option>
{/* fetch in dropdown */}
{data && data.map((item)=>{
  return (
    <>
    <option value={item.skillsname}>{item.skillsname}</option>
    </>
  )
})}

</select>
</div>
<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Photo</label>
<input type="text" ref={photo}  className="form-control" id="exampleFormControlTextarea1" />
</div>

<div className="mb-3">
<label for="exampleFormControlTextarea1" className="form-label">Descriptions</label>
<textarea className="form-control" ref={descriptions} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="mb-3">
<input type="submit" className="btn btn-lg btn-dark bg-dark text-white" value="AddPortfolio" id="exampleFormControlInput1" />
<input type="reset" className="btn btn-lg bg-danger text-white ms-4" value="Reset" id="exampleFormControlInput1" />
</div>
</form>
{/* display portfolio */}
<div style={{width:"100%",height:"300px",overflow:"auto"}}>
<table className='table table-responsive mt-5 border border-1 table-bordered' cellPadding="4" cellspacing="4">
{item && item.map((row)=>{
  return(
    <>
     <tr>
      <td>{row.id}</td>
      <td>{row.skillscategory}</td>
      <td><img src={row.photo} alt='photo' className='img-fluid' style={{width:"145px",height:"105px"}} /></td>
      
      <td><div style={{width:"400px",height:"140px",overflow:"auto"}}>{row.descriptions}</div></td>
      <td><button className="btn btn-sm btn-danger bg-danger text-white"><span className='bi bi-trash'></span></button> | <button className="btn btn-sm btn-primary bg-primary text-white"><span className='bi bi-pencil'></span></button></td>

     </tr>

    </>
  )
})}

</table>
</div>
</div>
</Row>
</Container>
<AdminFooter />
</div>
)
}
