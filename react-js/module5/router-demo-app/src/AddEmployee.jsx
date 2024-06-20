import React from "react";
import { Container,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function AddEmployee()
{
return(
<>
<Navbar />
<Container className="p-5 mt-5">
<Row>
<div className="col-md-4 shadow p-2">
<img src="https://www.icegif.com/wp-content/uploads/2023/03/icegif-1622.gif" className="img-fluid" />
</div>
<div className="col-md-7 p-4">
<h2>Manage  Employee here   <button type="button" className="btn btn-dark btn-md text-white float-end" data-bs-toggle="modal" data-bs-target="#addemp">Add Employee <span className="bi bi-person"></span></button></h2>
<h6>Best services Provides in Rajkot area</h6>
<hr className="border border-1 border-dark"></hr>

{/* display employee data */}

<table className="table table-responsive">
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>salary</th>
        <th>departments</th>
        <th>Action</th>
    </tr>

    <tr align="center">
        <td>101</td>
        <td>Brijesh</td>
        <td>b@gmail.com</td>
        <td>92122121</td>
        <td>98500</td>
        <td>It</td>
        <td><button type="button" className="btn btn-danger btn-sm text-white bg-danger">Delete</button></td>
    </tr>
</table>



</div>

<div className="modal fade" role="dialog" id="addemp">
<div className="modal-dialog">
<div className="modal-content p-5">
        
<form>
<div className="form-group mt-3">
<input type="text" placeholder="Name *" className="form-control border border-dark" />
</div>
<div className="form-group mt-3">
<input type="text" placeholder="Email *" className="form-control border border-dark" />
</div>

<div className="form-group mt-3">
<input type="text" placeholder="Phone *" className="form-control border border-dark" />
</div>

<div className="form-group mt-3">
<input type="text" placeholder="Subject *" className="form-control border border-dark" />
</div>

<div className="form-group mt-3">
<textarea type="text" placeholder="Address *" className="form-control border border-dark"></textarea>
</div>
<div className="form-group mt-3">
<input type="submit"  className="w-50 btn btn-md btn-dark bg-dark text-white" value="AddEmployee" />
</div>
</form>
</div>
</div>
</div>


</Row>
</Container>
<Footer />
</>
)
}
export default AddEmployee