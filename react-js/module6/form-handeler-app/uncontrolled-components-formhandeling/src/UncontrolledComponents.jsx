import React,{useRef} from "react";
// uncontrolled components  : Handel form data via uncontrolled components we take or used useRef to take reference a input data and handel of form data i.e called uncontrolled components
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

function App()
{
    // stored all data in variables 
    const name=useRef();
    const email=useRef();
    const mobile=useRef();
    // create a formHendeler function 

    const hendelForm=(e)=>{

        e.preventDefault();
        const data={

            name:name.current.value,
            email:email.current.value,
            mobile:mobile.current.value

        }

        console.log('Form data successfully submitted',data);
        Swal.fire({
            title: "Thanks",
            text: "Form Data successfully Submitted",
            icon: "success"
          });  

    }
    return (
        <>

        <Container className="bg-white w-50 mx-auto p-5 shadow mt-5">
            <form onSubmit={hendelForm}>
                <div className="form-group mt-3">
                    <label>Name :</label>
                    <input type="text" name="name" ref={name} placeholder="Name *" className="form-control" />
                </div>
                
                <div className="form-group mt-3">
                    <label>Email :</label>
                    <input type="text" ref={email} placeholder="Email *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                    <label>Mobile :</label>
                    <input type="text" ref={mobile} placeholder="Mobile *" className="form-control" />
                </div>

                
                <div className="form-group mt-3">
                    
                    <input type="submit"  className="btn btn-md bg-dark btn-dark text-white" value="Submit" />
                </div>
            </form>
        </Container>
        </>
    )
}

export default App