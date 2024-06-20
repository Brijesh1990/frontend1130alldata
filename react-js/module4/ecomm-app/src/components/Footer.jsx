import React from "react";
import { MDBContainer,MDBRow } from "mdb-react-ui-kit";
function Footer()
{
    return (
        <>
        <MDBContainer fluid className="p-5 bg-dark">
        <MDBRow>
            <div className="col-md-3 p-4 text-white">
                <h1>Be-Pro</h1>
                <h2><span className="bi bi-facebook"></span>
                <span className="bi bi-twitter ms-2"></span>
                <span className="bi bi-instagram ms-2"></span>
                <span className="bi bi-whatsapp ms-2"></span></h2>
            </div>
            <div className="col-md-6 p-4 text-white fs-5">
           <p> Home &nbsp; Womens &nbsp;Mens &nbsp;Conatct &nbsp;PrivacyTerms</p>
           <p><input type="text" placeholder="Enter email for subscribe *" className="form-control w-75"  /></p>
            </div>
            <div className="col-md-3 p-4 text-white">
                <h2>Contact Us</h2>
                <p>San Francisco, California 400 Castro St, San Francisco, CA (+1) 686-868-9999</p>
            </div>
        </MDBRow>
        </MDBContainer>
       
        </>
    )
}

export default Footer