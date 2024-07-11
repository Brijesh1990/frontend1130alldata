import React,{useState} from "react";
// what is controlled components : when we handel data of any form using useState it is rely on state in react js and handel form data i.e called controlled components;
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
function App()
{
    // destructuring of data
    const[formData,setFormData]=useState({
        name:'',
        email:''
    });

    // create a formhandeling function 
    const handelChange=(e)=>{

        const{name,value}=e.target;
        setFormData({
            ...formData,[name]:value

            
        })

       
    }

    // create a function for submit button
    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log('Form data submitted successfully',formData);
        Swal.fire({
            title: "Thanks",
            text: "Form Data successfully Submitted",
            icon: "success"
          }); 
        // window.location.reload();
        //e.target.reset();

    }

    
    return (
        <>
        <Container className="bg-white w-50 mx-auto p-5 shadow mt-5">
            <form onSubmit={handelSubmit}>
                <div className="form-group mt-3">
                    <label>Name :</label>
                    <input type="text" name="name" value={formData.name} onChange={handelChange} placeholder="Name *" className="form-control" />
                </div>
                
                <div className="form-group mt-3">
                    <label>Email :</label>
                    <input type="text" name="email" value={formData.email} onChange={handelChange} placeholder="Email *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                    
                    <input type="submit"  className="btn btn-md bg-dark btn-dark text-white" value="Submit" />
                </div>
            </form>
        </Container>
        </>
    )
}

export default App;