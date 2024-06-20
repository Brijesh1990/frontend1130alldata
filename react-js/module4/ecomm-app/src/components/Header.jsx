import React from "react";
import { MDBNavbar,MDBRow } from "mdb-react-ui-kit";
function Header()
{
    return (
        <>
        <MDBNavbar className="bg-primary p-3 nav navbar navbar-expand-md">
            {/* logo */}
            <a href="" className="navbar-brand fs-4 text-white">Be-Pro EccomApp</a>
            {/* navbar */}
            <ul className="navbar-link">
                <li><a href="">Home</a></li>
                <li><a href="">Shop Now</a></li>
                <li><a href="">Blogs</a></li>
                <li><a href="">Contact</a></li>
                <li className="ms-5"><a href="">Login</a></li>
                <li><a href="">Register</a></li>
                <li><a href=""><span className="bi bi-cart"><span className="badge badge-sm bg-white text-dark">0</span></span></a></li>
                
            </ul>
        </MDBNavbar>
         
        </>
    )
}

export default Header