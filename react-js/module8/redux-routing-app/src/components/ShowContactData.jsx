import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Container,Row} from 'react-bootstrap'
import Header from './Header'
import Nav from './Navbar'
import { ExportToExcel } from './ExportToExcel'

export default function ShowContactData() {
const[data,setData]=useState("");
// export all data in csv or xlsx format
const filename="managecontact";
const Navigate=useNavigate();
//fetch all data
useEffect(()=>{
  axios.get(`http://localhost:8000/contact-us`).then((response)=>{
    setData(response.data)
  })
})
  return (
<div>    
<Header />
<Nav />
<Container className='p-5 mt-5 shadow w-100 mx-auto'>
<Row>
<div className='col-md-12'><h2>Manage All Contact Data <ExportToExcel apiData={data} fileName={filename}  /></h2>
<table className='table table-responsive table-bordered mt-5'>
  {data && data.map((item)=>{
    return(
      <>
       <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.subject}</td>
        <td>{item.phone}</td>
        <td>{item.message}</td>
       </tr>

      </>
    )
  })}
  <tr>

  </tr>
</table>

</div>
</Row>
</Container>
</div>
      
  )
}
