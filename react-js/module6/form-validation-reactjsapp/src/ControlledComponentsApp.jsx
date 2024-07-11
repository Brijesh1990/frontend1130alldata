import React,{useState} from "react";
// what is controlled components : when we handel data of any form using useState it is rely on state in react js and handel form data i.e called controlled components;
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
function App()
{
    // destructuring of data
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        mobile:''
    });

    // destructuring of data for errors for form handeling validations
    const[errors,setErrors]=useState({});


    // form form validation create a function 
    const validate=()=>{

        const errors={};
        if(!formData.name)
            errors.name="Please Enter Your Name *";
        if(!formData.email)
            errors.email="Please Enter Your Email *";
        if(!formData.mobile)
            errors.mobile="Please Enter Your Mobile *";

        return errors;
    }


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
        // pass an errors messages for validations 
        const errors=validate();
        if(Object.keys(errors).length===0){
            console.log('Form data submitted successfully',formData);
            Swal.fire({
                title: "Thanks",
                text: "Form Data successfully Submitted",
                icon: "success"
              }); 
        }
        else 
        {
            setErrors(errors);

        }

       
        // window.location.reload();
        //e.target.reset();

    }

    
    return (
        <>
        <Container className="bg-white w-50 mx-auto p-5 shadow mt-5">
            <form onSubmit={handelSubmit}>
                <div className="form-group mt-3">
                    <label>Name :</label>
                    <input type="text" name="name" value={formData.name} onChange={handelChange} placeholder="Name *" className="form-control"  />
                    
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </div>
                
                <div className="form-group mt-3">
                    <label>Email :</label>
                    <input type="text" name="email" value={formData.email} onChange={handelChange} placeholder="Email *" className="form-control" />
                    
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </div>

                <div className="form-group mt-3">
                    <label>Mobile :</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handelChange} placeholder="Email *" className="form-control" />
                    
                    {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
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