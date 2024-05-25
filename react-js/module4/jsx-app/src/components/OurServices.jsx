import React from "react";
import brijesh from '../assets/images/brijesh.jpg'
function OurServices()
{
    return (
        <>
            <h1>Our services</h1>
            <hr />
            <p>best provides services</p>
            <b>Our services :Best</b>
            <br />
            <b>Contact us</b>
            <img src={brijesh} alt="brijesh" title="hi brijesh i am using react js jsx elements" width="150px" height="150px" style={{borderRadius:"50%"}} />
        </>
    )
}
export default OurServices