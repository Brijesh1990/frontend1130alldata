import React from "react";
function Nm()
{
    // var nm=prompt('Enter your name')
    // alert('My name is :'+nm)
    // var nm="Brijesh kumar pandey"
    // document.write(nm)

    var nm="Brijesh kumar poandey";
    document.getElementById("demo").innerHTML="The name of users is :"+nm

}
function Address()
{
    var address="150 feet ring road Rajkot";
    document.getElementById("add").innerHTML="Address is :"+address
}

export  {Nm,Address}